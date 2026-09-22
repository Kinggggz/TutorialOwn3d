(() => {
  'use strict';
  const seals = Array.isArray(window.SEALS_DATA) ? window.SEALS_DATA : [];
  const thresholds = [0, 1, 50, 200, 500, 1000, 3000];
  const multipliers = [0, .1, .2, .4, .6, .8, 1];
  const openers = [0, 1, 1, 4, 10, 20, 60];
  const storageKey = 'ownedSealProgress_v1';
  const $ = id => document.getElementById(id);
  let progress = loadProgress();

  function loadProgress() {
    try { const value = JSON.parse(localStorage.getItem(storageKey)); return value && typeof value === 'object' ? value : {}; }
    catch { return {}; }
  }
  function saveProgress() {
    try { localStorage.setItem(storageKey, JSON.stringify(progress)); $('savedStatus').textContent = 'Progresso salvo neste navegador'; }
    catch { $('savedStatus').textContent = 'Não foi possível salvar automaticamente'; }
  }
  function normalizeSearch(value) {
    return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').replace(/[^a-z0-9]/g, '');
  }
  function hideRoute() {
    $('routePanel').hidden = true;
    $('routeResults').hidden = true;
    $('routeEmpty').hidden = true;
  }
  function clampCount(value) {
    const n = Number(value);
    return Number.isFinite(n) ? Math.max(0, Math.min(3000, Math.floor(n))) : 0;
  }
  function levelIndex(quantity) {
    let index = 0;
    for (let i = 1; i < thresholds.length; i++) if (quantity >= thresholds[i]) index = i;
    return index;
  }
  function bonusAt(seal, index) { return seal.master * multipliers[index]; }
  function parseExchange(text) {
    const match = String(text).match(/([\d.,]+)\s*→\s*([\d.,]+)/);
    if (!match) return 0;
    const left = Number(match[1].replace(',', '.'));
    const right = Number(match[2].replace(',', '.'));
    return right > 0 ? left / right : 0;
  }
  function formatValue(value, percent) {
    const options = percent ? {minimumFractionDigits: 2, maximumFractionDigits: 2} : {maximumFractionDigits: 1};
    return new Intl.NumberFormat('pt-BR', options).format(value) + (percent ? '%' : '');
  }
  function formatInt(value) { return new Intl.NumberFormat('pt-BR', {maximumFractionDigits: 0}).format(value); }
  function sealWord(value) { return value === 1 ? 'selo' : 'selos'; }
  function selectedSeals() { return seals.filter(seal => seal.attr === $('attribute').value); }
  function currentTotal() { return selectedSeals().reduce((sum, seal) => sum + bonusAt(seal, levelIndex(progress[seal.name] || 0)), 0); }
  function updateSummary() {
    const attr = $('attribute').value;
    const percent = ['CT','BL','EV'].includes(attr);
    $('target').step = percent ? '0.01' : '1';
    $('targetUnit').textContent = percent ? `porcentagem de ${attr}` : `pontos de ${attr}`;
    const current = currentTotal();
    const target = Math.max(0, Number($('target').value) || 0);
    $('currentValue').textContent = formatValue(current, percent);
    $('missingValue').textContent = formatValue(Math.max(0, target - current), percent);
  }
  function nextText(seal, quantity) {
    const current = levelIndex(quantity);
    if (current === thresholds.length - 1) return 'Master concluído';
    const next = current + 1;
    return `Próximo: ${formatInt(thresholds[next])} ${sealWord(thresholds[next])} (+${formatValue(bonusAt(seal, next), seal.percent)})`;
  }
  function renderSeals() {
    const query = normalizeSearch($('search').value.trim());
    const filtered = selectedSeals().filter(seal => normalizeSearch(seal.name).includes(query));
    $('sealList').innerHTML = filtered.map(seal => {
      const quantity = clampCount(progress[seal.name] || 0);
      const level = levelIndex(quantity);
      return `<article class="seal-row"><div class="seal-info"><div class="seal-name"><span class="attribute-tag">${seal.attr}</span><span>${escapeHtml(seal.name)}</span></div><div class="seal-meta"><span>Atual: <strong>+${formatValue(bonusAt(seal, level), seal.percent)}</strong></span><span>Master: <strong>+${formatValue(seal.master, seal.percent)}</strong></span><span>${escapeHtml(nextText(seal, quantity))}</span></div></div><div class="quantity-wrap"><label for="seal-${sealIndex(seal)}">Quantidade aberta</label><input class="seal-quantity" id="seal-${sealIndex(seal)}" data-name="${escapeAttr(seal.name)}" type="number" min="0" max="3000" step="1" inputmode="numeric" value="${quantity}"></div></article>`;
    }).join('');
    $('noResults').hidden = filtered.length > 0;
    document.querySelectorAll('.seal-quantity').forEach(input => input.addEventListener('change', handleQuantity));
    updateSummary();
  }
  function sealIndex(seal) { return seals.indexOf(seal); }
  function handleQuantity(event) {
    const name = event.currentTarget.dataset.name;
    const value = clampCount(event.currentTarget.value);
    event.currentTarget.value = value;
    if (value) progress[name] = value; else delete progress[name];
    saveProgress(); renderSeals(); hideRoute();
  }
  function escapeHtml(value) { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function escapeAttr(value) { return escapeHtml(value); }

  function nextOption(seal, index, quantity) {
    const next = index + 1;
    if (next >= thresholds.length) return null;
    const bonus = bonusAt(seal, next) - bonusAt(seal, index);
    const sealsNeeded = Math.max(0, thresholds[next] - quantity);
    const openerCost = Math.max(0, openers[next] - openers[index]);
    const ticketCost = sealsNeeded * parseExchange(seal.exchange);
    return {seal, from:index, to:next, quantity, bonus, sealsNeeded, openerCost, ticketCost};
  }
  function score(option, strategy) {
    if (strategy === 'openers') return [option.openerCost / option.bonus, option.ticketCost / option.bonus, option.sealsNeeded];
    if (strategy === 'balanced') return [(option.ticketCost + option.openerCost * 15) / option.bonus, option.openerCost, option.ticketCost];
    return [option.ticketCost / option.bonus, option.openerCost / option.bonus, option.sealsNeeded];
  }
  function compareScore(a, b, strategy) {
    const sa = score(a, strategy), sb = score(b, strategy);
    for (let i = 0; i < sa.length; i++) if (sa[i] !== sb[i]) return sa[i] - sb[i];
    return b.bonus - a.bonus || a.seal.name.localeCompare(b.seal.name, 'pt-BR');
  }
  function calculateRoute() {
    $('formError').classList.remove('show');
    const target = Number($('target').value);
    if (!Number.isFinite(target) || target < 0) { $('formError').textContent = 'Informe uma meta válida, igual ou maior que zero.'; $('formError').classList.add('show'); return; }
    $('routePanel').hidden = false;
    const current = currentTotal();
    let missing = Math.max(0, target - current);
    if (missing <= 1e-9) { renderRoute([], current, target, true); return; }
    const state = selectedSeals().map(seal => { const quantity = clampCount(progress[seal.name] || 0); return {seal, quantity, level:levelIndex(quantity)}; });
    const steps = [];
    let gained = 0;
    while (gained + 1e-9 < missing) {
      const options = state.map(item => nextOption(item.seal, item.level, item.quantity)).filter(Boolean).filter(option => option.bonus > 0).sort((a,b) => compareScore(a,b,$('strategy').value));
      if (!options.length) break;
      const chosen = options[0];
      steps.push(chosen); gained += chosen.bonus;
      const item = state.find(value => value.seal === chosen.seal);
      item.level = chosen.to; item.quantity = thresholds[chosen.to];
    }
    renderRoute(steps, current + gained, target, gained + 1e-9 >= missing);
  }
  function renderRoute(steps, projected, target, reached) {
    const percent = ['CT','BL','EV'].includes($('attribute').value);
    $('routeEmpty').hidden = true; $('routeResults').hidden = false;
    if (!steps.length) {
      $('routeTotal').textContent = reached ? 'Meta já alcançada' : 'Sem rota disponível';
      $('routeResults').innerHTML = `<div class="empty-state">${reached ? 'Seu progresso atual já atende à meta escolhida.' : 'Mesmo levando todos os selos deste atributo ao Master, a meta não pode ser alcançada.'}</div>`;
      return;
    }
    const totalSeals = steps.reduce((sum,s) => sum + s.sealsNeeded, 0);
    const totalOpeners = steps.reduce((sum,s) => sum + s.openerCost, 0);
    const totalTickets = steps.reduce((sum,s) => sum + s.ticketCost, 0);
    const consolidated = [];
    const bySeal = new Map();
    steps.forEach(step => {
      const existing = bySeal.get(step.seal.name);
      if (existing) {
        existing.to = step.to;
        existing.bonus += step.bonus;
        existing.sealsNeeded += step.sealsNeeded;
        existing.openerCost += step.openerCost;
        existing.ticketCost += step.ticketCost;
      } else {
        const item = {...step};
        bySeal.set(step.seal.name, item);
        consolidated.push(item);
      }
    });
    $('routeTotal').textContent = reached ? `Projeção: ${formatValue(projected, percent)}` : `Máximo: ${formatValue(projected, percent)}`;
    $('routeResults').innerHTML = consolidated.map(step => `<article class="route-item"><div><h3>${escapeHtml(step.seal.name)}</h3><p>${step.seal.attr} • bônus Master +${formatValue(step.seal.master, step.seal.percent)}</p></div><div class="route-step">${formatInt(thresholds[step.from])} → <strong>${formatInt(thresholds[step.to])}</strong> ${sealWord(thresholds[step.to])}</div><div class="route-metric"><strong>+${formatValue(step.bonus, step.seal.percent)}</strong><span>bônus ganho</span></div><div class="route-metric"><strong>${formatInt(step.sealsNeeded)}</strong><span>${sealWord(step.sealsNeeded)}</span></div><div class="route-metric"><strong>${formatInt(step.openerCost)}</strong><span>openers</span></div></article>`).join('') + `<article class="route-item route-summary"><div><h3>Totais da rota</h3><p>${reached ? 'Meta atendida' : 'Meta acima do máximo cadastrado'}</p></div><div class="route-step">${formatInt(consolidated.length)} ${consolidated.length === 1 ? 'selo recomendado' : 'selos recomendados'}</div><div class="route-metric"><strong>${formatInt(totalSeals)}</strong><span>${sealWord(totalSeals)}</span></div><div class="route-metric"><strong>${formatInt(totalOpeners)}</strong><span>openers</span></div><div class="route-metric"><strong>${new Intl.NumberFormat('pt-BR',{maximumFractionDigits:1}).format(totalTickets)}</strong><span>Tickets estimados</span></div></article>`;
  }

  $('attribute').addEventListener('change', () => { $('search').value = ''; renderSeals(); hideRoute(); });
  $('target').addEventListener('input', () => { updateSummary(); hideRoute(); });
  $('strategy').addEventListener('change', hideRoute);
  $('search').addEventListener('input', renderSeals);
  $('calculate').addEventListener('click', calculateRoute);
  $('toggleCodex').addEventListener('click', () => {
    const willOpen = $('codexPanel').hidden;
    $('codexPanel').hidden = !willOpen;
    $('toggleCodex').setAttribute('aria-expanded', String(willOpen));
    $('toggleCodex').textContent = willOpen ? 'Ocultar meus selos' : 'Cadastrar meus selos';
    if (willOpen) $('codexPanel').scrollIntoView({behavior:'smooth', block:'start'});
  });
  $('clearProgress').addEventListener('click', () => { if (confirm('Apagar todas as quantidades de selos salvas neste navegador?')) { progress = {}; saveProgress(); renderSeals(); hideRoute(); } });
  $('databaseCount').textContent = seals.length;
  renderSeals();
})();
