(() => {
  'use strict';

  const DEFAULT_THRESHOLDS = [0, 1, 50, 200, 500, 1000, 3000];
  const THRESHOLDS_BY_MAX = {
    50: [0, 1, 3, 10, 20, 30, 50],
    100: [0, 1, 25, 50, 75, 90, 100],
    150: [0, 1, 10, 30, 50, 100, 150],
    200: [0, 1, 50, 100, 150, 180, 200],
    300: [0, 1, 30, 100, 150, 200, 300],
    400: [0, 1, 30, 100, 150, 250, 400],
    500: [0, 1, 30, 100, 200, 350, 500],
    700: [0, 1, 30, 150, 300, 500, 700],
    1000: [0, 1, 50, 200, 500, 700, 1000],
    3000: DEFAULT_THRESHOLDS
  };
  const MULTIPLIERS = [0, .1, .2, .4, .6, .8, 1];
  const RANK_LABELS = ['Não ativado', 'Normal', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Master'];
  const RANK_COLOR_KEYS = ['0', '1', '50', '200', '500', '1000', '3000'];
  const STORAGE_KEY = 'ownedSealProgress_v2';
  const LEGACY_STORAGE_KEY = 'ownedSealProgress_v1';
  const $ = id => document.getElementById(id);
  const datasets = {
    ladmo: Array.isArray(window.SEALS_DATA) ? window.SEALS_DATA : [],
    global: Array.isArray(window.SEALS_GLOBAL_DATA) ? window.SEALS_GLOBAL_DATA : []
  };
  let progress = loadProgress();

  function activeDatasetKey() {
    return $('dataSource').value in datasets ? $('dataSource').value : 'ladmo';
  }

  function activeSeals() {
    return datasets[activeDatasetKey()];
  }

  function normalizeSearch(value) {
    return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').replace(/[^a-z0-9]/g, '');
  }

  function progressKey(seal) {
    return `${seal.attr}::${normalizeSearch(seal.name)}`;
  }

  function loadProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && typeof saved === 'object' && !Array.isArray(saved)) return saved;

      const legacy = JSON.parse(localStorage.getItem(LEGACY_STORAGE_KEY));
      if (!legacy || typeof legacy !== 'object' || Array.isArray(legacy)) return {};
      const migrated = {};
      datasets.ladmo.forEach(seal => {
        if (Object.prototype.hasOwnProperty.call(legacy, seal.name)) migrated[progressKey(seal)] = legacy[seal.name];
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      return migrated;
    } catch {
      return {};
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      $('savedStatus').textContent = 'Progresso salvo neste navegador';
    } catch {
      $('savedStatus').textContent = 'Não foi possível salvar automaticamente';
    }
  }

  function thresholdsFor(seal) {
    if (Array.isArray(seal.thresholds) && (seal.thresholds.length === 6 || seal.thresholds.length === 7)) {
      const values = seal.thresholds[0] === 0 ? seal.thresholds : [0, ...seal.thresholds];
      if (values.length === 7 && values.every((value, index) => Number.isFinite(value) && (index === 0 || value > values[index - 1]))) return values;
    }
    return THRESHOLDS_BY_MAX[Number(seal.maxSeals) || 3000] || DEFAULT_THRESHOLDS;
  }

  function maxSealsFor(seal) {
    const thresholds = thresholdsFor(seal);
    return thresholds[thresholds.length - 1];
  }

  function clampCount(value, seal) {
    const n = Number(value);
    return Number.isFinite(n) ? Math.max(0, Math.min(maxSealsFor(seal), Math.floor(n))) : 0;
  }

  function progressValue(seal) {
    return clampCount(progress[progressKey(seal)] || 0, seal);
  }

  function levelIndex(seal, quantity) {
    const thresholds = thresholdsFor(seal);
    let index = 0;
    for (let i = 1; i < thresholds.length; i++) if (quantity >= thresholds[i]) index = i;
    return index;
  }

  function bonusesFor(seal) {
    if (Array.isArray(seal.rankBonuses) && (seal.rankBonuses.length === 6 || seal.rankBonuses.length === 7)) {
      const values = seal.rankBonuses[0] === 0 ? seal.rankBonuses : [0, ...seal.rankBonuses];
      if (values.length === 7 && values.every((value, index) => Number.isFinite(value) && value >= 0 && (index === 0 || value >= values[index - 1]))) return values;
    }
    return MULTIPLIERS.map(multiplier => seal.master * multiplier);
  }

  function bonusAt(seal, index) {
    return bonusesFor(seal)[index];
  }

  function parseExchange(text) {
    const match = String(text).match(/([\d.,]+)\s*→\s*([\d.,]+)/);
    if (!match) return null;
    const left = Number(match[1].replace(',', '.'));
    const right = Number(match[2].replace(',', '.'));
    return Number.isFinite(left) && Number.isFinite(right) && left >= 0 && right > 0 ? {tickets: left, seals: right} : null;
  }

  function formatValue(value, percent) {
    const options = percent ? {minimumFractionDigits: 2, maximumFractionDigits: 2} : {maximumFractionDigits: 1};
    return new Intl.NumberFormat('pt-BR', options).format(value) + (percent ? '%' : '');
  }

  function formatInt(value) {
    return new Intl.NumberFormat('pt-BR', {maximumFractionDigits: 0}).format(value);
  }

  function sealWord(value) {
    return value === 1 ? 'selo' : 'selos';
  }

  function sealStatus(seal, quantity) {
    if (quantity <= 0) return 'inactive';
    if (quantity >= maxSealsFor(seal)) return 'master';
    return 'progress';
  }

  function sealColorTier(seal, quantity) {
    const level = levelIndex(seal, quantity);
    let key = RANK_COLOR_KEYS[level];
    if (maxSealsFor(seal) === 3000) {
      if (quantity >= 3000) key = '3000';
      else if (quantity >= 1000) key = '1000';
      else if (quantity >= 500) key = '500';
      else if (quantity >= 300) key = '300';
      else if (quantity >= 200) key = '200';
      else if (quantity >= 100) key = '100';
      else if (quantity >= 50) key = '50';
      else if (quantity >= 1) key = '1';
      else key = '0';
    }
    return {key, label: RANK_LABELS[level]};
  }

  function selectedSeals() {
    return activeSeals().filter(seal => seal.attr === $('attribute').value);
  }

  function currentTotal() {
    return selectedSeals().reduce((sum, seal) => sum + bonusAt(seal, levelIndex(seal, progressValue(seal))), 0);
  }

  function updateSourceUI() {
    const source = activeDatasetKey();
    const seals = activeSeals();
    $('databaseCount').textContent = formatInt(seals.length);
    $('databaseLabel').textContent = source === 'global' ? 'selos únicos na base global' : 'selos na base LADMO';
    $('databaseEyebrow').textContent = source === 'global' ? 'SEAL MASTER • DMO GLOBAL' : 'SEAL MASTER • LADMO';
    $('sourceHelp').textContent = source === 'global'
      ? 'Referência global; selos indisponíveis ficam fora da rota automática.'
      : 'Base do Seal Codex LADMO ampliada com fontes públicas.';
  }

  function updateSummary() {
    const attr = $('attribute').value;
    const percent = ['CT', 'BL', 'EV'].includes(attr);
    $('target').step = percent ? '0.01' : '1';
    $('targetUnit').textContent = percent ? `porcentagem de ${attr}` : `pontos de ${attr}`;
    const current = currentTotal();
    const target = Math.max(0, Number($('target').value) || 0);
    $('currentValue').textContent = formatValue(current, percent);
    $('missingValue').textContent = formatValue(Math.max(0, target - current), percent);
  }

  function hideRoute() {
    $('routePanel').hidden = true;
    $('routeResults').hidden = true;
    $('routeEmpty').hidden = true;
  }

  function nextText(seal, quantity) {
    const thresholds = thresholdsFor(seal);
    const current = levelIndex(seal, quantity);
    if (current === thresholds.length - 1) return 'Master concluído';
    const next = current + 1;
    return `Próximo: ${formatInt(thresholds[next])} ${sealWord(thresholds[next])} (+${formatValue(bonusAt(seal, next), seal.percent)})`;
  }

  function renderSeals() {
    const query = normalizeSearch($('search').value.trim());
    const statusFilter = $('statusFilter').value;
    const allSeals = activeSeals();
    const filtered = selectedSeals().filter(seal => {
      const quantity = progressValue(seal);
      return normalizeSearch(seal.name).includes(query) && (statusFilter === 'all' || sealStatus(seal, quantity) === statusFilter);
    });

    $('sealList').innerHTML = filtered.map(seal => {
      const quantity = progressValue(seal);
      const level = levelIndex(seal, quantity);
      const status = sealStatus(seal, quantity);
      const colorTier = sealColorTier(seal, quantity);
      const index = allSeals.indexOf(seal);
      const routeAvailability = seal.buyable === false ? '<span class="route-availability" title="Este selo pode ser cadastrado, mas não será recomendado automaticamente.">Fora da rota automática</span>' : '';
      return `<article class="seal-row status-${status} tier-${colorTier.key}${seal.buyable === false ? ' route-unavailable' : ''}"><div class="seal-info"><div class="seal-name"><span class="attribute-tag">${seal.attr}</span><span>${escapeHtml(seal.name)}</span><span class="status-tag tier-${colorTier.key}" title="${colorTier.label}">${colorTier.label}</span></div><div class="seal-meta"><span>Atual: <strong>+${formatValue(bonusAt(seal, level), seal.percent)}</strong></span><span>Master: <strong>+${formatValue(seal.master, seal.percent)}</strong></span><span>${escapeHtml(nextText(seal, quantity))}</span>${routeAvailability}</div></div><div class="quantity-wrap"><label for="seal-${activeDatasetKey()}-${index}">Quantidade aberta</label><input class="seal-quantity" id="seal-${activeDatasetKey()}-${index}" data-index="${index}" type="number" min="0" max="${maxSealsFor(seal)}" step="1" inputmode="numeric" value="${quantity}"></div></article>`;
    }).join('');

    $('noResults').hidden = filtered.length > 0;
    document.querySelectorAll('.seal-quantity').forEach(input => input.addEventListener('change', handleQuantity));
    updateSummary();
  }

  function handleQuantity(event) {
    const seal = activeSeals()[Number(event.currentTarget.dataset.index)];
    if (!seal) return;
    const value = clampCount(event.currentTarget.value, seal);
    event.currentTarget.value = value;
    const key = progressKey(seal);
    if (value) progress[key] = value;
    else delete progress[key];
    saveProgress();
    renderSeals();
    hideRoute();
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[character]));
  }

  function upgradeOptions(seal) {
    const thresholds = thresholdsFor(seal);
    const quantity = progressValue(seal);
    const from = levelIndex(seal, quantity);
    const currentBonus = bonusAt(seal, from);
    const exchange = parseExchange(seal.exchange);
    const options = [];

    for (let to = from + 1; to < thresholds.length; to++) {
      const destination = thresholds[to];
      const sealsNeeded = Math.max(0, destination - quantity);
      const openerCost = Math.ceil(sealsNeeded / 50);
      const bonus = bonusAt(seal, to) - currentBonus;
      const ticketCost = exchange === null ? null : Math.ceil(sealsNeeded / exchange.seals) * exchange.tickets;
      if (bonus > 0 && sealsNeeded > 0) options.push({seal, from, to, quantity, bonus, sealsNeeded, openerCost, ticketCost});
    }
    return options;
  }

  function gcd(a, b) {
    let left = Math.abs(a);
    let right = Math.abs(b);
    while (right) [left, right] = [right, left % right];
    return left || 1;
  }

  function optionObjective(option, strategy) {
    const unknownSeals = option.ticketCost === null ? option.sealsNeeded : 0;
    const tickets = option.ticketCost === null ? 0 : option.ticketCost;
    if (strategy === 'openers') return [option.openerCost, unknownSeals, tickets, option.sealsNeeded];
    if (strategy === 'balanced') return [unknownSeals, tickets + option.openerCost * 15, option.openerCost, option.sealsNeeded];
    return [unknownSeals, tickets, option.openerCost, option.sealsNeeded];
  }

  function addObjective(left, right) {
    return left.map((value, index) => value + right[index]);
  }

  function compareState(left, right) {
    if (!right) return -1;
    for (let index = 0; index < left.objective.length; index++) {
      const difference = left.objective[index] - right.objective[index];
      if (Math.abs(difference) > 1e-9) return difference < 0 ? -1 : 1;
    }
    if (left.rawUnits !== right.rawUnits) return left.rawUnits < right.rawUnits ? -1 : 1;
    return left.steps < right.steps ? -1 : left.steps > right.steps ? 1 : 0;
  }

  function solveRoute(missing, strategy) {
    const groups = selectedSeals()
      .filter(seal => seal.buyable !== false)
      .map(upgradeOptions)
      .filter(options => options.length > 0);
    const allOptions = groups.flat();
    if (!allOptions.length) return {steps: [], gained: 0, reachable: false};

    const scaledGains = allOptions.map(option => Math.max(1, Math.round(option.bonus * 100)));
    const unitSize = scaledGains.reduce(gcd);
    groups.forEach(options => options.forEach(option => { option.routeUnits = Math.round(option.bonus * 100) / unitSize; }));
    const maximumUnits = groups.reduce((sum, options) => sum + options[options.length - 1].routeUnits, 0);
    const requestedUnits = Math.ceil((missing * 100 - 1e-7) / unitSize);
    const targetUnits = Math.min(requestedUnits, maximumUnits);
    if (targetUnits <= 0) return {steps: [], gained: 0, reachable: true};

    let states = new Array(targetUnits + 1).fill(null);
    states[0] = {objective: [0, 0, 0, 0], rawUnits: 0, steps: 0, path: null};

    groups.forEach(options => {
      const next = states.slice();
      for (let units = 0; units < states.length; units++) {
        const state = states[units];
        if (!state) continue;
        options.forEach(option => {
          const rawUnits = state.rawUnits + option.routeUnits;
          const destination = Math.min(targetUnits, units + option.routeUnits);
          const candidate = {
            objective: addObjective(state.objective, optionObjective(option, strategy)),
            rawUnits,
            steps: state.steps + 1,
            path: {option, previous: state.path}
          };
          if (compareState(candidate, next[destination]) < 0) next[destination] = candidate;
        });
      }
      states = next;
    });

    const result = states[targetUnits];
    if (!result) return {steps: [], gained: 0, reachable: false};
    const steps = [];
    for (let node = result.path; node; node = node.previous) steps.push(node.option);
    steps.reverse();
    return {
      steps,
      gained: steps.reduce((sum, step) => sum + step.bonus, 0),
      reachable: requestedUnits <= maximumUnits
    };
  }

  function calculateRoute() {
    $('formError').classList.remove('show');
    const target = Number($('target').value);
    if (!Number.isFinite(target) || target < 0) {
      $('formError').textContent = 'Informe uma meta válida, igual ou maior que zero.';
      $('formError').classList.add('show');
      return;
    }

    $('routePanel').hidden = false;
    requestAnimationFrame(() => $('routePanel').scrollIntoView({behavior: 'smooth', block: 'start'}));
    const current = currentTotal();
    const missing = Math.max(0, target - current);
    if (missing <= 1e-9) {
      renderRoute([], current, target, true);
      return;
    }

    const result = solveRoute(missing, $('strategy').value);
    renderRoute(result.steps, current + result.gained, target, result.reachable && result.gained + 1e-9 >= missing);
  }

  function renderRoute(steps, projected, target, reached) {
    const percent = ['CT', 'BL', 'EV'].includes($('attribute').value);
    $('routeEmpty').hidden = true;
    $('routeResults').hidden = false;
    if (!steps.length) {
      $('routeTotal').textContent = reached ? 'Meta já alcançada' : 'Sem rota disponível';
      $('routeResults').innerHTML = `<div class="empty-state">${reached ? 'Seu progresso atual já atende à meta escolhida.' : 'A meta não pode ser alcançada com os selos disponíveis para a rota nesta base.'}</div>`;
      return;
    }

    const totalSeals = steps.reduce((sum, step) => sum + step.sealsNeeded, 0);
    const totalOpeners = steps.reduce((sum, step) => sum + step.openerCost, 0);
    const hasUnknownTicketCost = steps.some(step => step.ticketCost === null);
    const totalTickets = steps.reduce((sum, step) => sum + (step.ticketCost || 0), 0);
    $('routeTotal').textContent = reached ? `Projeção: ${formatValue(projected, percent)}` : `Máximo: ${formatValue(projected, percent)}`;
    $('routeResults').innerHTML = steps.map(step => {
      const destination = thresholdsFor(step.seal)[step.to];
      return `<article class="route-item"><div><h3>${escapeHtml(step.seal.name)}</h3><p>${step.seal.attr} • bônus Master +${formatValue(step.seal.master, step.seal.percent)}</p></div><div class="route-step">${formatInt(step.quantity)} → <strong>${formatInt(destination)}</strong> ${sealWord(destination)}</div><div class="route-metric"><strong>+${formatValue(step.bonus, step.seal.percent)}</strong><span>bônus ganho</span></div><div class="route-metric"><strong>${formatInt(step.sealsNeeded)}</strong><span>${sealWord(step.sealsNeeded)}</span></div><div class="route-metric"><strong>${formatInt(step.openerCost)}</strong><span>openers</span></div></article>`;
    }).join('') + `<article class="route-item route-summary"><div><h3>Totais da rota</h3><p>${hasUnknownTicketCost ? 'Parte da rota não possui troca por Tickets cadastrada' : (reached ? 'Meta atendida' : 'Meta acima do máximo disponível')}</p></div><div class="route-step">${formatInt(steps.length)} ${steps.length === 1 ? 'selo recomendado' : 'selos recomendados'}</div><div class="route-metric"><strong>${formatInt(totalSeals)}</strong><span>${sealWord(totalSeals)}</span></div><div class="route-metric"><strong>${formatInt(totalOpeners)}</strong><span>openers</span></div><div class="route-metric"><strong>${hasUnknownTicketCost ? 'N/D' : new Intl.NumberFormat('pt-BR', {maximumFractionDigits: 1}).format(totalTickets)}</strong><span>Tickets estimados</span></div></article>`;
  }

  $('dataSource').addEventListener('change', () => {
    $('search').value = '';
    updateSourceUI();
    renderSeals();
    hideRoute();
  });
  $('attribute').addEventListener('change', () => {
    $('search').value = '';
    renderSeals();
    hideRoute();
  });
  $('target').addEventListener('input', () => {
    updateSummary();
    hideRoute();
  });
  $('strategy').addEventListener('change', hideRoute);
  $('search').addEventListener('input', renderSeals);
  $('statusFilter').addEventListener('change', renderSeals);
  $('calculate').addEventListener('click', () => {
    try {
      calculateRoute();
    } catch (error) {
      $('formError').textContent = 'Não foi possível gerar a rota. Atualize a página e tente novamente.';
      $('formError').classList.add('show');
      console.error(error);
    }
  });
  $('toggleCodex').addEventListener('click', () => {
    const willOpen = $('codexPanel').hidden;
    $('codexPanel').hidden = !willOpen;
    $('toggleCodex').setAttribute('aria-expanded', String(willOpen));
    $('toggleCodex').textContent = willOpen ? 'Ocultar meus selos' : 'Cadastrar meus selos';
    if (willOpen) $('codexPanel').scrollIntoView({behavior: 'smooth', block: 'start'});
  });
  $('clearProgress').addEventListener('click', () => {
    if (confirm('Apagar todas as quantidades de selos salvas neste navegador?')) {
      progress = {};
      saveProgress();
      renderSeals();
      hideRoute();
    }
  });

  updateSourceUI();
  renderSeals();
})();
