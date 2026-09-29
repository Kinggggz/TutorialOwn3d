(() => {
  'use strict';

  const officialData = Array.isArray(window.DUNIT_DATA) ? window.DUNIT_DATA.map((group) => structuredClone(group)) : [];
  const optimizer = window.DUnitOptimizer;
  if (!optimizer || !officialData.length) throw new Error('Base D-Unit não carregada.');

  const STATS = Object.freeze([
    'AT','HT','CT','HP','DS','DE','EV','BL','EXP','SCD','Base SCD','Dano de atributo básico','Vacina SCD','Dados SCD','Vírus SCD',
    'Luz SCD','Escuridão SCD','Desconhecido SCD','Fogo SCD','Gelo SCD','Água SCD','Madeira SCD','Vento SCD',
    'Eletricidade SCD','Aço SCD','Terra SCD'
  ]);
  const DIFFICULTIES = new Set(['Fácil','Médio','Difícil','Evento']);
  const KEY = 'owned-dunit-ladmo-v3';
  const LEGACY_KEY = 'owned-dunit-ladmo-v2';
  const PAGE_SIZE = window.matchMedia('(max-width: 720px)').matches ? 30 : 60;
  let listLimit = PAGE_SIZE;

  const ids = [
    'rankName','completeCount','conditionCount','nextCount','rankProgress','rankNext','rankBar','verifiedCount','qOfficial','qCustom',
    'qCompleteCompositions','qPartialCompositions','earnedGoal','earnedLabel','groupList','listStatus','loadMoreBtn','route','ranks','goal',
    'targetAmount','strategy','availability','search','difficulty','state','addBtn','addModal','saveGroup','newName','newDigimon','newRewards',
    'newDifficulty','addForm','resetBtn','exportBtn','importBtn','fileInput','toast','difficultyModal','difficultyTitle','difficultyDeckName','difficultySummary','difficultyMetrics','difficultyPoints','difficultyEvolutionSection','difficultyEvolutions','difficultyFocus','difficultyClose'
  ];
  const el = Object.fromEntries(ids.map((id) => [id, document.getElementById(id)]));
  const rankDefs = [['Iniciante',0],['Bronze',1],['Prata',30],['Ouro',60],['Platina',100],['Diamante',140],['Mestre',190],['Digimon Master',260]];

  const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const clampStep = (value) => Math.max(0, Math.min(4, Math.floor(Number(value) || 0)));
  const unresolved = optimizer.unresolvedComposition;
  const displayStat = (stat) => stat === 'Base SCD' ? 'SCD de atributo Base' : stat;
  const displayReward = (reward) => {
    const label = String(reward?.label || '');
    if (reward?.stat === 'Base SCD') return label.replace(/^Base SCD/, 'SCD de atributo Base');
    if (reward?.stat === 'SCD') return label;
    return label;
  };
  const formatValue = (value, stat) => `${value}${stat === 'EXP' || stat.includes('SCD') || stat === 'Dano de atributo básico' ? '%' : ''}`;
  const visibleDigimons = (group) => unresolved(group) ? `${group.memberCount || '?'} Digimons` : (group.digimons || []).join(' · ');

  const SPECIAL_FORM_RULES = Object.freeze([
    { re: /despertad[oa]|awakened/i, label: 'Despertado' },
    { re: /supremacia|supremacy|extreme/i, label: 'Supremacia/Extreme' },
    { re: /resist[eê]ncia|resistance/i, label: 'Resistência' },
    { re: /superior mode|modo superior/i, label: 'Superior Mode' },
    { re: /merciful mode|modo misericordioso/i, label: 'Merciful Mode' },
    { re: /paladin mode|modo paladino/i, label: 'Paladin Mode' },
    { re: /fighter mode|modo lutador/i, label: 'Fighter Mode' },
    { re: /crimson mode|modo carmesim/i, label: 'Crimson Mode' },
    { re: /burst mode/i, label: 'Burst Mode' },
    { re: /blast mode/i, label: 'Blast Mode' },
    { re: /x-antibody|x antibody|\[x\]|\(x\)/i, label: 'X-Antibody' },
    { re: /jogress/i, label: 'Jogress' },
    { re: /fusão|fusion/i, label: 'Fusão' },
    { re: /kizuna|laços/i, label: 'Kizuna/Laços' },
    { re: /alter[- ]?[sb]/i, label: 'Alter' },
    { re: /zwart/i, label: 'Zwart' },
    { re: /\bx7\b/i, label: 'X7' },
    { re: /zeed/i, label: 'Zeed' },
    { re: /shin/i, label: 'Shin' },
    { re: /\(evento\)/i, label: 'Evento' }
  ]);

  function deckRequirements(group) {
    let obtained = 0, transcended = 0, maxLevel = 0;
    for (const condition of group.conditions || []) {
      const text = String(condition || '');
      const trans = text.match(/Obtido\s+(\d+)\s+Digimons?\s+Transcendidos/i);
      const owned = !trans && text.match(/Obtido\s+(\d+)\s+Digimons?/i);
      const level = text.match(/N[ií]vel Total dos Digimons\s+(\d+)/i);
      if (trans) transcended = Math.max(transcended, Number(trans[1]) || 0);
      if (owned) obtained = Math.max(obtained, Number(owned[1]) || 0);
      if (level) maxLevel = Math.max(maxLevel, Number(level[1]) || 0);
    }
    return { obtained, transcended, maxLevel };
  }

  function specialEvolutionInfo(group) {
    if (unresolved(group)) return { names: [], signals: [], unresolved: true };
    const names = [], signalSet = new Set();
    for (const name of group.digimons || []) {
      const matched = SPECIAL_FORM_RULES.filter((rule) => rule.re.test(String(name)));
      if (!matched.length) continue;
      names.push(String(name));
      matched.forEach((rule) => signalSet.add(rule.label));
    }
    return { names, signals: [...signalSet], unresolved: false };
  }

  function structuralEffort(group, req, evo) {
    const members = Number(group.memberCount || group.digimons?.length || 0);
    let score = 0;
    if (members >= 8) score += 3; else if (members >= 4) score += 2; else if (members > 1) score += 1;
    if (req.transcended >= 8) score += 4; else if (req.transcended >= 4) score += 3; else if (req.transcended > 0) score += 1;
    if (req.maxLevel >= 1200) score += 4; else if (req.maxLevel >= 900) score += 3; else if (req.maxLevel >= 600) score += 2; else if (req.maxLevel > 0) score += 1;
    score += Math.min(4, evo.names.length * 2);
    if (group.difficulty === 'Evento') score += 4;
    const label = score >= 10 ? 'Alto' : score >= 6 ? 'Moderado' : 'Baixo';
    return { score, label };
  }

  function nextPendingCondition(group) {
    const step = clampStep(group.steps);
    if (step >= 4) return '';
    return String(group.conditions?.[step] || `Condição ${step + 1}`);
  }

  function routeContextFor(group) {
    const target = el.goal.value;
    const completed = groups.filter((item) => clampStep(item.steps) === 4).length;
    let needed = 0;
    if (target === 'rank') {
      const next = nextRank(completed);
      if (!next) return { status: 'complete-rank', target, result: null, position: -1 };
      needed = Math.max(0, next[1] - completed);
    } else {
      const requested = Math.max(0, Math.floor(Number(el.targetAmount.value) || 0));
      if (!requested) return { status: 'no-target', target, result: null, position: -1 };
      needed = Math.max(0, requested - selectedStatTotal(target));
      if (!needed) return { status: 'target-met', target, result: null, position: -1 };
    }
    const result = optimizer.optimizeRoute({ groups, target, needed, strategy: el.strategy.value, availability: el.availability.value });
    const position = result.reachable ? result.selected.findIndex((candidate) => candidate.group.id === group.id) : -1;
    return { status: result.reachable ? 'ok' : 'unreachable', target, result, position };
  }

  function difficultyAnalysis(group) {
    const req = deckRequirements(group);
    const evo = specialEvolutionInfo(group);
    const effort = structuralEffort(group, req, evo);
    const remaining = optimizer.remainingConditions(group);
    const points = [];
    const memberCount = Number(group.memberCount || group.digimons?.length || 0);

    if (memberCount >= 8) points.push(`Composição extensa: ${memberCount} Digimons precisam contribuir para o grupo.`);
    else if (memberCount >= 4) points.push(`Composição intermediária: ${memberCount} Digimons fazem parte do grupo.`);
    else if (memberCount > 1) points.push(`Composição curta: ${memberCount} Digimons fazem parte do grupo.`);
    else if (memberCount === 1) points.push('Composição direta: apenas 1 Digimon faz parte do grupo.');

    if (req.transcended >= 8) points.push(`Transcendência alta: a condição exige ${req.transcended} Digimons transcendidos.`);
    else if (req.transcended >= 4) points.push(`Transcendência moderada: a condição exige ${req.transcended} Digimons transcendidos.`);
    else if (req.transcended > 0) points.push(`A condição exige ${req.transcended} Digimon${req.transcended > 1 ? 's' : ''} transcendido${req.transcended > 1 ? 's' : ''}.`);

    if (req.maxLevel >= 1200) points.push(`Progressão de nível muito alta: o requisito final chega a ${req.maxLevel} de nível total.`);
    else if (req.maxLevel >= 900) points.push(`Progressão de nível alta: o requisito final chega a ${req.maxLevel} de nível total.`);
    else if (req.maxLevel >= 600) points.push(`Progressão de nível intermediária: o requisito final chega a ${req.maxLevel}.`);
    else if (req.maxLevel > 0) points.push(`Progressão de nível mais curta: requisito final de ${req.maxLevel}.`);

    if (evo.names.length) points.push(`${evo.names.length} forma${evo.names.length > 1 ? 's' : ''} especial${evo.names.length > 1 ? 'is' : ''} identificada${evo.names.length > 1 ? 's' : ''} aumenta${evo.names.length > 1 ? 'm' : ''} a complexidade de obtenção.`);

    if (remaining === 0) points.push('As quatro condições deste grupo já estão concluídas.');
    else if (remaining === 1) points.push('Falta apenas a condição final para concluir este grupo.');
    else points.push(`Você já avançou ${4 - remaining}/4; ainda faltam ${remaining} condições.`);

    const route = routeContextFor(group);
    let focusClass = 'medium', focusTitle = 'Foco médio', focusText = '';
    const nextCondition = nextPendingCondition(group);
    if (remaining === 0) {
      focusClass = 'done'; focusTitle = 'Concluído'; focusText = 'Este grupo já está completo e não precisa mais de investimento.';
    } else if (route.status === 'complete-rank') {
      focusClass = 'done'; focusTitle = 'Ranking máximo'; focusText = 'Você já atingiu o maior ranking configurado no planejador.';
    } else if (route.status === 'target-met') {
      focusClass = 'done'; focusTitle = 'Meta atingida'; focusText = 'Sua meta atual já foi alcançada; este deck pode ficar para um objetivo futuro.';
    } else if (route.status === 'no-target') {
      focusClass = remaining <= 1 ? 'high' : remaining <= 2 ? 'medium' : 'low';
      focusTitle = remaining <= 1 ? 'Foco alto' : remaining <= 2 ? 'Foco médio' : 'Foco secundário';
      focusText = `Para ranking, faltam ${remaining} condições.${nextCondition ? ` Próxima etapa: ${nextCondition}.` : ''}`;
    } else if (route.status === 'unreachable') {
      focusClass = 'low'; focusTitle = 'Foco secundário'; focusText = `Com os filtros atuais, o planejador não consegue atingir a meta selecionada.${nextCondition ? ` Se quiser avançar neste grupo, a próxima etapa é: ${nextCondition}.` : ''}`;
    } else if (route.position >= 0) {
      focusClass = route.position < 5 ? 'high' : 'medium';
      focusTitle = route.position < 5 ? 'Foco alto' : 'Bom foco';
      focusText = `Este deck está na rota otimizada atual, na posição ${route.position + 1}.${nextCondition ? ` Próxima etapa: ${nextCondition}.` : ''}`;
    } else {
      const excluded = (el.availability.value === 'accessible' && !['Fácil','Médio'].includes(group.difficulty)) || (el.availability.value === 'noevent' && group.difficulty === 'Evento');
      focusClass = 'low';
      focusTitle = excluded ? 'Fora do filtro atual' : 'Foco secundário';
      focusText = excluded ? 'A disponibilidade selecionada exclui este nível de dificuldade da rota.' : `Para sua meta atual, o otimizador encontrou grupos com melhor relação entre ganho e esforço.${nextCondition ? ` Próxima etapa deste deck: ${nextCondition}.` : ''}`;
    }

    const summary = group.difficulty === 'Fácil' ? 'Progressão direta, com requisitos estruturais menores.' : group.difficulty === 'Médio' ? 'Progressão intermediária, equilibrando quantidade, nível e transcendência.' : group.difficulty === 'Evento' ? 'Obtenção ligada a conteúdo de evento, além dos requisitos do grupo.' : 'Progressão exigente, com maior volume de preparação ou formas avançadas.';
    return { req, evo, effort, remaining, points, route, focusClass, focusTitle, focusText, summary };
  }

  function currentRank(total) {
    let current = rankDefs[0];
    for (const rank of rankDefs) if (total >= rank[1]) current = rank;
    return current;
  }
  function nextRank(total) { return rankDefs.find((rank) => rank[1] > total) || null; }

  function normalizeOfficialProgress(raw) {
    const stepMap = new Map();
    if (Array.isArray(raw)) {
      for (const item of raw) if (item && item.id) stepMap.set(String(item.id), clampStep(item.steps));
    } else if (raw && typeof raw === 'object') {
      const source = raw.officialSteps && typeof raw.officialSteps === 'object' ? raw.officialSteps : {};
      for (const [id, step] of Object.entries(source)) stepMap.set(id, clampStep(step));
    }
    return stepMap;
  }

  function validateReward(raw) {
    if (!raw || typeof raw !== 'object') return null;
    const stat = String(raw.stat || '').trim();
    const value = Number(raw.value);
    const label = String(raw.label || '').trim();
    if (!STATS.includes(stat) || !Number.isInteger(value) || value < 0 || value > 100000 || !label || label.length > 80) return null;
    return { stat, value, label };
  }

  function validateCustomGroup(raw, fallbackId) {
    if (!raw || typeof raw !== 'object' || raw.official === true) return null;
    const name = String(raw.name || '').trim();
    if (!name || name.length > 100) return null;
    const digimons = Array.isArray(raw.digimons) ? raw.digimons.map((item) => String(item).trim()).filter(Boolean) : [];
    if (!digimons.length || digimons.length > 30 || digimons.some((name) => name.length > 100)) return null;
    const rewards = Array.isArray(raw.rewards) ? raw.rewards.map(validateReward) : [];
    if (rewards.length !== 4 || rewards.some((reward) => !reward)) return null;
    const difficulty = DIFFICULTIES.has(raw.difficulty) ? raw.difficulty : 'Difícil';
    const idCandidate = String(raw.id || '');
    const id = /^custom-[A-Za-z0-9_-]{1,80}$/.test(idCandidate) ? idCandidate : fallbackId;
    return {
      id, name, digimons, rewards, difficulty, date: 'Manual', source: '', official: false,
      conditions: ['Condição 1','Condição 2','Condição 3','Condição 4'], memberCount: digimons.length, steps: clampStep(raw.steps)
    };
  }


  function uniqueCustomGroups(items) {
    const used = new Set(officialData.map((group) => group.id));
    return items.map((group, index) => {
      if (!group) return null;
      let id = group.id;
      if (used.has(id)) id = `custom-import-${Date.now()}-${index}`;
      used.add(id);
      return {...group, id};
    }).filter(Boolean);
  }

  function applyProgress(stepMap) {
    for (const group of officialData) {
      const idsToCheck = [group.id, group.previousId, ...(group.legacyIds || [])].filter(Boolean);
      group.steps = Math.max(0, ...idsToCheck.map((id) => stepMap.get(String(id)) || 0));
    }
  }

  function loadGroups() {
    let parsed = null;
    try { parsed = JSON.parse(localStorage.getItem(KEY)); } catch {}
    if (parsed && parsed.version === 3) {
      applyProgress(normalizeOfficialProgress(parsed));
      const custom = Array.isArray(parsed.customGroups)
        ? uniqueCustomGroups(parsed.customGroups.slice(0, 300).map((item, index) => validateCustomGroup(item, `custom-import-${Date.now()}-${index}`)).filter(Boolean))
        : [];
      return officialData.map((group) => ({...group})).concat(custom);
    }

    let legacy = null;
    try { legacy = JSON.parse(localStorage.getItem(LEGACY_KEY)); } catch {}
    if (Array.isArray(legacy)) {
      applyProgress(normalizeOfficialProgress(legacy));
      const custom = uniqueCustomGroups(legacy.filter((item) => item && !item.official).slice(0, 300)
        .map((item, index) => validateCustomGroup(item, `custom-import-${Date.now()}-${index}`)).filter(Boolean));
      return officialData.map((group) => ({...group})).concat(custom);
    }
    return officialData.map((group) => ({...group, steps: 0}));
  }

  let groups = loadGroups();

  function compactState() {
    const officialSteps = {};
    for (const group of groups) if (group.official && group.steps) officialSteps[group.id] = clampStep(group.steps);
    const customGroups = groups.filter((group) => !group.official).map((group) => ({
      id: group.id, name: group.name, digimons: group.digimons, rewards: group.rewards,
      difficulty: group.difficulty, steps: clampStep(group.steps), official: false
    }));
    return { version: 3, updatedAt: new Date().toISOString(), officialSteps, customGroups };
  }
  function save() { localStorage.setItem(KEY, JSON.stringify(compactState())); }

  function selectedStatTotal(stat) {
    return groups.reduce((sum, group) => sum + (group.rewards || []).slice(0, clampStep(group.steps))
      .filter((reward) => reward.stat === stat).reduce((part, reward) => part + Number(reward.value || 0), 0), 0);
  }

  function renderSummary() {
    const complete = groups.filter((group) => clampStep(group.steps) === 4).length;
    const conditions = groups.reduce((sum, group) => sum + clampStep(group.steps), 0);
    const current = currentRank(complete);
    const next = nextRank(complete);
    const missing = next ? Math.max(0, next[1] - complete) : 0;
    el.rankName.textContent = current[0];
    el.completeCount.textContent = complete;
    el.conditionCount.textContent = conditions;
    el.nextCount.textContent = missing;
    el.rankProgress.textContent = `${complete} grupos completos`;
    el.rankNext.textContent = next ? `Falta ${missing} para ${next[0]}` : 'Ranking máximo alcançado';
    const percent = next ? Math.max(0, Math.min(100, ((complete - current[1]) / (next[1] - current[1])) * 100)) : 100;
    el.rankBar.style.width = `${percent}%`;
    el.rankBar.parentElement.setAttribute('aria-valuenow', String(Math.round(percent)));
    el.rankBar.parentElement.setAttribute('aria-valuetext', el.rankNext.textContent);
    return { complete, current, next, missing };
  }

  function renderGoal() {
    const stat = el.goal.value;
    const gainOption = el.strategy.querySelector('option[value="gain"]');
    if (gainOption) gainOption.disabled = stat === 'rank';
    if (stat === 'rank' && el.strategy.value === 'gain') el.strategy.value = 'balanced';
    if (stat === 'rank') {
      el.earnedGoal.textContent = groups.filter((group) => group.official && clampStep(group.steps) === 4).length;
      el.earnedLabel.textContent = 'grupos concluídos';
      el.targetAmount.disabled = true;
      return;
    }
    el.targetAmount.disabled = false;
    const total = selectedStatTotal(stat);
    el.earnedGoal.textContent = formatValue(total, stat);
    el.earnedLabel.textContent = `${displayStat(stat)} obtido`;
  }

  function filteredGroups() {
    const query = el.search.value.trim().toLocaleLowerCase('pt-BR');
    const difficulty = el.difficulty.value;
    const state = el.state.value;
    return groups.filter((group) => {
      const haystack = [group.name, ...(group.digimons || []), ...(group.conditions || []), ...(group.rewards || []).map((reward) => reward.label)].join(' ').toLocaleLowerCase('pt-BR');
      const step = clampStep(group.steps);
      return (!query || haystack.includes(query)) &&
        (difficulty === 'all' || group.difficulty === difficulty) &&
        (state === 'all' || state === 'near' && step === 3 || state === 'complete' && step === 4 || state === 'pending' && step < 4);
    });
  }

  function groupCard(group) {
    const target = el.goal.value;
    const diffClass = group.difficulty === 'Fácil' ? 'easy' : group.difficulty === 'Médio' ? 'medium' : group.difficulty === 'Evento' ? 'event' : 'hard';
    const badge = `<button type="button" class="badge difficulty-badge ${diffClass}" data-id="${esc(group.id)}" aria-haspopup="dialog" aria-label="Analisar dificuldade de ${esc(group.name)}">${esc(group.difficulty)}</button>`;
    const conditionButtons = [1,2,3,4].map((index) => {
      const completed = clampStep(group.steps) >= index;
      const condition = group.conditions?.[index - 1] || `Condição ${index}`;
      return `<button type="button" class="dot ${completed ? (clampStep(group.steps) === 4 ? 'done' : 'on') : ''}" data-id="${esc(group.id)}" data-step="${index}" aria-pressed="${completed}" aria-label="${esc(`Condição ${index} de ${group.name}: ${condition}. ${completed ? 'Concluída' : 'Não concluída'}.`)}">${index}</button>`;
    }).join('');
    const rewards = group.rewards.map((reward, index) => `<div class="reward ${index < clampStep(group.steps) ? 'earned' : ''} ${target !== 'rank' && reward.stat === target ? 'target' : ''}"><small>${esc(group.conditions?.[index] || `Condição ${index + 1}`)}</small>${esc(displayReward(reward))}</div>`).join('');
    return `<article class="group"><div class="group-top"><div><h3>${esc(group.name)}</h3><p class="digis" title="${esc(visibleDigimons(group))}">${esc(visibleDigimons(group))}</p></div>${badge}<div class="steps">${conditionButtons}</div></div><div class="rewards">${rewards}</div></article>`;
  }

  function renderGroups() {
    const all = filteredGroups();
    const visible = all.slice(0, listLimit);
    el.groupList.innerHTML = visible.length ? visible.map(groupCard).join('') : '<div class="empty">Nenhum grupo encontrado.</div>';
    const remaining = Math.max(0, all.length - visible.length);
    el.listStatus.textContent = all.length ? `Exibindo ${visible.length} de ${all.length} grupos` : '';
    el.loadMoreBtn.hidden = remaining === 0;
    el.loadMoreBtn.textContent = remaining ? `Carregar mais (${Math.min(PAGE_SIZE, remaining)})` : '';
  }

  function routeCard(candidate, index, target) {
    const group = candidate.group;
    const gain = target === 'rank' ? '' : `<span class="route-score">Ganho: ${esc(formatValue(candidate.gain, target))}</span>`;
    const head = `<b>${index + 1}. ${esc(group.name)}</b><span>${candidate.remaining} condições restantes · ${esc(group.difficulty)}</span>${gain}`;
    if (unresolved(group)) return `<article class="route-item">${head}</article>`;
    return `<details class="route-item"><summary>${head}</summary><div class="route-digimons">${esc((group.digimons || []).join(' · '))}</div></details>`;
  }

  function renderRoute(summary) {
    const target = el.goal.value;
    const rankMode = target === 'rank';
    let needed;
    if (rankMode) {
      if (!summary.next) {
        el.route.innerHTML = '<p class="notice">Ranking máximo alcançado.</p>';
        return;
      }
      needed = summary.missing;
    } else {
      const requested = Math.max(0, Math.floor(Number(el.targetAmount.value) || 0));
      if (!requested) {
        el.route.innerHTML = '<p class="notice">Defina um valor desejado para calcular a rota otimizada.</p>';
        return;
      }
      needed = Math.max(0, requested - selectedStatTotal(target));
      if (needed === 0) {
        el.route.innerHTML = '<p class="notice">A meta já foi atingida com os grupos marcados.</p>';
        return;
      }
    }

    const result = optimizer.optimizeRoute({
      groups, target, needed, strategy: el.strategy.value, availability: el.availability.value
    });
    const selected = result.selected || [];
    let summaryHtml;
    if (!result.reachable) {
      if (!selected.length) {
        el.route.innerHTML = '<p class="notice">Nenhum grupo disponível com os filtros atuais.</p>';
        return;
      }
      if (rankMode) {
        summaryHtml = `<div class="route-summary"><b>Rota otimizada</b><span>${selected.length} grupos · ${result.remainingConditions} condições</span></div>`;
      } else {
        const maximumTotal = selectedStatTotal(target) + result.maximumGain;
        summaryHtml = `<div class="route-summary"><b>Rota otimizada</b><span>${selected.length} grupos · ${result.remainingConditions} condições · ${esc(displayStat(target))} ${esc(formatValue(maximumTotal, target))}</span></div>`;
      }
    } else {
      const gainText = rankMode ? `${selected.length} grupos` : formatValue(result.totalGain, target);
      summaryHtml = `<div class="route-summary"><b>Rota otimizada</b><span>${selected.length} grupos · ${result.remainingConditions} condições · ganho ${esc(gainText)}</span></div>`;
    }
    if (!selected.length) { el.route.innerHTML = summaryHtml + '<p class="notice">Nenhum grupo necessário.</p>'; return; }
    const visible = selected.slice(0, 12).map((candidate, index) => routeCard(candidate, index, target)).join('');
    const remaining = selected.slice(12);
    const extra = remaining.length ? `<details class="route-more"><summary>Ver rota completa (+${remaining.length})</summary><div class="route-more-list">${remaining.map((candidate, index) => routeCard(candidate, index + 12, target)).join('')}</div></details>` : '';
    el.route.innerHTML = summaryHtml + visible + extra;
  }

  function renderRanks(total, current) {
    el.ranks.innerHTML = rankDefs.slice(1).map((rank) => `<div class="rank-row ${rank[0] === current ? 'current' : ''} ${total >= rank[1] ? 'done' : ''}"><span>${esc(rank[0])}</span><b>${total >= rank[1] ? 'Concluído' : `${total}/${rank[1]}`}</b></div>`).join('');
  }

  function renderQuality() {
    const partial = officialData.filter(unresolved).length;
    el.qOfficial.textContent = officialData.length;
    el.qCustom.textContent = groups.filter((group) => !group.official).length;
    el.qCompleteCompositions.textContent = officialData.length - partial;
    el.qPartialCompositions.textContent = partial;
    el.verifiedCount.textContent = `${officialData.length} grupos cadastrados`;
  }

  function render() {
    const summary = renderSummary();
    renderGoal();
    renderGroups();
    renderRoute(summary);
    renderRanks(summary.complete, summary.current[0]);
    renderQuality();
  }

  function toast(message) {
    el.toast.textContent = message;
    el.toast.classList.add('show');
    clearTimeout(window.__dunitToast);
    window.__dunitToast = setTimeout(() => el.toast.classList.remove('show'), 2600);
  }

  function parseRewardLabel(label) {
    const text = String(label || '').trim();
    const numberMatch = text.match(/[+-]?\d+/);
    if (!numberMatch) return null;
    const value = Number(numberMatch[0]);
    const normalized = text.toLocaleLowerCase('pt-BR');
    const stat = [...STATS].sort((a, b) => b.length - a.length).find((candidate) => normalized.includes(candidate.toLocaleLowerCase('pt-BR')));
    if (!stat || !Number.isInteger(value) || value < 0 || value > 100000) return null;
    return { stat, value, label: text.slice(0, 80) };
  }

  function openDifficultyInfo(group) {
    const analysis = difficultyAnalysis(group);
    el.difficultyTitle.textContent = group.difficulty;
    el.difficultyDeckName.textContent = group.name;
    el.difficultySummary.textContent = analysis.summary;
    const metrics = [
      ['Digimons', group.memberCount || group.digimons?.length || '—'],
      ['Transcendidos', analysis.req.transcended || '—'],
      ['Nível total', analysis.req.maxLevel || '—'],
      ['Esforço', analysis.effort.label],
      ['Faltam', analysis.remaining ? `${analysis.remaining} condições` : 'Concluído']
    ];
    el.difficultyMetrics.innerHTML = metrics.map(([label, value]) => `<div><small>${esc(label)}</small><strong>${esc(value)}</strong></div>`).join('');
    el.difficultyPoints.innerHTML = analysis.points.map((point) => `<li>${esc(point)}</li>`).join('');
    const showEvolutionSection = !analysis.evo.unresolved && analysis.evo.names.length > 0;
    el.difficultyEvolutionSection.hidden = !showEvolutionSection;
    if (showEvolutionSection) {
      const tags = analysis.evo.names.map((name) => `<span>${esc(name)}</span>`).join('');
      const signals = analysis.evo.signals.length ? `<p>Formas identificadas: ${esc(analysis.evo.signals.join(' · '))}.</p>` : '';
      el.difficultyEvolutions.innerHTML = `<div class="evolution-tags">${tags}</div>${signals}`;
    } else {
      el.difficultyEvolutions.innerHTML = '';
    }
    el.difficultyFocus.className = `difficulty-focus ${analysis.focusClass}`;
    el.difficultyFocus.innerHTML = `<small>ONDE FOCAR</small><strong>${esc(analysis.focusTitle)}</strong><p>${esc(analysis.focusText)}</p>`;
    el.difficultyModal.showModal();
  }

  el.groupList.addEventListener('click', (event) => {
    const difficultyButton = event.target.closest('.difficulty-badge');
    if (difficultyButton) {
      const group = groups.find((item) => item.id === difficultyButton.dataset.id);
      if (group) openDifficultyInfo(group);
      return;
    }
    const button = event.target.closest('.dot');
    if (!button) return;
    const group = groups.find((item) => item.id === button.dataset.id);
    if (!group) return;
    const next = clampStep(button.dataset.step);
    group.steps = clampStep(group.steps) === next ? next - 1 : next;
    save();
    render();
  });

  el.loadMoreBtn.addEventListener('click', () => {
    listLimit += PAGE_SIZE;
    renderGroups();
  });

  ['search','difficulty','state'].forEach((id) => {
    const element = el[id];
    element.addEventListener(id === 'search' ? 'input' : 'change', () => {
      listLimit = PAGE_SIZE;
      renderGroups();
    });
  });
  ['goal','strategy','availability'].forEach((id) => el[id].addEventListener('change', render));
  el.targetAmount.addEventListener('input', () => renderRoute(renderSummary()));

  el.difficultyClose.addEventListener('click', () => el.difficultyModal.close());
  el.difficultyModal.addEventListener('click', (event) => {
    if (event.target === el.difficultyModal) el.difficultyModal.close();
  });

  el.addBtn.addEventListener('click', () => el.addModal.showModal());
  el.saveGroup.addEventListener('click', (event) => {
    event.preventDefault();
    const name = el.newName.value.trim();
    const digimons = el.newDigimon.value.split(',').map((item) => item.trim()).filter(Boolean);
    const rewardLabels = el.newRewards.value.split(',').map((item) => item.trim()).filter(Boolean);
    const rewards = rewardLabels.map(parseRewardLabel);
    if (!name || name.length > 100 || !digimons.length || digimons.length > 30 || digimons.some((item) => item.length > 100) || rewards.length !== 4 || rewards.some((reward) => !reward)) {
      toast('Informe nome, Digimons e exatamente quatro bônus válidos.');
      return;
    }
    groups.push({
      id: `custom-${Date.now()}`, name, digimons, rewards, difficulty: el.newDifficulty.value,
      date: 'Manual', source: '', official: false, conditions: ['Condição 1','Condição 2','Condição 3','Condição 4'],
      memberCount: digimons.length, steps: 0
    });
    save();
    el.addForm.reset();
    el.addModal.close();
    render();
    toast('Grupo manual adicionado.');
  });

  el.resetBtn.addEventListener('click', () => {
    if (!confirm('Apagar todo o progresso e os grupos manuais?')) return;
    groups = officialData.map((group) => ({...structuredClone(group), steps: 0}));
    localStorage.removeItem(KEY);
    localStorage.removeItem(LEGACY_KEY);
    listLimit = PAGE_SIZE;
    save();
    render();
    toast('Progresso apagado.');
  });

  el.exportBtn.addEventListener('click', () => {
    const payload = {...compactState(), exportedAt: new Date().toISOString()};
    const blob = new Blob([JSON.stringify(payload, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'progresso-dunit-ladmo-v48.json';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    toast('Progresso exportado.');
  });

  el.importBtn.addEventListener('click', () => el.fileInput.click());
  el.fileInput.addEventListener('change', async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file || file.size > 5 * 1024 * 1024) { toast('Arquivo inválido ou muito grande.'); return; }
    try {
      const data = JSON.parse(await file.text());
      let stepMap;
      let rawCustom;
      if (data && data.version === 3 && data.officialSteps && typeof data.officialSteps === 'object') {
        stepMap = normalizeOfficialProgress(data);
        rawCustom = Array.isArray(data.customGroups) ? data.customGroups : [];
      } else if (data && Array.isArray(data.groups)) {
        stepMap = normalizeOfficialProgress(data.groups);
        rawCustom = data.groups.filter((item) => item && !item.official);
      } else {
        throw new Error('schema');
      }
      const cleanCustom = uniqueCustomGroups(rawCustom.slice(0, 300).map((item, index) => validateCustomGroup(item, `custom-import-${Date.now()}-${index}`)).filter(Boolean));
      if (cleanCustom.length !== rawCustom.slice(0, 300).length) throw new Error('custom');
      applyProgress(stepMap);
      groups = officialData.map((group) => ({...group})).concat(cleanCustom);
      save();
      listLimit = PAGE_SIZE;
      render();
      toast('Progresso importado.');
    } catch {
      toast('Arquivo inválido. Nenhum dado foi alterado.');
    }
  });

  // Normalize legacy state into the compact v3 format after first successful load.
  save();
  render();
})();
