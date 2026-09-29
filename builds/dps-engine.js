(function (root) {
  'use strict';

  const clamp = (number, min, max) => Math.max(min, Math.min(max, number));

  function normalizeRotation(raw, skillIds) {
    const allowed = new Set(skillIds.map((id) => String(id).toUpperCase()));
    const tokens = Array.isArray(raw)
      ? raw
      : String(raw || '').split(/(?:\s*(?:>|→|,|;|\/)\s*)|\s+/);
    return tokens
      .map((token) => String(token || '').trim().toUpperCase())
      .filter((token) => token && allowed.has(token));
  }

  function simulate(config) {
    const duration = clamp(Number(config.duration) || 60, 1, 3600);
    const at = Math.max(0, Number(config.at) || 0);
    const rawAttackSpeed = config.attackSpeed;
    const attackSpeed = rawAttackSpeed === '' || rawAttackSpeed == null ? null : Number(rawAttackSpeed);
    if (at > 0 && (!Number.isFinite(attackSpeed) || attackSpeed <= 0)) {
      return { error: 'Informe o AS para calcular os ataques normais.' };
    }
    const safeAttackSpeed = Number.isFinite(attackSpeed) && attackSpeed > 0 ? Math.max(0.05, attackSpeed) : 1;
    const skillIds = (config.skills || []).map((skill) => String(skill.id));
    const rotation = normalizeRotation(config.rotation, skillIds);
    const mechanics = config.mechanics || {};
    const damages = config.damages || {};

    const activeIds = [...new Set(rotation)].filter((id) => Math.max(0, Number(damages[id]) || 0) > 0);
    if (!activeIds.length && at <= 0) {
      return { error: 'Informe dano em pelo menos uma skill ou no ataque normal.' };
    }

    const missing = [];
    for (const id of activeIds) {
      const cooldown = Number(mechanics[id]?.cooldown);
      const animation = Number(mechanics[id]?.animation);
      if (!Number.isFinite(cooldown) || cooldown <= 0) missing.push(`${id}: cooldown`);
      if (!Number.isFinite(animation) || animation <= 0) missing.push(`${id}: animação`);
    }
    if (missing.length) {
      return { error: `Complete os dados de ${missing.join(', ')} antes de calcular.` };
    }

    const activeRotation = rotation.filter((id) => activeIds.includes(id));
    if (!activeRotation.length && activeIds.length) {
      return { error: 'A rotação não contém nenhuma skill com dano informado.' };
    }

    const readyAt = Object.fromEntries(activeIds.map((id) => [id, 0]));
    const casts = Object.fromEntries(activeIds.map((id) => [id, 0]));
    let cursor = 0;
    let time = 0;
    let nextAutoAt = safeAttackSpeed;
    let skillDamage = 0;
    let autoDamage = 0;
    let asbDamage = 0;
    let autoHits = 0;
    let asbHits = 0;
    let safety = 0;

    const findReadyIndex = () => {
      if (!activeRotation.length) return -1;
      for (let offset = 0; offset < activeRotation.length; offset += 1) {
        const index = (cursor + offset) % activeRotation.length;
        const id = activeRotation[index];
        if (readyAt[id] <= time + 1e-7) return index;
      }
      return -1;
    };

    while (time < duration - 1e-7 && safety++ < 100000) {
      const readyIndex = findReadyIndex();
      if (readyIndex >= 0) {
        const id = activeRotation[readyIndex];
        const cooldown = Number(mechanics[id].cooldown);
        const animation = Number(mechanics[id].animation);
        const asb = Math.max(0, Math.floor(Number(mechanics[id].asb) || 0));
        const damage = Math.max(0, Number(damages[id]) || 0);

        skillDamage += damage;
        casts[id] += 1;
        if (at > 0 && asb > 0) {
          asbHits += asb;
          asbDamage += asb * at;
        }

        readyAt[id] = time + cooldown;
        cursor = (readyIndex + 1) % activeRotation.length;
        time = Math.min(duration, time + animation);
        nextAutoAt = time + safeAttackSpeed;
        continue;
      }

      let nextSkillTime = Infinity;
      for (const id of activeIds) nextSkillTime = Math.min(nextSkillTime, readyAt[id]);
      const stop = Math.min(duration, nextSkillTime);

      if (at > 0 && nextAutoAt <= stop + 1e-7) {
        while (nextAutoAt <= stop + 1e-7 && nextAutoAt <= duration + 1e-7) {
          autoHits += 1;
          autoDamage += at;
          nextAutoAt += safeAttackSpeed;
        }
      }

      if (stop > time + 1e-7) {
        time = stop;
      } else if (at > 0 && nextAutoAt > time + 1e-7 && nextAutoAt <= duration + 1e-7) {
        time = Math.min(duration, nextAutoAt);
      } else {
        time = Math.min(duration, time + 0.01);
      }
    }

    const total = skillDamage + autoDamage + asbDamage;
    return {
      duration,
      total,
      dps: total / duration,
      skillDamage,
      autoDamage,
      asbDamage,
      autoHits,
      asbHits,
      casts,
      baseAA: at > 0 ? at / safeAttackSpeed : 0,
      rotation: activeRotation
    };
  }

  function compare(a, b) {
    if (a?.error || b?.error) return { a, b, error: a?.error || b?.error };
    const delta = Number(a.dps || 0) - Number(b.dps || 0);
    const higher = Math.max(Number(a.dps || 0), Number(b.dps || 0));
    const lower = Math.min(Number(a.dps || 0), Number(b.dps || 0));
    const percent = lower > 0 ? ((higher - lower) / lower) * 100 : (higher > 0 ? Infinity : 0);
    return { a, b, delta, percent, leader: Math.abs(delta) < 0.5 ? 'tie' : delta > 0 ? 'a' : 'b' };
  }

  root.SkillDpsEngine = Object.freeze({ normalizeRotation, simulate, compare });
})(typeof window !== 'undefined' ? window : globalThis);
