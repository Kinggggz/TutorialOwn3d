(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.DUnitOptimizer = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  const DIFFICULTY_WEIGHT = Object.freeze({ 'Fácil': 1, 'Médio': 2, 'Difícil': 4, 'Evento': 7 });

  function difficultyWeight(value) {
    return DIFFICULTY_WEIGHT[value] || 4;
  }

  function remainingConditions(group) {
    return Math.max(0, 4 - Math.max(0, Math.min(4, Number(group.steps) || 0)));
  }

  function remainingGain(group, stat) {
    const start = Math.max(0, Math.min(4, Number(group.steps) || 0));
    return (group.rewards || []).slice(start).reduce((sum, reward) => {
      return sum + (reward && reward.stat === stat ? Number(reward.value) || 0 : 0);
    }, 0);
  }

  function isEligible(group, availability) {
    if (!group || remainingConditions(group) === 0) return false;
    if (availability === 'noevent') return group.difficulty !== 'Evento';
    if (availability === 'accessible') return group.difficulty === 'Fácil' || group.difficulty === 'Médio';
    return true;
  }

  function unresolvedComposition(group) {
    return (group.digimons || []).some((name) => /Digimon\(s\).*nomes em validação|não confirmada|nomes em validação/i.test(String(name)));
  }

  function addVector(a, b) {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3]];
  }

  function compareVector(a, b) {
    if (!b) return -1;
    for (let i = 0; i < a.length; i += 1) {
      if (a[i] < b[i]) return -1;
      if (a[i] > b[i]) return 1;
    }
    return 0;
  }

  function candidateCost(candidate, strategy, rankMode) {
    const rem = candidate.remaining;
    const diff = candidate.difficultyCost;
    const unknown = candidate.unresolved ? 1 : 0;
    const effective = rankMode && strategy === 'gain' ? 'balanced' : strategy;

    if (effective === 'fast') return [rem, diff, unknown, 1];
    if (effective === 'cheap') return [diff, rem, unknown, 1];
    if (effective === 'gain') return [1, rem, diff, unknown];
    // Balance: exact minimization of a declared workload index, then natural tie-breaks.
    return [rem * 3 + diff * 2, rem, diff, unknown];
  }

  function orderSelected(selected, strategy, rankMode) {
    const effective = rankMode && strategy === 'gain' ? 'balanced' : strategy;
    return [...selected].sort((a, b) => {
      if (effective === 'gain' && !rankMode && b.gain !== a.gain) return b.gain - a.gain;
      const ca = candidateCost(a, effective, rankMode);
      const cb = candidateCost(b, effective, rankMode);
      const cmp = compareVector(ca, cb);
      if (cmp !== 0) return cmp;
      return String(a.group.name).localeCompare(String(b.group.name), 'pt-BR');
    });
  }

  /**
   * Exact 0/1 dynamic-programming optimizer.
   * - Ranking mode: each completed group contributes 1 toward the next rank.
   * - Status mode: each group contributes only rewards not yet earned for the selected status.
   * Costs are optimized lexicographically according to the selected strategy.
   */
  function optimizeRoute({ groups, target, needed, strategy = 'balanced', availability = 'all' }) {
    const rankMode = target === 'rank';
    const requested = Math.max(0, Math.floor(Number(needed) || 0));
    if (requested === 0) {
      return { reachable: true, selected: [], totalGain: 0, maximumGain: 0, needed: 0, exact: true, strategyUsed: strategy };
    }

    const candidates = [];
    for (const group of groups || []) {
      if (!isEligible(group, availability)) continue;
      const gain = rankMode ? 1 : Math.max(0, Math.floor(remainingGain(group, target)));
      if (!rankMode && gain <= 0) continue;
      candidates.push({
        group,
        gain,
        remaining: remainingConditions(group),
        difficultyCost: difficultyWeight(group.difficulty),
        unresolved: unresolvedComposition(group)
      });
    }

    const maximumGain = candidates.reduce((sum, candidate) => sum + candidate.gain, 0);
    if (maximumGain < requested) {
      const selected = orderSelected(candidates, strategy, rankMode);
      return {
        reachable: false,
        partial: maximumGain > 0,
        selected,
        totalGain: maximumGain,
        maximumGain,
        needed: requested,
        shortfall: requested - maximumGain,
        remainingConditions: selected.reduce((sum, candidate) => sum + candidate.remaining, 0),
        difficultyScore: selected.reduce((sum, candidate) => sum + candidate.difficultyCost, 0),
        unresolvedCount: selected.reduce((sum, candidate) => sum + (candidate.unresolved ? 1 : 0), 0),
        exact: true,
        strategyUsed: rankMode && strategy === 'gain' ? 'balanced' : strategy
      };
    }

    // State index is capped accumulated gain. Each state stores the best lexicographic route for that gain.
    const states = new Array(requested + 1).fill(null);
    states[0] = { cost: [0, 0, 0, 0], route: [] };

    for (let idx = 0; idx < candidates.length; idx += 1) {
      const candidate = candidates[idx];
      const cCost = candidateCost(candidate, strategy, rankMode);
      // Snapshot reachable states so the current group cannot be reused in the same iteration.
      const previous = states.slice();
      for (let gainSoFar = 0; gainSoFar <= requested; gainSoFar += 1) {
        const state = previous[gainSoFar];
        if (!state) continue;
        const nextGain = Math.min(requested, gainSoFar + candidate.gain);
        const nextCost = addVector(state.cost, cCost);
        const incumbent = states[nextGain];
        if (!incumbent || compareVector(nextCost, incumbent.cost) < 0) {
          states[nextGain] = { cost: nextCost, route: state.route.concat(idx) };
        }
      }
    }

    const best = states[requested];
    if (!best) {
      return { reachable: false, selected: [], totalGain: 0, maximumGain, needed: requested, exact: true, strategyUsed: strategy };
    }

    const selected = orderSelected(best.route.map((index) => candidates[index]), strategy, rankMode);
    const totalGain = selected.reduce((sum, candidate) => sum + candidate.gain, 0);
    return {
      reachable: true,
      selected,
      totalGain,
      maximumGain,
      needed: requested,
      remainingConditions: selected.reduce((sum, candidate) => sum + candidate.remaining, 0),
      difficultyScore: selected.reduce((sum, candidate) => sum + candidate.difficultyCost, 0),
      unresolvedCount: selected.reduce((sum, candidate) => sum + (candidate.unresolved ? 1 : 0), 0),
      exact: true,
      strategyUsed: rankMode && strategy === 'gain' ? 'balanced' : strategy
    };
  }

  return {
    DIFFICULTY_WEIGHT,
    difficultyWeight,
    remainingConditions,
    remainingGain,
    isEligible,
    unresolvedComposition,
    optimizeRoute,
    _compareVector: compareVector,
    _candidateCost: candidateCost
  };
});
