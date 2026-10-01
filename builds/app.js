(() => {
  'use strict';
  const data = window.SKILL_BUILDER_DATA || {};
  const $ = (id) => document.getElementById(id);
  const ids = ['uCount','search','attribute','digimon','mode','cap','points','digiName','tags','buildTitle','buildReason','skills','usedPoints','allocation','nextSkill','nextReason','priorityTrack','rotation','rotationNote','toggleAdvanced','advancedOptions','portraitStrip','digiPortrait','mainPortrait','openDps','dpsModal','dpsDigiName','dpsDuration','dpsAttack','dpsAttackSpeed','compareMechanics','compareBuildA','compareBuildB','compareRotationA','compareRotationB','compareSkillInputsA','compareSkillInputsB','runDps','dpsResult'];
  const el = Object.fromEntries(ids.map((id) => [id, $(id)]));
  let currentKey = Object.keys(data)[0] || '';

  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const clamp = (number, min, max) => Math.max(min, Math.min(max, number));
  const dpsEngine = window.SkillDpsEngine;
  if (!dpsEngine) throw new Error('Motor de DPS não carregado.');
  const portraitFiles = {
    susano_extreme: ['Susanoomon (Extreme).png','Susanoomon Extreme.png','Susanoomon.png'],
    omm: ['Omegamon - Merciful Mode.png','Omegamon Merciful Mode.png'],
    x7sm: ['Shoutmon X7 Superior Mode.png'],
    miko: ['Kuzuhamon - Miko Mode.png','Kuzuhamon Miko Mode.png'],
    cma: ['Gallantmon (Crimson Mode) (Awaken).png','Gallantmon Crimson Mode Awaken.png','Gallantmon (Crimson Mode).png'],
    aoe: ['Alphamon Ouryuken (Extreme).png','Alphamon Ouryuken Extreme.png','Alphamon Ouryuken.png'],
    lilith: ['Lilithmon X (Awaken).png','Lilithmon X Awaken.png','Lilithmon X.png'],
    oxe: ['Omegamon X (Extreme).png','Omegamon X Extreme.png','Omegamon X.png'],
    apollomon: ['Apollomon.png'],
    apollomon_whispered: ['Apollomon Whispered.png','Apollomon.png'],
    bloom: ['Bloomlordmon.png','BloomLordmon.png'],
    eos: ['Eosmon LV6.png','Eosmon (Mega).png','Eosmon.png'],
    zeed: ['ZeedMillenniummon (Awaken).png','ZeedMillenniummon Awaken.png','ZeedMillenniummon.png'],
    ipma: ['Imperialdramon Paladin Mode (Awaken).png','Imperialdramon Paladin Mode Awaken.png','Imperialdramon Paladin Mode.png'],
    lucemon: ['Lucemon: Satan Mode (Extreme).png','Lucemon Satan Mode (Extreme).png','Lucemon Satan Mode Extreme.png','Lucemon Satan Mode.png'],
    kizuna: ['Last Evolution: Kizuna.png','Last Evolution - Kizuna.png','Last Evolution Kizuna.png','Agumon - Bond of Bravery.png'],
    goddramon: ['Goddramon.png'],
    holydramon: ['Holydramon (Awaken).png','Holydramon Awaken.png','Holydramon.png'],
    abbadomon_core: ['Abbadomon Core.png'],
    abbadomon: ['Abbadomon.png'],
    done: ['DoneDevimon.png'],
    quantumon: ['Quantumon.png']
  };

  const dpsReference = {
    susano_extreme:{at:8311,as:2.5}, omm:{at:8889,as:2.5}, x7sm:{at:9065,as:2.3}, miko:{at:5120,as:2.2},
    cma:{at:8188,as:2.7}, aoe:{at:8765,as:2.4}, lilith:{at:8477,as:2.2}, oxe:{at:8789,as:2.5},
    apollomon:{at:9102,as:2.5}, apollomon_whispered:{at:9402,as:2.5}, bloom:{at:8094,as:2.2}, eos:{at:8460,as:2.2},
    zeed:{at:8865,as:2.5}, ipma:{at:9065,as:2.4}, lucemon:{at:8288,as:2.4}, kizuna:{at:8965,as:2.0},
    goddramon:{at:7895,as:2.5}, holydramon:{at:6998,as:2.2}, abbadomon_core:{at:8544,as:2.2}, abbadomon:{at:8544,as:2.4},
    done:{at:8646,as:null}, quantumon:{at:8991,as:null}
  };

  // Dano de referência: valor no Lv.1 + incremento por nível. Campos sem referência ficam livres para edição manual.
  const skillDamageReference = {
    susano_extreme:{F1:[19201,1162],F2:[50009,1002],F3:[9938,1881],F4:[221282,3111]},
    omm:{F1:[26011,1621],F2:[53079,1272],F3:[251911,3740],F4:[11232,2375]},
    x7sm:{F1:[114392,1363],F2:[56302,2075],F3:[260510,3984],F4:[28646,2218],F5:[192088,3312]},
    miko:{F1:[33473,787],F2:[18648,1224],F3:[0,0],F4:[0,0]},
    cma:{F1:[21895,738],F2:[49548,1224],F3:[241626,3599],F4:[12096,2039]},
    aoe:{F1:[19093,772],F2:[41291,1207],F3:[235712,3507],F4:[24139,3061]},
    lilith:{F5:[205540,3761]},
    oxe:{F1:[24003,1514],F2:[39060,1633],F3:[94027,2106],F4:[137526,2384],F5:[193356,3284]},
    apollomon:{F1:[19324,1637],F2:[18663,1061],F3:[127856,3048],F4:[139375,1774],F5:[189511,18725]},
    apollomon_whispered:{F1:[25153,664],F2:[42945,518],F3:[37282,6361],F4:[113326,1784],F5:[142246,2165]},
    bloom:{F1:[24273,811],F2:[43738,1072],F3:[241467,3440],F4:[23170,2039]},
    eos:{F1:[24858,728],F2:[43885,1117],F3:[76691,2010],F4:[199492,1778]},
    zeed:{F1:[20509,763],F2:[56182,1175],F3:[22392,2818],F4:[263415,3584]},
    ipma:{F1:[22555,753],F2:[46686,1402],F3:[255703,3405],F4:[21064,2771]},
    lucemon:{F1:[21763,711],F2:[54600,1354],F3:[22043,2982],F4:[231246,3563]},
    kizuna:{F1:[18985,1184],F2:[25190,2356],F3:[88371,1756],F4:[238795,2998]},
    goddramon:{F1:[17523,761],F2:[34833,1071],F3:[10437,2766],F4:[75812,2561],F5:[111925,3163]},
    holydramon:{F1:[20743,691],F2:[14916,1154],F3:[16773,1998],F4:[210784,3162]},
    abbadomon_core:{F1:[24895,1447],F2:[56891,1444],F3:[137561,3048],F4:[22218,1774],F5:[227662,4244]},
    abbadomon:{F1:[30243,1595],F2:[55785,1468],F3:[21295,1844],F4:[218523,4401],F5:[167912,3451]},
    done:{F1:[18608,1444],F2:[13985,1341],F3:[105183,3441],F4:[146290,3844]}
  };

  function portraitCandidates(key) {
    const localPortraits = {
      apollomon: '../assets/img/apollomon.png',
      apollomon_whispered: '../assets/img/apollomon_whispered.png'
    };
    return localPortraits[key] ? [localPortraits[key]] : [];
  }

  function setPortrait(img, key, fallbackContainer) {
    const candidates = portraitCandidates(key);
    let index = 0;
    img.classList.remove('loaded');
    img.removeAttribute('src');
    img.alt = data[key]?.name || '';
    img.referrerPolicy = 'no-referrer';
    img.decoding = 'async';
    if (fallbackContainer) fallbackContainer.classList.remove('has-image');

    const tryNext = () => {
      if (index >= candidates.length) {
        img.classList.remove('loaded');
        if (fallbackContainer) fallbackContainer.classList.remove('has-image');
        return;
      }
      img.src = candidates[index++];
    };
    img.onload = () => {
      img.classList.add('loaded');
      if (fallbackContainer) fallbackContainer.classList.add('has-image');
    };
    img.onerror = tryNext;
    tryNext();
  }

  function referenceSkillDamage(key, skillId, level) {
    const row = skillDamageReference[key]?.[skillId];
    if (!row) return null;
    const [base, step] = row;
    const lv = Math.max(1, Math.floor(Number(level) || 1));
    return Math.max(0, Math.round(Number(base) + Number(step) * (lv - 1)));
  }

  function filteredKeys() {
    const query = el.search.value.trim().toLocaleLowerCase('pt-BR');
    const attribute = el.attribute.value;
    return Object.keys(data).filter((key) => {
      const d = data[key];
      const haystack = [d.name, ...(d.aliases || [])].join(' ').toLocaleLowerCase('pt-BR');
      return (!query || haystack.includes(query)) && (attribute === 'all' || d.attribute === attribute);
    });
  }

  function refreshPortraitStrip() {
    const keys = filteredKeys();
    el.portraitStrip.innerHTML = keys.map((key) => `<button type="button" class="portrait-option ${key === currentKey ? 'active' : ''}" data-key="${esc(key)}" title="${esc(data[key].name)}"><span class="mini-portrait"><img alt="" loading="lazy"><b>U</b></span><small>${esc(data[key].aliases?.[0] || data[key].name)}</small></button>`).join('');
    el.portraitStrip.querySelectorAll('.portrait-option').forEach((button) => {
      const key = button.dataset.key;
      const img = button.querySelector('img');
      setPortrait(img, key, button.querySelector('.mini-portrait'));
      button.addEventListener('click', () => {
        currentKey = key;
        el.digimon.value = key;
        renderModes();
        render();
        updateActivePortrait();
        button.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
      });
    });
  }

  function updateActivePortrait() {
    el.portraitStrip.querySelectorAll('.portrait-option').forEach((button) => {
      button.classList.toggle('active', button.dataset.key === currentKey);
    });
  }

  function refreshDigimonSelect(keep = true) {
    const keys = filteredKeys();
    const wanted = keep && keys.includes(currentKey) ? currentKey : keys[0];
    el.digimon.innerHTML = keys.length
      ? keys.map((key) => `<option value="${esc(key)}">${esc(data[key].name)}</option>`).join('')
      : '<option value="">Nenhum resultado</option>';
    el.digimon.disabled = keys.length === 0;
    if (wanted) {
      currentKey = wanted;
      el.digimon.value = wanted;
      refreshPortraitStrip();
      renderModes();
      render();
      updateActivePortrait();
    } else {
      el.portraitStrip.innerHTML = '<p class="empty-catalog">Nenhum Rank U encontrado com esses filtros.</p>';
    }
  }

  function renderModes() {
    const d = data[currentKey];
    if (!d) return;
    const previous = el.mode.value;
    el.mode.innerHTML = Object.entries(d.presets).map(([key, preset]) => `<option value="${esc(key)}">${esc(preset.label)}</option>`).join('');
    if (d.presets[previous]) el.mode.value = previous;
  }

  function hasNumericDistribution(preset) {
    return Boolean(preset && preset.distribution && Object.keys(preset.distribution).length);
  }

  function allocate(d, preset, cap, points) {
    const levels = Object.fromEntries(d.skills.map((skill) => [skill.id, 1]));
    let left = Math.max(0, Math.floor(points));
    if (!hasNumericDistribution(preset)) return {levels, left, used: 0, exact: false};
    for (const id of preset.priority) {
      const skill = d.skills.find((item) => item.id === id);
      const target = clamp(Number(preset.distribution[id] || 1), 1, cap);
      if (!skill || !Number.isFinite(skill.cost) || skill.cost < 0) continue;
      if (skill.cost === 0) { levels[id] = target; continue; }
      while (levels[id] < target && left >= skill.cost) {
        levels[id] += 1;
        left -= skill.cost;
      }
    }
    return {levels, left, used: Math.max(0, Math.floor(points)) - left, exact: true};
  }


  function buildDisplayTitle(preset) {
    if (!hasNumericDistribution(preset)) return 'Dados insuficientes para níveis exatos';
    if (preset.distribution) {
      const priority = Array.isArray(preset.priority) ? preset.priority : [];
      const orderedIds = [...priority, ...Object.keys(preset.distribution).filter((id) => !priority.includes(id))];
      const invested = orderedIds
        .filter((id) => Number(preset.distribution[id]) > 1)
        .map((id) => `${id} ${preset.distribution[id]}`);
      if (invested.length) return invested.join(' / ');
    }
    return `Prioridade: ${(preset.priority || []).slice(0, 3).join(' → ') || 'situacional'}`;
  }

  function buildDescription(preset) {
    const label = String(preset.label || '').toLocaleLowerCase('pt-BR');
    const focus = (preset.priority || []).slice(0, 2).join(' e ');
    if (/dps/.test(label)) return `Build para DPS sustentado contra alvo único/chefes. Prioriza ${focus}.`;
    if (/farm/.test(label)) {
      if (preset.farmStyle === 'aoe') return `Build para farm e leveling com AoE confirmada. Prioriza ${focus}.`;
      return `Farm sem AoE nativa confirmada; usa uma rotação prática de alvo único como fallback. Prioriza ${focus}.`;
    }
    if (/aoe|level/.test(label)) return `Build para limpeza de múltiplos alvos. Prioriza ${focus}.`;
    if (/suporte|segurança|util/.test(label)) return `Build focada em utilidade e segurança. Prioriza ${focus}.`;
    if (/single/.test(label)) return `Build para alvo único. Prioriza ${focus}.`;
    return `Build para dano sustentado. Prioriza ${focus}.`;
  }

  function allocationTiles(d, preset, result) {
    if (!hasNumericDistribution(preset)) {
      return preset.priority.map((id, index) => `<div class="allocation-item priority-only"><span>${esc(id)}</span><strong>#${index + 1}</strong><small>prioridade</small></div>`).join('');
    }
    return d.skills.map((skill) => {
      const level = result.levels[skill.id] ?? 1;
      const target = preset.distribution[skill.id] ?? 1;
      const capped = Math.min(Number(target), Number(el.cap.value));
      const active = capped > 1;
      return `<div class="allocation-item ${active ? 'active' : ''}"><span>${esc(skill.id)}</span><strong>Lv.${esc(level)}</strong><small>${active ? `alvo ${esc(capped)}` : 'base'}</small></div>`;
    }).join('');
  }

  function skillCard(skill, level, preset) {
    const target = hasNumericDistribution(preset) ? Math.min(Number(preset.distribution[skill.id] || 1), Number(el.cap.value)) : null;
    const priority = preset.priority.indexOf(skill.id) + 1;
    const cooldown = skill.cooldown == null ? '—' : `${skill.cooldown}s`;
    const levelText = target == null ? `Prioridade ${priority}` : `Lv.${level}`;
    const details = [
      skill.animation ? `<span>Animação: ${esc(skill.animation)}</span>` : '',
      Number.isFinite(skill.cost) ? `<span>${skill.cost === 0 ? 'Sem custo de pontos' : `Custo: ${esc(skill.cost)} pts/lv`}</span>` : ''
    ].filter(Boolean).join('');
    return `<article class="skill-card ${target && target > 1 ? 'active' : ''}">
      <div class="skill-head"><span class="fid">${esc(skill.id)}</span><strong>${esc(levelText)}</strong></div>
      <h3>${esc(skill.name)}</h3>
      <div class="skill-line"><span>${esc(skill.role)}${skill.aoe ? ` · ${esc(skill.aoeType || 'AoE')}` : ''}</span><b>${esc(cooldown)}</b></div>
      ${details ? `<details><summary>Detalhes</summary><div class="skill-details">${details}</div></details>` : ''}
    </article>`;
  }

  function animationSeconds(skill) {
    const match = String(skill.animation || '').replace(',', '.').match(/\d+(?:\.\d+)?/);
    return match ? Number(match[0]) : null;
  }

  function safeSession(key, fallback = {}) {
    try {
      const parsed = JSON.parse(sessionStorage.getItem(key) || 'null');
      return parsed && typeof parsed === 'object' ? parsed : fallback;
    } catch {
      return fallback;
    }
  }

  function presetLevelMap(d, presetKey) {
    const preset = d.presets[presetKey];
    if (!preset) return Object.fromEntries(d.skills.map((skill) => [skill.id, 1]));
    return allocate(d, preset, Number(el.cap.value), Math.max(0, Number(el.points.value) || d.pointsTotal || 76)).levels;
  }

  function presetOptions(d, selected) {
    const options = Object.entries(d.presets).map(([key, preset]) => `<option value="${esc(key)}" ${key === selected ? 'selected' : ''}>${esc(preset.label)}</option>`).join('');
    return options + `<option value="custom" ${selected === 'custom' ? 'selected' : ''}>Personalizada</option>`;
  }

  function buildDefaults(d, presetKey) {
    const fallbackPresetKey = Object.keys(d.presets)[0];
    const resolvedKey = presetKey && (presetKey === 'custom' || d.presets[presetKey]) ? presetKey : fallbackPresetKey;
    const preset = resolvedKey === 'custom' ? d.presets[el.mode.value] || d.presets[fallbackPresetKey] : d.presets[resolvedKey];
    return {
      key: resolvedKey,
      levels: resolvedKey === 'custom' ? presetLevelMap(d, el.mode.value) : presetLevelMap(d, resolvedKey),
      rotation: (preset?.rotation || preset?.priority || []).join(', ')
    };
  }

  function mechanicsState(d, stored = {}) {
    return Object.fromEntries(d.skills.map((skill) => [skill.id, {
      cooldown: stored[skill.id]?.cooldown ?? (Number.isFinite(skill.cooldown) ? skill.cooldown : ''),
      animation: stored[skill.id]?.animation ?? (animationSeconds(skill) ?? ''),
      asb: stored[skill.id]?.asb ?? 0
    }]));
  }

  function renderMechanics(d, state) {
    el.compareMechanics.innerHTML = d.skills.map((skill) => `<div class="compare-mechanic-row">
      <div><span class="fid">${esc(skill.id)}</span><strong>${esc(skill.name)}</strong></div>
      <label>Cooldown (s)<input data-mechanic-cd="${esc(skill.id)}" type="number" min="0.01" step="0.01" value="${esc(state[skill.id]?.cooldown ?? '')}" placeholder="CD"></label>
      <label>Animação (s)<input data-mechanic-animation="${esc(skill.id)}" type="number" min="0.01" step="0.01" value="${esc(state[skill.id]?.animation ?? '')}" placeholder="Tempo"></label>
      <label>Hits ASB<input data-mechanic-asb="${esc(skill.id)}" type="number" min="0" max="20" step="1" value="${esc(state[skill.id]?.asb ?? 0)}"></label>
    </div>`).join('');
  }

  function renderCompareSide(side, d, presetKey, previous = null) {
    const buildSelect = side === 'A' ? el.compareBuildA : el.compareBuildB;
    const rotationInput = side === 'A' ? el.compareRotationA : el.compareRotationB;
    const list = side === 'A' ? el.compareSkillInputsA : el.compareSkillInputsB;
    const defaults = buildDefaults(d, presetKey);
    buildSelect.innerHTML = presetOptions(d, defaults.key);
    buildSelect.value = defaults.key;

    const keepPrevious = previous && previous.presetKey === defaults.key;
    rotationInput.value = keepPrevious && previous.rotation ? previous.rotation : defaults.rotation;
    const levels = keepPrevious ? previous.levels : defaults.levels;
    const damages = keepPrevious ? previous.damages : {};

    list.innerHTML = d.skills.map((skill) => {
      const level = levels?.[skill.id] ?? 1;
      const hasStoredDamage = keepPrevious && damages && Object.prototype.hasOwnProperty.call(damages, skill.id) && damages[skill.id] !== '';
      const autoDamage = referenceSkillDamage(currentKey, skill.id, level);
      const damage = hasStoredDamage ? damages[skill.id] : (autoDamage ?? '');
      return `<div class="compare-skill-row">
        <div><span class="fid">${esc(skill.id)}</span><strong>${esc(skill.name)}</strong></div>
        <label>Nível<input data-compare-level="${side}:${esc(skill.id)}" type="number" min="1" max="${esc(el.cap.value)}" step="1" value="${esc(level)}"></label>
        <label>Dano por uso<input data-compare-damage="${side}:${esc(skill.id)}" data-auto-damage="${hasStoredDamage ? '0' : '1'}" type="number" min="0" step="1" value="${esc(damage)}" placeholder="Informe o dano"></label>
      </div>`;
    }).join('');
  }

  function captureMechanics(d) {
    return Object.fromEntries(d.skills.map((skill) => {
      const id = skill.id;
      return [id, {
        cooldown: document.querySelector(`[data-mechanic-cd="${CSS.escape(id)}"]`)?.value ?? '',
        animation: document.querySelector(`[data-mechanic-animation="${CSS.escape(id)}"]`)?.value ?? '',
        asb: document.querySelector(`[data-mechanic-asb="${CSS.escape(id)}"]`)?.value ?? 0
      }];
    }));
  }

  function captureSide(side, d) {
    const buildSelect = side === 'A' ? el.compareBuildA : el.compareBuildB;
    const rotationInput = side === 'A' ? el.compareRotationA : el.compareRotationB;
    const levels = {};
    const damages = {};
    for (const skill of d.skills) {
      levels[skill.id] = clamp(Math.floor(Number(document.querySelector(`[data-compare-level="${side}:${CSS.escape(skill.id)}"]`)?.value) || 1), 1, Number(el.cap.value) || 25);
      const damageRaw = document.querySelector(`[data-compare-damage="${side}:${CSS.escape(skill.id)}"]`)?.value ?? '';
      damages[skill.id] = damageRaw === '' ? '' : Math.max(0, Number(damageRaw) || 0);
    }
    return { presetKey: buildSelect.value, rotation: rotationInput.value, levels, damages };
  }

  function comparisonStorageKey() { return `dps-compare-v9:${currentKey}`; }

  function comparisonForm(d) {
    el.dpsDigiName.textContent = d.name;
    const stored = safeSession(comparisonStorageKey(), {});
    const presetKeys = Object.keys(d.presets);
    const currentPreset = d.presets[el.mode.value] ? el.mode.value : presetKeys[0];
    const alternate = presetKeys.find((key) => key !== currentPreset) || 'custom';

    const mechanics = mechanicsState(d, stored.mechanics || {});
    renderMechanics(d, mechanics);
    renderCompareSide('A', d, stored.a?.presetKey || currentPreset, stored.a || null);
    renderCompareSide('B', d, stored.b?.presetKey || alternate, stored.b || null);

    const reference = dpsReference[currentKey] || {at:0, as:null};
    el.dpsDuration.value = stored.duration || 60;
    el.dpsAttack.value = stored.at != null && stored.at !== '' ? stored.at : (reference.at ?? '');
    el.dpsAttackSpeed.value = stored.attackSpeed != null && stored.attackSpeed !== '' ? stored.attackSpeed : (reference.as ?? '');
    el.dpsResult.innerHTML = '';
  }

  function simulationPayload(sideState, d, mechanics) {
    return {
      duration: clamp(Number(el.dpsDuration.value) || 60, 10, 600),
      at: Math.max(0, Number(el.dpsAttack.value) || 0),
      attackSpeed: el.dpsAttackSpeed.value === '' ? null : Number(el.dpsAttackSpeed.value),
      skills: d.skills,
      rotation: sideState.rotation,
      mechanics,
      damages: sideState.damages
    };
  }

  function comparisonName(d, sideState) {
    if (sideState.presetKey === 'custom') return 'Personalizada';
    return d.presets[sideState.presetKey]?.label || 'Build';
  }

  function comparisonCard(label, name, result) {
    const fmt = (number) => Math.round(number).toLocaleString('pt-BR');
    const castText = Object.entries(result.casts || {}).map(([id, count]) => `${id} ${count}x`).join(' · ') || 'sem skills';
    return `<article class="compare-result-card"><span>${esc(label)}</span><h3>${esc(name)}</h3><strong>${fmt(result.dps)} <small>DPS</small></strong><p>${fmt(result.total)} de dano total</p><div><b>${fmt(result.skillDamage)}</b> skills · <b>${fmt(result.autoDamage)}</b> normais · <b>${fmt(result.asbDamage)}</b> ASB</div><small>${esc(castText)}</small></article>`;
  }

  function renderComparison(d, aState, bState, result) {
    if (result.a?.error || result.b?.error) {
      const messages = [];
      if (result.a?.error) messages.push(`Build A: ${result.a.error}`);
      if (result.b?.error) messages.push(`Build B: ${result.b.error}`);
      el.dpsResult.innerHTML = `<p class="dps-error">${esc(messages.join(' '))}</p>`;
      return;
    }
    const aName = comparisonName(d, aState);
    const bName = comparisonName(d, bState);
    const leaderText = result.leader === 'tie'
      ? 'As duas builds ficaram praticamente empatadas nesta simulação.'
      : result.leader === 'a'
        ? `Build A teve o maior DPS estimado${Number.isFinite(result.percent) ? ` (+${result.percent.toFixed(1)}%)` : ''}.`
        : `Build B teve o maior DPS estimado${Number.isFinite(result.percent) ? ` (+${result.percent.toFixed(1)}%)` : ''}.`;
    el.dpsResult.innerHTML = `<div class="compare-result-summary"><strong>${esc(leaderText)}</strong></div><div class="compare-result-grid">${comparisonCard('BUILD A', aName, result.a)}${comparisonCard('BUILD B', bName, result.b)}</div>`;
  }

  function runComparison() {
    const d = data[currentKey];
    if (!d) return;
    const mechanicsRaw = captureMechanics(d);
    const mechanics = Object.fromEntries(Object.entries(mechanicsRaw).map(([id, item]) => [id, {
      cooldown: item.cooldown === '' ? null : Number(item.cooldown),
      animation: item.animation === '' ? null : Number(item.animation),
      asb: Math.max(0, Math.floor(Number(item.asb) || 0))
    }]));
    const aState = captureSide('A', d);
    const bState = captureSide('B', d);
    const a = dpsEngine.simulate(simulationPayload(aState, d, mechanics));
    const b = dpsEngine.simulate(simulationPayload(bState, d, mechanics));
    const result = dpsEngine.compare(a, b);
    try {
      sessionStorage.setItem(comparisonStorageKey(), JSON.stringify({
        duration: el.dpsDuration.value,
        at: el.dpsAttack.value,
        attackSpeed: el.dpsAttackSpeed.value,
        mechanics: mechanicsRaw,
        a: aState,
        b: bState
      }));
    } catch {}
    renderComparison(d, aState, bState, result);
  }

  function render() {
    const d = data[currentKey];
    if (!d) return;
    let preset = d.presets[el.mode.value];
    if (!preset) {
      el.mode.value = Object.keys(d.presets)[0];
      preset = d.presets[el.mode.value];
    }
    const cap = Number(el.cap.value);
    const points = Math.max(0, Number(el.points.value) || 0);
    const result = allocate(d, preset, cap, points);

    if (el.uCount) el.uCount.textContent = Object.keys(data).length;
    el.digiName.textContent = d.name;
    el.tags.innerHTML = `<span>${esc(d.attribute)}</span><span>${esc(d.element)}</span>${d.overclock ? '<span class="oc">Overclock</span>' : ''}`;
    el.buildTitle.textContent = buildDisplayTitle(preset);
    el.buildReason.textContent = buildDescription(preset);
    el.allocation.innerHTML = allocationTiles(d, preset, result);
    el.usedPoints.textContent = hasNumericDistribution(preset) ? `${result.used}/${points} pts` : 'níveis não confirmados';

    const firstId = preset.priority?.[0];
    const firstSkill = d.skills.find((skill) => skill.id === firstId);
    el.nextSkill.textContent = firstId ? `Comece pela ${firstId}` : 'Siga a prioridade';
    el.nextReason.textContent = firstSkill ? `${firstSkill.name} é a primeira skill desta build.` : 'Siga a ordem abaixo.';
    el.priorityTrack.innerHTML = (preset.priority || []).map((id, index) => `<span><b>${index + 1}</b>${esc(id)}</span>`).join('<i>→</i>');
    el.rotation.innerHTML = (preset.rotation || []).map((id) => `<span>${esc(id)}</span>`).join('<i>→</i>') || '<span>Situacional</span>';
    el.rotationNote.textContent = 'Repita a sequência conforme o cooldown e a mecânica da luta.';
    el.skills.innerHTML = d.skills.map((skill) => skillCard(skill, result.levels[skill.id], preset)).join('');

    setPortrait(el.digiPortrait, currentKey, el.mainPortrait);
    updateActivePortrait();
  }

  function bindAutoDamage(list, side) {
    list.addEventListener('input', (event) => {
      const damageInput = event.target.closest('[data-compare-damage]');
      if (damageInput) {
        damageInput.dataset.autoDamage = '0';
        return;
      }
      const levelInput = event.target.closest('[data-compare-level]');
      if (!levelInput) return;
      const token = String(levelInput.dataset.compareLevel || '');
      const skillId = token.split(':').slice(1).join(':');
      if (!skillId) return;
      const paired = document.querySelector(`[data-compare-damage="${side}:${CSS.escape(skillId)}"]`);
      if (!paired || paired.dataset.autoDamage !== '1') return;
      const value = referenceSkillDamage(currentKey, skillId, levelInput.value);
      paired.value = value == null ? '' : value;
    });
  }

  bindAutoDamage(el.compareSkillInputsA, 'A');
  bindAutoDamage(el.compareSkillInputsB, 'B');

  el.toggleAdvanced.addEventListener('click', () => {
    const open = el.advancedOptions.hidden;
    el.advancedOptions.hidden = !open;
    el.toggleAdvanced.setAttribute('aria-expanded', String(open));
    el.toggleAdvanced.textContent = open ? 'Ocultar opções' : 'Opções avançadas';
  });
  el.search.addEventListener('input', () => refreshDigimonSelect(false));
  el.attribute.addEventListener('change', () => refreshDigimonSelect(false));
  el.digimon.addEventListener('change', () => { currentKey = el.digimon.value; renderModes(); render(); updateActivePortrait(); });
  el.mode.addEventListener('change', render);
  el.cap.addEventListener('change', render);
  el.points.addEventListener('input', render);
  el.openDps.addEventListener('click', () => {
    const d = data[currentKey];
    if (!d) return;
    comparisonForm(d);
    if (typeof el.dpsModal.showModal === 'function') el.dpsModal.showModal();
  });
  el.compareBuildA.addEventListener('change', () => {
    const d = data[currentKey];
    if (!d) return;
    renderCompareSide('A', d, el.compareBuildA.value);
  });
  el.compareBuildB.addEventListener('change', () => {
    const d = data[currentKey];
    if (!d) return;
    renderCompareSide('B', d, el.compareBuildB.value);
  });
  el.runDps.addEventListener('click', runComparison);

  refreshDigimonSelect(true);
})();
