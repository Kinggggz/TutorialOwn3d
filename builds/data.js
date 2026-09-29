window.SKILL_BUILDER_DATA = {
  "susano_extreme": {
    "name": "Susanoomon [Supremacia]",
    "aliases": [
      "Susanoomon Extreme",
      "Susa U"
    ],
    "rank": "U",
    "attribute": "Vacina",
    "element": "Trovão",
    "families": [
      "DS",
      "NSp",
      "VB"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Ama-no-Habakiri",
        "cooldown": 5,
        "cost": 2,
        "role": "DPS sustentado",
        "effect": "Skill curta; dano foi reduzido no rebalance de 27/08/2026.",
        "aoe": false,
        "animation": "~4,3s"
      },
      {
        "id": "F2",
        "name": "Yakusa-no-Ikazuchi",
        "cooldown": 9,
        "cost": 3,
        "role": "DPS sustentado",
        "effect": "Segunda skill de ciclo.",
        "aoe": false,
        "animation": "~3,5s"
      },
      {
        "id": "F3",
        "name": "Lightning of Judgement",
        "cooldown": 28,
        "cost": 2,
        "role": "Dano em área",
        "effect": "Skill em área confirmada na página atual do DMO Wiki.",
        "aoe": true,
        "animation": "~4,4s",
        "aoeType": "AoE confirmado"
      },
      {
        "id": "F4",
        "name": "God's Judgement: Thunder",
        "cooldown": 55,
        "cost": 4,
        "role": "Nuke pesado",
        "effect": "Skill de grande dano e cooldown longo.",
        "aoe": false,
        "animation": "~6,5s"
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "F3 25 / F1 15",
        "priority": [
          "F3",
          "F1",
          "F2",
          "F4"
        ],
        "distribution": {
          "F1": 15,
          "F2": 1,
          "F3": 25,
          "F4": 1
        },
        "confidence": "high",
        "basis": "DMO Wiki + patch 27/08/2026",
        "reason": "F3 é a skill de área confirmada do Susanoomon. Farm prioriza F3; F1 recebe os pontos restantes.",
        "rotation": [
          "F3",
          "F1"
        ],
        "notes": [],
        "farmStyle": "aoe",
        "purpose": "farm_aoe"
      },
      "dps": {
        "label": "DPS",
        "title": "F1 24 / F2 11",
        "priority": [
          "F1",
          "F2",
          "F4",
          "F3"
        ],
        "distribution": {
          "F1": 24,
          "F2": 11,
          "F3": 1,
          "F4": 1
        },
        "confidence": "medium",
        "basis": "DMO Wiki atual + rebalance 08/2026",
        "reason": "Para DPS sustentado contra alvo único/chefes, F1 e F2 são o núcleo do ciclo. F3 é a skill de área e fica reservada ao Farm. A divisão F1 24 / F2 11 usa os 76 pontos e favorece a rotação curta.",
        "rotation": [
          "F1",
          "F2",
          "F1",
          "F1",
          "F2"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — Susanoomon Extreme",
        "url": "https://dmowiki.com/Susanoomon_%28Extreme%29"
      },
      {
        "type": "Oficial",
        "label": "GameKing — rebalanceamento 27/08/2026",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=228"
      },
      {
        "type": "Oficial",
        "label": "GameKing — lançamento LADMO",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=179"
      }
    ],
    "notes": [
      "Auditoria v47: Farm prioriza F3 (AoE confirmada) e DPS sustentado prioriza F1/F2; a distribuição de DPS é uma recomendação derivada dos custos e cooldowns atuais."
    ],
    "overclock": false,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "omm": {
    "name": "Omegamon - Merciful Mode",
    "aliases": [
      "OMM",
      "Omegamon Merciful Mode"
    ],
    "rank": "U",
    "attribute": "Vacina",
    "element": "Luz",
    "families": [
      "VB",
      "ME",
      "WG"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Garuru Hou",
        "cooldown": 4,
        "cost": 2,
        "role": "DPS sustentado",
        "effect": "Principal investimento recomendado nesta configuração de DPS sustentado.",
        "aoe": false,
        "animation": "4s"
      },
      {
        "id": "F2",
        "name": "Garuru Hou (Continuous Firing)",
        "cooldown": 10,
        "cost": 3,
        "role": "Preenchimento",
        "effect": "Usada situacionalmente; não recebe pontos na build comunitária recente.",
        "aoe": false,
        "animation": "6s"
      },
      {
        "id": "F3",
        "name": "Gurei Tou",
        "cooldown": 52,
        "cost": 4,
        "role": "Nuke",
        "effect": "Grande nuke; investimento secundário da build atual.",
        "aoe": false,
        "animation": "6s"
      },
      {
        "id": "F4",
        "name": "Garuru Hou (Benevolence)",
        "cooldown": 25,
        "cost": 2,
        "role": "Dano em área",
        "effect": "Ataca todos os inimigos dentro do alcance.",
        "aoe": true,
        "animation": "8s",
        "aoeType": "AoE — todos os inimigos no alcance"
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "F4 25 / F1 15",
        "priority": [
          "F4",
          "F1",
          "F2",
          "F3"
        ],
        "distribution": {
          "F1": 15,
          "F2": 1,
          "F3": 1,
          "F4": 25
        },
        "confidence": "high",
        "basis": "DMO Wiki atual",
        "reason": "F4 ataca todos os inimigos no alcance; por isso é a prioridade de Farm.",
        "rotation": [
          "F4",
          "F1"
        ],
        "notes": [],
        "farmStyle": "aoe",
        "purpose": "farm_aoe"
      },
      "dps": {
        "label": "DPS",
        "title": "F1 25 / F3 8",
        "priority": [
          "F1",
          "F3",
          "F2",
          "F4"
        ],
        "distribution": {
          "F1": 25,
          "F2": 1,
          "F3": 8,
          "F4": 1
        },
        "confidence": "high",
        "basis": "Comunidade 08/2026 + DMO Wiki atual",
        "reason": "Para DPS sustentado contra alvo único, a recomendação concentra F1 e coloca os pontos restantes em F3. F4 é a skill de área e fica no preset Farm.",
        "rotation": [
          "F1",
          "F1",
          "F3",
          "F1"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — OMM",
        "url": "https://dmowiki.com/Omegamon_-_Merciful_Mode"
      },
      {
        "type": "Reddit",
        "label": "Discussão 08/2026 — F1 25 / F3 8",
        "url": "https://www.reddit.com/r/DigimonMastersOnline/comments/1vuu1r4/omm/"
      },
      {
        "type": "Oficial",
        "label": "GameKing — balanceamento U",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=228"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: F4. A classificação não é inferida pelo número da skill; cada F1/F2/F3/F4/F5 foi verificada individualmente."
    ],
    "overclock": true,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "x7sm": {
    "name": "Shoutmon X7 Superior Mode",
    "aliases": [
      "X7SM",
      "X7 Superior"
    ],
    "rank": "U",
    "attribute": "Dados",
    "element": "Aço",
    "families": [
      "DR",
      "NSo",
      "TBD"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Double Flare Buster",
        "cooldown": 27,
        "cost": 2,
        "role": "Dano de alto impacto",
        "effect": "Rework de 27/08/2026: dano bastante aumentado; Provocação removida; cooldown aumentado para 27s.",
        "aoe": false,
        "animation": "3s"
      },
      {
        "id": "F2",
        "name": "Xros Burning Rocker",
        "cooldown": 8,
        "cost": 2,
        "role": "DPS sustentado",
        "effect": "Principal investimento de DPS sustentado.",
        "aoe": false,
        "animation": "4s"
      },
      {
        "id": "F3",
        "name": "Final Xros Blade",
        "cooldown": 49,
        "cost": 3,
        "role": "Nuke / escudo",
        "effect": "Concede escudo.",
        "aoe": false,
        "animation": "5s"
      },
      {
        "id": "F4",
        "name": "Seven Victorize Maximum",
        "cooldown": 35,
        "cost": 3,
        "role": "Defesa / nuke",
        "effect": "Concede 5s de invencibilidade.",
        "aoe": false,
        "animation": "4s"
      },
      {
        "id": "F5",
        "name": "Burning Rocker Heart of Unity",
        "cooldown": 90,
        "cost": 4,
        "role": "Nuke / utilidade",
        "effect": "Skill de cooldown muito longo.",
        "aoe": false,
        "animation": null
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "F2 25 / F1 15",
        "priority": [
          "F2",
          "F1",
          "F3",
          "F4",
          "F5"
        ],
        "distribution": {
          "F1": 15,
          "F2": 25,
          "F3": 1,
          "F4": 1,
          "F5": 1
        },
        "confidence": "medium",
        "basis": "Patch 27/08/2026 + dados atuais",
        "reason": "Nenhuma skill nativa foi confirmada como AoE nas fontes atuais. Farm usa a rotação curta de alvo único como fallback; não confundir F3 de alto dano com skill em área.",
        "rotation": [
          "F2",
          "F1",
          "F2"
        ],
        "notes": [],
        "farmStyle": "single",
        "purpose": "farm_single_fallback"
      },
      "dps": {
        "label": "DPS",
        "title": "F2 25 / F3 10",
        "priority": [
          "F2",
          "F3",
          "F1",
          "F4",
          "F5"
        ],
        "distribution": {
          "F1": 1,
          "F2": 25,
          "F3": 10,
          "F4": 1,
          "F5": 1
        },
        "confidence": "high",
        "basis": "Comunidade 06/2026 + valores atuais",
        "reason": "F2 é a principal skill sustentada após o rebalance. Com F2 no 25, os pontos restantes vão para F3; F1 deixou de ser a skill curta que era antes do rebalance.",
        "rotation": [
          "F2",
          "F3",
          "F2",
          "F1"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — X7SM",
        "url": "https://dmowiki.com/Shoutmon_X7_Superior_Mode"
      },
      {
        "type": "Reddit",
        "label": "Discussão de distribuição",
        "url": "https://www.reddit.com/r/DigimonMastersOnline/comments/1l31b6z/x7sm_skill_levels_distribution/"
      },
      {
        "type": "YouTube",
        "label": "Review LADMO — skills/showcase",
        "url": "https://www.youtube.com/watch?v=qYHm8FiQVUQ"
      },
      {
        "type": "Oficial",
        "label": "GameKing — balanceamento/Overclock",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=228"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: nenhuma skill nativa explicitamente confirmada. A classificação não é inferida pelo número da skill; cada F1/F2/F3/F4/F5 foi verificada individualmente."
    ],
    "overclock": true,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "miko": {
    "name": "Kuzuhamon - Miko Mode",
    "aliases": [
      "Miko",
      "Kuzuhamon Miko"
    ],
    "rank": "U",
    "attribute": "Dados",
    "element": "Escuridão",
    "families": [
      "NSo",
      "TBD",
      "WG"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Ura Izuna",
        "cooldown": 4.3,
        "cost": 2,
        "role": "DPS single target",
        "effect": "Aplicava/possui utilidade de dano; principal foco single target.",
        "aoe": false,
        "animation": "3s"
      },
      {
        "id": "F2",
        "name": "Kongoukai Mandala",
        "cooldown": 12,
        "cost": 3,
        "role": "Dano em área",
        "effect": "F2 é AoE no estado atual do kit; indicada para limpeza/leveling.",
        "aoe": true,
        "animation": "5,2s",
        "aoeType": "AoE confirmado"
      },
      {
        "id": "F3",
        "name": "Purification",
        "cooldown": 40,
        "cost": 0,
        "role": "Suporte",
        "effect": "Remove debuff, imunidade a debuff e recupera HP.",
        "aoe": false,
        "animation": "6,7s"
      },
      {
        "id": "F4",
        "name": "God's Will",
        "cooldown": 70,
        "cost": 0,
        "role": "Suporte forte",
        "effect": "Buff de crítico/skill damage e redução de dano.",
        "aoe": false,
        "animation": "6,8s"
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "F2 25 / F1 3",
        "priority": [
          "F2",
          "F1",
          "F3",
          "F4"
        ],
        "distribution": {
          "F1": 3,
          "F2": 25,
          "F3": 1,
          "F4": 1
        },
        "confidence": "high",
        "basis": "DMO Wiki + patch 27/08/2026",
        "reason": "F2 é a AoE atual da Miko e a opção indicada para limpeza/leveling.",
        "rotation": [
          "F2",
          "F1"
        ],
        "notes": [],
        "farmStyle": "aoe",
        "purpose": "farm_aoe"
      },
      "dps": {
        "label": "DPS",
        "title": "F1 25 / F2 10",
        "priority": [
          "F1",
          "F2",
          "F3",
          "F4"
        ],
        "distribution": {
          "F1": 25,
          "F2": 10,
          "F3": 1,
          "F4": 1
        },
        "confidence": "high",
        "basis": "Comunidade 06/2026 + DMO Wiki atual",
        "reason": "Para DPS de alvo único, F1 é o investimento principal. F2 é a opção de AoE/leveling e fica como foco do preset Farm.",
        "rotation": [
          "F1",
          "F2",
          "F1",
          "F1"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — Miko",
        "url": "https://dmowiki.com/Kuzuhamon_-_Miko_Mode"
      },
      {
        "type": "Reddit",
        "label": "Skill distribution help — 06/2026",
        "url": "https://www.reddit.com/r/DigimonMastersOnline/comments/1ud3egb/skill_distribution_help/"
      },
      {
        "type": "Oficial",
        "label": "GameKing — balanceamento/Overclock",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=228"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: F2. A classificação não é inferida pelo número da skill; cada F1/F2/F3/F4/F5 foi verificada individualmente."
    ],
    "overclock": true,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "cma": {
    "name": "Gallantmon (Crimson Mode) [Despertado]",
    "aliases": [
      "CMA",
      "Crimson Mode Awaken",
      "Gallantmon CMA"
    ],
    "rank": "U",
    "attribute": "Vírus",
    "element": "Luz",
    "families": [
      "DR",
      "VB",
      "WG"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Invisible Sword",
        "cooldown": 4,
        "cost": 2,
        "role": "DPS sustentado",
        "effect": "Concede +10% skill damage por 12s.",
        "aoe": false,
        "animation": "5s"
      },
      {
        "id": "F2",
        "name": "Dash Blutgang",
        "cooldown": 8.5,
        "cost": 3,
        "role": "DPS sustentado",
        "effect": "Segundo investimento da build comunitária.",
        "aoe": false,
        "animation": "3s"
      },
      {
        "id": "F3",
        "name": "Blutgang & Gungnir",
        "cooldown": 55,
        "cost": 4,
        "role": "Nuke / buff",
        "effect": "Concede +20% skill damage por 30s.",
        "aoe": false,
        "animation": "5s"
      },
      {
        "id": "F4",
        "name": "Quo Vadis",
        "cooldown": 30,
        "cost": 4,
        "role": "Dano situacional",
        "effect": "Animação longa; o rebalance reduziu a necessidade de usá-la.",
        "aoe": false,
        "animation": "7s"
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "F1 24 / F2 11",
        "priority": [
          "F1",
          "F2",
          "F3",
          "F4"
        ],
        "distribution": {
          "F1": 24,
          "F2": 11,
          "F3": 1,
          "F4": 1
        },
        "confidence": "medium",
        "basis": "Patch 27/08/2026 + custos atuais",
        "reason": "Nenhuma skill nativa foi confirmada como AoE. Farm usa F1/F2 como fallback de alvo único; F3 não é classificada como área só por ser o grande nuke.",
        "rotation": [
          "F1",
          "F2",
          "F1"
        ],
        "notes": [],
        "farmStyle": "single",
        "purpose": "farm_single_fallback"
      },
      "dps": {
        "label": "DPS",
        "title": "F1 24 / F2 11",
        "priority": [
          "F1",
          "F2",
          "F3",
          "F4"
        ],
        "distribution": {
          "F1": 24,
          "F2": 11,
          "F3": 1,
          "F4": 1
        },
        "confidence": "high",
        "basis": "Comunidade 06/2026 + DMO Wiki atual",
        "reason": "Distribuição comunitária recorrente para DPS sustentado: F1 24 e F2 11 usa os 76 pontos e mantém o ciclo de baixo cooldown.",
        "rotation": [
          "F1",
          "F2",
          "F1"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — CMA",
        "url": "https://dmowiki.com/Gallantmon_%28Crimson_Mode%29_%28Awaken%29"
      },
      {
        "type": "Reddit",
        "label": "Skill distribution help — 06/2026",
        "url": "https://www.reddit.com/r/DigimonMastersOnline/comments/1ud3egb/skill_distribution_help/"
      },
      {
        "type": "Oficial",
        "label": "GameKing — balanceamento/Overclock",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=228"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: nenhuma skill nativa explicitamente confirmada. A classificação não é inferida pelo número da skill; cada F1/F2/F3/F4/F5 foi verificada individualmente."
    ],
    "overclock": true,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "aoe": {
    "name": "Alphamon Ouryuken [Supremacia]",
    "aliases": [
      "AOE",
      "Alphamon Ouryuken Extreme"
    ],
    "rank": "U",
    "attribute": "Vacina",
    "element": "Luz",
    "families": [
      "VB",
      "DR",
      "WG"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Holy Sword Gradalpha",
        "cooldown": 4,
        "cost": 2,
        "role": "DPS sustentado / debuff",
        "effect": "Aplica +5% de dano recebido no alvo.",
        "aoe": false,
        "animation": "1s"
      },
      {
        "id": "F2",
        "name": "Digitalize Of Soul",
        "cooldown": 7.4,
        "cost": 2,
        "role": "DPS sustentado",
        "effect": "Cooldown curto e bom ganho por ponto.",
        "aoe": false,
        "animation": "2,3s"
      },
      {
        "id": "F3",
        "name": "Kyukyoku Senjin Ouryuken",
        "cooldown": 46,
        "cost": 4,
        "role": "Nuke",
        "effect": "Nuke de cooldown alto.",
        "aoe": false,
        "animation": "2,3s"
      },
      {
        "id": "F4",
        "name": "Alpha Enforce",
        "cooldown": 29,
        "cost": 3,
        "role": "Buff / dano",
        "effect": "Buff de +15% skill damage para o grupo.",
        "aoe": false,
        "animation": "2,3s"
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "F1 25 / F2 15",
        "priority": [
          "F1",
          "F2",
          "F4",
          "F3"
        ],
        "distribution": {
          "F1": 25,
          "F2": 15,
          "F3": 1,
          "F4": 1
        },
        "confidence": "medium",
        "basis": "DMO Wiki + patch 27/08/2026",
        "reason": "No LADMO atual não há uma skill nativa de área confirmada para este kit. Farm usa F1/F2 como fallback de alvo único; o builder não assume que F3 seja AoE.",
        "rotation": [
          "F1",
          "F2",
          "F1"
        ],
        "notes": [],
        "farmStyle": "single",
        "purpose": "farm_single_fallback"
      },
      "dps": {
        "label": "DPS",
        "title": "F1 25 / F2 15",
        "priority": [
          "F1",
          "F2",
          "F4",
          "F3"
        ],
        "distribution": {
          "F1": 25,
          "F2": 15,
          "F3": 1,
          "F4": 1
        },
        "confidence": "high",
        "basis": "Teste comunitário 22/09/2026 + DMO Wiki atual",
        "reason": "Em luta sustentada, F1+F2 alcançam e ultrapassam o ganho de F3 rapidamente. Com F1 usado com maior frequência, 25/15 é a divisão mais consistente.",
        "rotation": [
          "F1",
          "F2",
          "F1"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — AOE",
        "url": "https://dmowiki.com/Alphamon_Ouryuken_%28Extreme%29"
      },
      {
        "type": "Reddit",
        "label": "Discussão AOE — 22/09/2026",
        "url": "https://www.reddit.com/r/DigimonMastersOnline/comments/1wnof06/aoe_skill_dist/"
      },
      {
        "type": "Oficial",
        "label": "GameKing — rebalanceamento 27/08/2026",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=228"
      }
    ],
    "notes": [
      "Auditoria regional LADMO 28/09/2026: não marcar F3 como AoE. A nota oficial do LADMO de 27/08/2026 registra F3 com recarga 49s→46s e não anuncia conversão para área; a página atual do DMO Wiki também não rotula F3 como AoE. Há uma nota de outra região (GDMO) com numeração/conversão conflitante, por isso o builder prioriza a documentação LADMO."
    ],
    "overclock": false,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "lilith": {
    "name": "Lilithmon X [Despertado]",
    "aliases": [
      "Lilithmon X Awaken",
      "Lilithmon X (Awaken)",
      "Lilithmon (X-Antibody) (Awaken)"
    ],
    "rank": "U",
    "attribute": "Vírus",
    "element": "Escuridão",
    "families": [
      "DA",
      "NSo"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Nazar Nail",
        "cooldown": 4,
        "cost": 2,
        "role": "DPS curto",
        "effect": "ASB peculiar; não é o foco recomendado.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F2",
        "name": "Phantom Pain",
        "cooldown": 10,
        "cost": 2,
        "role": "DPS sustentado / buff",
        "effect": "Após rebalance, concede +10% skill damage por 20s.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F3",
        "name": "Abyss Butterfly",
        "cooldown": 26,
        "cost": 4,
        "role": "AoE / controle",
        "effect": "AoE de dano menor que atinge os inimigos ao redor do usuário.",
        "aoe": true,
        "animation": null,
        "aoeType": "AoE ao redor do usuário"
      },
      {
        "id": "F4",
        "name": "Seventh Fascinate",
        "cooldown": 38,
        "cost": 4,
        "role": "Dano em área / controle",
        "effect": "AoE de dano alto ao redor do usuário e stun.",
        "aoe": true,
        "animation": null,
        "aoeType": "AoE ao redor do usuário + stun"
      },
      {
        "id": "F5",
        "name": "Devil Sentry",
        "cooldown": 49,
        "cost": 3,
        "role": "Nuke / cura",
        "effect": "Nuke e cura 30.000 HP do grupo.",
        "aoe": false,
        "animation": null
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "F4 20",
        "priority": [
          "F4",
          "F3",
          "F2",
          "F5",
          "F1"
        ],
        "distribution": {
          "F1": 1,
          "F2": 1,
          "F3": 1,
          "F4": 20,
          "F5": 1
        },
        "confidence": "high",
        "basis": "DMO Wiki atual",
        "reason": "F3 e F4 são AoE, mas F4 é a AoE de maior dano e ainda aplica stun; com custo de 4 pts/lv, chega ao Lv.20 usando 76 pontos.",
        "rotation": [
          "F4",
          "F3"
        ],
        "notes": [],
        "farmStyle": "aoe",
        "purpose": "farm_aoe"
      },
      "dps": {
        "label": "DPS",
        "title": "F2 24 / F5 11",
        "priority": [
          "F2",
          "F5",
          "F1",
          "F4",
          "F3"
        ],
        "distribution": {
          "F1": 1,
          "F2": 24,
          "F3": 1,
          "F4": 1,
          "F5": 11
        },
        "confidence": "high",
        "basis": "DMO Wiki — recomendação explícita de distribuição",
        "reason": "A própria página atual recomenda F2 24 / F5 11 como a melhor distribuição geral em testes pessoais do autor.",
        "rotation": [
          "F2",
          "F5",
          "F2",
          "F1"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — Lilith X Awaken",
        "url": "https://dmowiki.com/Lilithmon_%28X-Antibody%29_%28Awaken%29"
      },
      {
        "type": "Oficial",
        "label": "GameKing — rebalanceamento 27/08/2026",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=228"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: F3, F4. A classificação não é inferida pelo número da skill; cada F1/F2/F3/F4/F5 foi verificada individualmente."
    ],
    "overclock": false,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "oxe": {
    "name": "Omegamon X [Supremacia]",
    "aliases": [
      "Omegamon X Extreme",
      "OXE"
    ],
    "rank": "U",
    "attribute": "Vacina",
    "element": "Luz",
    "families": [
      "DR",
      "ME",
      "VB"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Grey Sword (Extreme)",
        "cooldown": 2.8,
        "cost": 2,
        "role": "DPS sustentado",
        "effect": "Maior frequência de uso; dano aumentado no patch de agosto.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F2",
        "name": "Garuru Cannon (Extreme)",
        "cooldown": 11,
        "cost": 2,
        "role": "Dano em área linear",
        "effect": "Convertida oficialmente de alvo único para AoE em linha reta em 27/08/2026.",
        "aoe": true,
        "animation": null,
        "aoeType": "AoE linear"
      },
      {
        "id": "F3",
        "name": "All Delete (Extreme)",
        "cooldown": 45,
        "cost": 3,
        "role": "Nuke / buff",
        "effect": "Alcance aumentado; ao usar, ativa All Delete. Não tratado como AoE dedicado.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F4",
        "name": "Omega Inforce (Extreme)",
        "cooldown": 49,
        "cost": 3,
        "role": "Nuke",
        "effect": "Dano aumentado no rebalance.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F5",
        "name": "Overdrive (Extreme)",
        "cooldown": 51,
        "cost": 3,
        "role": "Nuke pesado",
        "effect": "Dano aumentado no rebalance.",
        "aoe": false,
        "animation": null
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "F2 25 / F1 15",
        "priority": [
          "F2",
          "F1",
          "F3",
          "F4",
          "F5"
        ],
        "distribution": {
          "F1": 15,
          "F2": 25,
          "F3": 1,
          "F4": 1,
          "F5": 1
        },
        "confidence": "high",
        "basis": "Patch oficial 27/08/2026",
        "reason": "F2 foi convertida oficialmente para ataque em área em linha reta no LADMO; é a prioridade de Farm.",
        "rotation": [
          "F2",
          "F1"
        ],
        "notes": [],
        "farmStyle": "aoe",
        "purpose": "farm_aoe"
      },
      "dps": {
        "label": "DPS",
        "title": "F1 25 / F2 15",
        "priority": [
          "F1",
          "F2",
          "F5",
          "F4",
          "F3"
        ],
        "distribution": {
          "F1": 25,
          "F2": 15,
          "F3": 1,
          "F4": 1,
          "F5": 1
        },
        "confidence": "medium",
        "basis": "Valores atuais + cooldowns pós-rebalance",
        "reason": "F1 tem 2,8s de cooldown e o melhor retorno sustentado por ponto; F2 recebe o restante e também oferece AoE linear.",
        "rotation": [
          "F1",
          "F2",
          "F1",
          "F1"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — OXE",
        "url": "https://dmowiki.com/Omegamon_X_Extreme"
      },
      {
        "type": "YouTube",
        "label": "Showcase e teste de dano — 03/2026",
        "url": "https://www.youtube.com/watch?v=nmG6RKUzvdY"
      },
      {
        "type": "Oficial",
        "label": "GameKing — rebalanceamento 27/08/2026",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=228"
      },
      {
        "type": "Oficial",
        "label": "GameKing — lançamento LADMO",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=204"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: F2. A classificação não é inferida pelo número da skill; cada F1/F2/F3/F4/F5 foi verificada individualmente."
    ],
    "overclock": false,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "apollomon": {
    "name": "Apollomon",
    "aliases": [
      "Apollo U"
    ],
    "rank": "U",
    "attribute": "Vacina",
    "element": "Fogo",
    "families": [
      "DR",
      "NSp",
      "TBD"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Flame Edge",
        "cooldown": 3,
        "cost": 2,
        "role": "DPS sustentado / buff",
        "effect": "Concede +10% dano crítico de skill por 8s.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F2",
        "name": "Solar Eruption",
        "cooldown": 16,
        "cost": 2,
        "role": "Dano em área",
        "effect": "Ataca inimigos próximos enquanto Apollomon se move em alta velocidade.",
        "aoe": true,
        "animation": null,
        "aoeType": "AoE ao redor / inimigos próximos"
      },
      {
        "id": "F3",
        "name": "Sol Blaster",
        "cooldown": 42,
        "cost": 3,
        "role": "AoE ampla",
        "effect": "Dispara um feixe que causa dano em área ampla.",
        "aoe": true,
        "animation": null,
        "aoeType": "AoE ampla"
      },
      {
        "id": "F4",
        "name": "Arrow of Apollo",
        "cooldown": 37,
        "cost": 3,
        "role": "Nuke",
        "effect": "Nuke intermediário.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F5",
        "name": "Phoebus Blow",
        "cooldown": 58,
        "cost": 2,
        "role": "Nuke pesado",
        "effect": "Escala por nível extremamente alta.",
        "aoe": false,
        "animation": null
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "F2 25 / F3 10",
        "priority": [
          "F2",
          "F3",
          "F1",
          "F4",
          "F5"
        ],
        "distribution": {
          "F1": 1,
          "F2": 25,
          "F3": 10,
          "F4": 1,
          "F5": 1
        },
        "confidence": "high",
        "basis": "GameKing LADMO 16/07/2026 + DMO Wiki",
        "reason": "F2 atinge inimigos próximos e tem recarga bem menor que F3; F3, também de área, recebe os pontos restantes.",
        "rotation": [
          "F2",
          "F3"
        ],
        "notes": [],
        "farmStyle": "aoe",
        "purpose": "farm_aoe"
      },
      "dps": {
        "label": "DPS",
        "title": "F1 25 / F5 15",
        "priority": [
          "F1",
          "F5",
          "F2",
          "F4",
          "F3"
        ],
        "distribution": {
          "F1": 25,
          "F2": 1,
          "F3": 1,
          "F4": 1,
          "F5": 15
        },
        "confidence": "medium",
        "basis": "DMO Wiki atual — dano por nível/cooldown",
        "reason": "Para DPS sustentado, F1 sustenta o ciclo curto e F5 aproveita o ganho elevado por nível. F2/F3 são as ferramentas de área e ficam priorizadas no Farm.",
        "rotation": [
          "F1",
          "F1",
          "F5",
          "F1",
          "F2"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — Apollomon",
        "url": "https://dmowiki.com/Apollomon"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: F2, F3. A classificação não é inferida pelo número da skill; cada F1/F2/F3/F4/F5 foi verificada individualmente."
    ],
    "overclock": false,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "apollomon_whispered": {
    "name": "Apollomon Whispered",
    "aliases": [
      "Whispered",
      "Apollo Whispered"
    ],
    "rank": "U",
    "attribute": "Vírus",
    "element": "Escuridão",
    "families": [
      "TBD",
      "DA",
      "NSo"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Whispered Edge",
        "cooldown": 2.9,
        "cost": 2,
        "role": "DPS sustentado",
        "effect": "Skill de ciclo muito curto.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F2",
        "name": "Arrow of Whispered",
        "cooldown": 15,
        "cost": 3,
        "role": "Dano em área linear",
        "effect": "Tipo de ataque oficial: Linear AoE.",
        "aoe": true,
        "animation": null,
        "aoeType": "AoE linear"
      },
      {
        "id": "F3",
        "name": "Bleeding Hunt",
        "cooldown": 23,
        "cost": 2,
        "role": "DPS principal",
        "effect": "Escala de dano por nível muito alta.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F4",
        "name": "Last Whisper",
        "cooldown": 25.5,
        "cost": 4,
        "role": "AoE frontal / buff",
        "effect": "Tipo de ataque oficial: Frontal AoE; também aumenta o dano de skill.",
        "aoe": true,
        "animation": null,
        "aoeType": "AoE frontal"
      },
      {
        "id": "F5",
        "name": "Sun of Sorrows",
        "cooldown": 25,
        "cost": 4,
        "role": "Nuke",
        "effect": "Nuke de cooldown moderado.",
        "aoe": false,
        "animation": null
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "F2 25 / F4 2",
        "priority": [
          "F2",
          "F4",
          "F1",
          "F3",
          "F5"
        ],
        "distribution": {
          "F1": 1,
          "F2": 25,
          "F3": 1,
          "F4": 2,
          "F5": 1
        },
        "confidence": "high",
        "basis": "GameKing 16/09/2026 — tipos de ataque oficiais",
        "reason": "F2 é AoE linear e F4 é AoE frontal. F2 recebe prioridade por ser a opção de área mais frequente.",
        "rotation": [
          "F2",
          "F4"
        ],
        "notes": [],
        "farmStyle": "aoe",
        "purpose": "farm_aoe"
      },
      "dps": {
        "label": "DPS",
        "title": "F3 25 / F1 15",
        "priority": [
          "F3",
          "F1",
          "F4",
          "F5",
          "F2"
        ],
        "distribution": {
          "F1": 15,
          "F2": 1,
          "F3": 25,
          "F4": 1,
          "F5": 1
        },
        "confidence": "high",
        "basis": "DMO Wiki atual — ganho por nível/cooldown",
        "reason": "F3 tem ganho de dano por nível excepcional com custo de 2 pontos; F1 completa a build e mantém o ciclo de 2,9s. F4 deve ser usada no Lv.1 para abrir a janela de +30% Skill Damage.",
        "rotation": [
          "F4",
          "F3",
          "F1",
          "F1",
          "F3"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — Apollomon Whispered",
        "url": "https://dmowiki.com/Apollomon_Whispered"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: F2, F4. A classificação não é inferida pelo número da skill; cada F1/F2/F3/F4/F5 foi verificada individualmente."
    ],
    "overclock": false,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "bloom": {
    "name": "BloomLordmon",
    "aliases": [
      "Bloom"
    ],
    "rank": "U",
    "attribute": "Vacina",
    "element": "Madeira",
    "families": [
      "JT",
      "TBD",
      "UK"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Multiple Seed",
        "cooldown": 4,
        "cost": 2,
        "role": "DPS sustentado",
        "effect": "Crescimento por nível foi aumentado no patch de agosto.",
        "aoe": false,
        "animation": "4s"
      },
      {
        "id": "F2",
        "name": "Sprout Rush",
        "cooldown": 10.5,
        "cost": 3,
        "role": "DPS sustentado",
        "effect": "Segundo skill de ciclo.",
        "aoe": false,
        "animation": "3s"
      },
      {
        "id": "F3",
        "name": "GranDelSol",
        "cooldown": 51,
        "cost": 4,
        "role": "Nuke / buff",
        "effect": "Concede +25% skill damage e +10% dano crítico; patch adicionou +10% próprio de dano crítico.",
        "aoe": false,
        "animation": "7s"
      },
      {
        "id": "F4",
        "name": "Flower Vine",
        "cooldown": null,
        "cost": null,
        "role": "Dano em área / controle",
        "effect": "Efeito documentado como stun em área.",
        "aoe": true,
        "animation": null,
        "aoeType": "AoE / controle em área"
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "Prioridade F4 → F1 → F2",
        "priority": [
          "F4",
          "F1",
          "F2",
          "F3"
        ],
        "distribution": null,
        "confidence": "medium",
        "basis": "DMO Wiki + patch 27/08/2026",
        "reason": "F4 Flower Vine possui efeito em área confirmado (Shadow Bind/AoE). Como os dados públicos de custo/uso do F4 variam entre bases, o builder mantém prioridade qualitativa em vez de inventar uma distribuição numérica.",
        "rotation": [
          "F4",
          "F1"
        ],
        "notes": [
          "Níveis de F4 permanecem qualitativos até o custo por nível ser confirmado."
        ],
        "farmStyle": "aoe",
        "purpose": "farm_aoe"
      },
      "dps": {
        "label": "DPS",
        "title": "F1 25 / F2 10",
        "priority": [
          "F1",
          "F2",
          "F3",
          "F4"
        ],
        "distribution": {
          "F1": 25,
          "F2": 10,
          "F3": 1,
          "F4": 1
        },
        "confidence": "medium",
        "basis": "DMO Wiki atual + rebalance 08/2026",
        "reason": "F1 (4s) é o melhor investimento sustentado. F2 recebe o restante; F3 continua útil no Lv.1 pelo buff de Skill/Critical Damage.",
        "rotation": [
          "F3",
          "F1",
          "F2",
          "F1"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — BloomLordmon",
        "url": "https://dmowiki.com/Bloomlordmon"
      },
      {
        "type": "Oficial",
        "label": "GameKing — rebalanceamento/Overclock",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=228"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: F4. A classificação não é inferida pelo número da skill; cada F1/F2/F3/F4/F5 foi verificada individualmente."
    ],
    "overclock": true,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "eos": {
    "name": "Eosmon LV6",
    "aliases": [
      "Eosmon",
      "Eos U"
    ],
    "rank": "U",
    "attribute": "Desconhecido",
    "element": "Trovão",
    "families": [
      "TBD",
      "UK",
      "WG"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Aurora Stream",
        "cooldown": 4.5,
        "cost": 2,
        "role": "DPS sustentado",
        "effect": "Skill de ciclo curto.",
        "aoe": false,
        "animation": "3,5s"
      },
      {
        "id": "F2",
        "name": "Cutting Edge",
        "cooldown": 9,
        "cost": 3,
        "role": "DPS / buff",
        "effect": "Concede +10% skill damage por 10s.",
        "aoe": false,
        "animation": "4s"
      },
      {
        "id": "F3",
        "name": "Cruelty Rain",
        "cooldown": 30,
        "cost": 3,
        "role": "Buff / dano",
        "effect": "Creator of the Mirror World: +20% skill damage por 30s.",
        "aoe": false,
        "animation": "4,5s"
      },
      {
        "id": "F4",
        "name": "Hollow Utopia",
        "cooldown": 60,
        "cost": 4,
        "role": "Nuke / debuff",
        "effect": "Reduz AT do inimigo.",
        "aoe": false,
        "animation": "3s"
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "F1 25 / F2 10",
        "priority": [
          "F1",
          "F2",
          "F3",
          "F4"
        ],
        "distribution": {
          "F1": 25,
          "F2": 10,
          "F3": 1,
          "F4": 1
        },
        "confidence": "medium",
        "basis": "Patch 27/08/2026 + custos atuais",
        "reason": "Nenhuma skill nativa foi confirmada explicitamente como AoE nas fontes atuais. Farm usa o ciclo curto de alvo único como fallback.",
        "rotation": [
          "F1",
          "F2",
          "F1"
        ],
        "notes": [],
        "farmStyle": "single",
        "purpose": "farm_single_fallback"
      },
      "dps": {
        "label": "DPS",
        "title": "F1 25 / F2 10",
        "priority": [
          "F1",
          "F2",
          "F3",
          "F4"
        ],
        "distribution": {
          "F1": 25,
          "F2": 10,
          "F3": 1,
          "F4": 1
        },
        "confidence": "high",
        "basis": "DMO Wiki atual",
        "reason": "F1 tem o melhor retorno sustentado; F2 recebe o restante e ainda ativa +10% Skill Damage por 10s.",
        "rotation": [
          "F2",
          "F1",
          "F1",
          "F3"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — Eosmon LV6",
        "url": "https://dmowiki.com/Eosmon_LV6"
      },
      {
        "type": "Oficial",
        "label": "GameKing — balanceamento/Overclock",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=228"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: nenhuma skill nativa explicitamente confirmada. A classificação não é inferida pelo número da skill; cada F1/F2/F3/F4/F5 foi verificada individualmente."
    ],
    "overclock": true,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "zeed": {
    "name": "ZeedMillenniummon [Despertado]",
    "aliases": [
      "Zeed Awaken",
      "Zeed U"
    ],
    "rank": "U",
    "attribute": "Vírus",
    "element": "Escuridão",
    "families": [
      "DA",
      "ME",
      "NSo"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Time Destroyer",
        "cooldown": 4.7,
        "cost": 2,
        "role": "DPS sustentado / debuff",
        "effect": "Aumenta dano recebido pelo alvo em 10% por 18s.",
        "aoe": false,
        "animation": "4s"
      },
      {
        "id": "F2",
        "name": "Time Unlimited",
        "cooldown": 9,
        "cost": 3,
        "role": "DPS sustentado",
        "effect": "Segundo skill de ciclo.",
        "aoe": false,
        "animation": "5s"
      },
      {
        "id": "F3",
        "name": "Chrono Paradox",
        "cooldown": 41,
        "cost": 3,
        "role": "Dano / alcance",
        "effect": "Alcance de ataque aumentado no rebalance; não tratado como AoE dedicado.",
        "aoe": false,
        "animation": "5,7s"
      },
      {
        "id": "F4",
        "name": "Destroyer Breath",
        "cooldown": 48,
        "cost": 4,
        "role": "Dano em área / buff",
        "effect": "Documentada como skill em área e concede +30% de dano de skill.",
        "aoe": true,
        "animation": "6,3s",
        "aoeType": "AoE confirmado"
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "F4 20",
        "priority": [
          "F4",
          "F1",
          "F2",
          "F3"
        ],
        "distribution": {
          "F1": 1,
          "F2": 1,
          "F3": 1,
          "F4": 20
        },
        "confidence": "high",
        "basis": "DMO Wiki + patch 27/08/2026",
        "reason": "F4 Destroyer Breath é a skill explicitamente marcada como AoE; custo de 4 pts/lv limita o máximo prático a Lv.20.",
        "rotation": [
          "F4",
          "F1"
        ],
        "notes": [],
        "farmStyle": "aoe",
        "purpose": "farm_aoe"
      },
      "dps": {
        "label": "DPS",
        "title": "F1 25 / F2 10",
        "priority": [
          "F1",
          "F2",
          "F4",
          "F3"
        ],
        "distribution": {
          "F1": 25,
          "F2": 10,
          "F3": 1,
          "F4": 1
        },
        "confidence": "high",
        "basis": "DMO Wiki atual + rebalance 08/2026",
        "reason": "F1/F2 são as skills de baixo cooldown para DPS sustentado. F4 deve continuar entrando na rotação no Lv.1 pelo buff de +30% Skill Damage.",
        "rotation": [
          "F4",
          "F1",
          "F2",
          "F1"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — Zeed Awaken",
        "url": "https://dmowiki.com/ZeedMillenniummon_%28Awaken%29"
      },
      {
        "type": "Oficial",
        "label": "GameKing — rebalanceamento/Overclock",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=228"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: F4. A classificação não é inferida pelo número da skill; cada F1/F2/F3/F4/F5 foi verificada individualmente."
    ],
    "overclock": true,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "ipma": {
    "name": "Imperialdramon Paladin Mode [Despertado]",
    "aliases": [
      "IPMA",
      "PMA",
      "Imperial Paladin Awaken"
    ],
    "rank": "U",
    "attribute": "Vacina",
    "element": "Luz",
    "families": [
      "DS",
      "VB",
      "WG"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Positron Laser",
        "cooldown": 4.5,
        "cost": 2,
        "role": "DPS sustentado",
        "effect": "Skill de ciclo curto.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F2",
        "name": "Giga Death",
        "cooldown": 8.5,
        "cost": 3,
        "role": "DPS sustentado",
        "effect": "Bom retorno por cooldown.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F3",
        "name": "Omega Blade",
        "cooldown": 51,
        "cost": 4,
        "role": "Nuke / buff",
        "effect": "Concede +30% dano crítico por 30s.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F4",
        "name": "Heaven's Light",
        "cooldown": 33,
        "cost": 3,
        "role": "Dano em área / buff",
        "effect": "Range documentado como AoE; concede +20% de dano de skill próprio.",
        "aoe": true,
        "animation": null,
        "aoeType": "AoE confirmado"
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "F4 25 / F1 3",
        "priority": [
          "F4",
          "F1",
          "F2",
          "F3"
        ],
        "distribution": {
          "F1": 3,
          "F2": 1,
          "F3": 1,
          "F4": 25
        },
        "confidence": "high",
        "basis": "Dados atuais + patch 27/08/2026",
        "reason": "F4 Heaven’s Light tem Range: AoE; F3 Omega Blade é explicitamente Range: One Enemy.",
        "rotation": [
          "F4",
          "F1"
        ],
        "notes": [],
        "farmStyle": "aoe",
        "purpose": "farm_aoe"
      },
      "dps": {
        "label": "DPS",
        "title": "F1 24 / F2 11",
        "priority": [
          "F1",
          "F2",
          "F4",
          "F3"
        ],
        "distribution": {
          "F1": 24,
          "F2": 11,
          "F3": 1,
          "F4": 1
        },
        "confidence": "medium",
        "basis": "DMO Wiki atual — custo, ganho e cooldown",
        "reason": "F1/F2 formam o ciclo sustentado. A divisão 24/11 usa os 76 pontos e fica praticamente no ponto de equilíbrio entre frequência da F1 e ganho maior por nível da F2; F4 segue útil no Lv.1 pelo buff.",
        "rotation": [
          "F4",
          "F1",
          "F2",
          "F1"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — IPMA",
        "url": "https://dmowiki.com/Imperialdramon_Paladin_Mode_%28Awaken%29"
      },
      {
        "type": "Oficial",
        "label": "GameKing — rebalanceamento 27/08/2026",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=228"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: F4. A classificação não é inferida pelo número da skill; cada F1/F2/F3/F4/F5 foi verificada individualmente."
    ],
    "overclock": false,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "lucemon": {
    "name": "Lucemon: Satan Mode [Supremacia]",
    "aliases": [
      "Lucemon Extreme",
      "Luce U"
    ],
    "rank": "U",
    "attribute": "Vírus",
    "element": "Escuridão",
    "families": [
      "DA",
      "NSo",
      "VB"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Divine Atonement",
        "cooldown": 5,
        "cost": 2,
        "role": "Debuff / DPS",
        "effect": "Aplica +5% dano recebido por 15s.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F2",
        "name": "Purgatorial Flame",
        "cooldown": 9,
        "cost": 2,
        "role": "DPS sustentado",
        "effect": "Melhor retorno bruto recorrente entre F1/F2.",
        "aoe": false,
        "animation": "4,1s"
      },
      {
        "id": "F3",
        "name": "Dimensional Slash",
        "cooldown": 29,
        "cost": 4,
        "role": "Buff / dano",
        "effect": "Concede +15% skill damage ao grupo por 15s.",
        "aoe": false,
        "animation": "6,4s"
      },
      {
        "id": "F4",
        "name": "Satan's Fury",
        "cooldown": 52,
        "cost": 3,
        "role": "Dano em área / invencibilidade",
        "effect": "Convertida oficialmente de alvo único para ataque em área em 27/08/2026.",
        "aoe": true,
        "animation": "6,4s",
        "aoeType": "AoE confirmado"
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "F4 25 / F1 3",
        "priority": [
          "F4",
          "F1",
          "F2",
          "F3"
        ],
        "distribution": {
          "F1": 3,
          "F2": 1,
          "F3": 1,
          "F4": 25
        },
        "confidence": "high",
        "basis": "Patch oficial 27/08/2026",
        "reason": "F4 foi alterada oficialmente no LADMO de alvo único para ataque em área; é a prioridade de Farm.",
        "rotation": [
          "F4",
          "F1"
        ],
        "notes": [],
        "farmStyle": "aoe",
        "purpose": "farm_aoe"
      },
      "dps": {
        "label": "DPS",
        "title": "F1 25 / F2 15",
        "priority": [
          "F1",
          "F2",
          "F3",
          "F4"
        ],
        "distribution": {
          "F1": 25,
          "F2": 15,
          "F3": 1,
          "F4": 1
        },
        "confidence": "medium",
        "basis": "DMO Wiki atual — cooldown + ganho por nível",
        "reason": "F1 e F2 são o núcleo sustentado. Com F1 entrando aproximadamente duas vezes para cada F2, maximizar F1 e colocar o restante em F2 fica ligeiramente à frente; F1 ainda mantém o debuff de dano recebido.",
        "rotation": [
          "F1",
          "F2",
          "F1"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — Lucemon Extreme",
        "url": "https://dmowiki.com/Lucemon%3A_Satan_Mode_%28Extreme%29"
      },
      {
        "type": "Oficial",
        "label": "GameKing — rebalanceamento 27/08/2026",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=228"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: F4. A classificação não é inferida pelo número da skill; cada F1/F2/F3/F4/F5 foi verificada individualmente."
    ],
    "overclock": false,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "kizuna": {
    "name": "Last Evolution: Kizuna",
    "aliases": [
      "Kizuna",
      "Última Evolução Kizuna"
    ],
    "rank": "U",
    "attribute": "Vacina",
    "element": "Luz",
    "families": [
      "TBD",
      "VB",
      "WG"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Cool Edge",
        "cooldown": 10,
        "cost": 3,
        "role": "DPS sustentado",
        "effect": "Dano aumentado no patch de agosto.",
        "aoe": false,
        "animation": "3s"
      },
      {
        "id": "F2",
        "name": "Strash Salamander",
        "cooldown": 3.3,
        "cost": 2,
        "role": "DPS sustentado",
        "effect": "Cooldown reduzido e crescimento por nível aumentado.",
        "aoe": false,
        "animation": "2,8s"
      },
      {
        "id": "F3",
        "name": "Red Reamer & Raddle Star",
        "cooldown": 30,
        "cost": 3,
        "role": "Dano",
        "effect": "Dano aumentado no patch.",
        "aoe": false,
        "animation": "4,6s"
      },
      {
        "id": "F4",
        "name": "Gaia Brave & Moon Tense",
        "cooldown": 45,
        "cost": 3,
        "role": "Nuke / buff",
        "effect": "Dano/escala foram reduzidos; efeito passou a ser próprio.",
        "aoe": false,
        "animation": "6s"
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "F2 25 / F1 10",
        "priority": [
          "F2",
          "F1",
          "F3",
          "F4"
        ],
        "distribution": {
          "F1": 10,
          "F2": 25,
          "F3": 1,
          "F4": 1
        },
        "confidence": "medium",
        "basis": "Patch 27/08/2026 + DMO Wiki atual",
        "reason": "Nenhuma skill nativa foi confirmada oficialmente como AoE no LADMO. Farm usa a rotação curta como fallback, sem transformar relatos não confirmados em dado do builder.",
        "rotation": [
          "F2",
          "F1",
          "F2"
        ],
        "notes": [],
        "farmStyle": "single",
        "purpose": "farm_single_fallback"
      },
      "dps": {
        "label": "DPS",
        "title": "F2 25 / F1 10",
        "priority": [
          "F2",
          "F1",
          "F3",
          "F4"
        ],
        "distribution": {
          "F1": 10,
          "F2": 25,
          "F3": 1,
          "F4": 1
        },
        "confidence": "high",
        "basis": "DMO Wiki atual + rebalance 08/2026",
        "reason": "F2 de 3,3s é, de longe, o melhor investimento sustentado após o rebalance; F1 recebe os pontos restantes.",
        "rotation": [
          "F2",
          "F1",
          "F2",
          "F2"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — Kizuna",
        "url": "https://dmowiki.com/Last_Evolution%3A_Kizuna"
      },
      {
        "type": "Oficial",
        "label": "GameKing — rebalanceamento 27/08/2026",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=228"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: há relatos comunitários de efeito em área na skill de congelamento, mas as notas oficiais atuais não classificam explicitamente uma skill nativa de Kizuna como AoE. Mantida como não confirmada para evitar falso positivo."
    ],
    "overclock": false,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "goddramon": {
    "name": "Goddramon",
    "aliases": [
      "Goldramon U"
    ],
    "rank": "U",
    "attribute": "Vacina",
    "element": "Fogo",
    "families": [
      "DR",
      "VB",
      "WG"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "God Fist",
        "cooldown": 3,
        "cost": 2,
        "role": "DPS sustentado",
        "effect": "Cooldown extremamente curto.",
        "aoe": false,
        "animation": "4s"
      },
      {
        "id": "F2",
        "name": "God Flame",
        "cooldown": 9,
        "cost": 3,
        "role": "Dano em área",
        "effect": "God Flame atinge inimigos em todas as direções ao redor do usuário.",
        "aoe": true,
        "animation": "6s",
        "aoeType": "AoE em todas as direções"
      },
      {
        "id": "F3",
        "name": "Open: The Power of God",
        "cooldown": 30,
        "cost": 4,
        "role": "Dano",
        "effect": "Skill intermediária.",
        "aoe": false,
        "animation": "6s"
      },
      {
        "id": "F4",
        "name": "Rebirth: Umon, Spear of Thunder",
        "cooldown": 45,
        "cost": 4,
        "role": "Nuke",
        "effect": "Nuke de cooldown longo.",
        "aoe": false,
        "animation": "8s"
      },
      {
        "id": "F5",
        "name": "Destruction: Amon of the Crimson Flame",
        "cooldown": 55,
        "cost": 3,
        "role": "Nuke pesado",
        "effect": "Maior dano bruto entre as skills listadas.",
        "aoe": false,
        "animation": "8s"
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "F2 25 / F1 3",
        "priority": [
          "F2",
          "F1",
          "F3",
          "F4",
          "F5"
        ],
        "distribution": {
          "F1": 3,
          "F2": 25,
          "F3": 1,
          "F4": 1,
          "F5": 1
        },
        "confidence": "high",
        "basis": "DMO Wiki atual",
        "reason": "F2 God Flame atinge inimigos em todas as direções; é a skill de área confirmada do Goddramon.",
        "rotation": [
          "F2",
          "F1"
        ],
        "notes": [],
        "farmStyle": "aoe",
        "purpose": "farm_aoe"
      },
      "dps": {
        "label": "DPS",
        "title": "F1 25 / F2 10",
        "priority": [
          "F1",
          "F2",
          "F5",
          "F4",
          "F3"
        ],
        "distribution": {
          "F1": 25,
          "F2": 10,
          "F3": 1,
          "F4": 1,
          "F5": 1
        },
        "confidence": "medium",
        "basis": "DMO Wiki atual — cooldown/ganho",
        "reason": "F1 tem apenas 3s de cooldown e domina o dano sustentado por ponto. F2 recebe os pontos restantes e oferece AoE situacional.",
        "rotation": [
          "F1",
          "F2",
          "F1",
          "F1"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — Goddramon",
        "url": "https://dmowiki.com/Goddramon"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: F2. A classificação não é inferida pelo número da skill; cada F1/F2/F3/F4/F5 foi verificada individualmente."
    ],
    "overclock": false,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "holydramon": {
    "name": "Holydramon [Despertado]",
    "aliases": [
      "Holydramon Awaken",
      "Magnadramon Awaken"
    ],
    "rank": "U",
    "attribute": "Vacina",
    "element": "Vento",
    "families": [
      "DR",
      "VB",
      "WG"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Holy Flame",
        "cooldown": 4,
        "cost": 2,
        "role": "DPS sustentado",
        "effect": "Melhor frequência de uso.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F2",
        "name": "Hermit Fog",
        "cooldown": 10,
        "cost": 4,
        "role": "DPS secundário",
        "effect": "Segundo investimento calculado.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F3",
        "name": "Apocalypse",
        "cooldown": 27,
        "cost": 4,
        "role": "Dano",
        "effect": "Dano intermediário.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F4",
        "name": "Holy Light: Apocalypse",
        "cooldown": 50,
        "cost": 3,
        "role": "Nuke",
        "effect": "Nuke principal.",
        "aoe": false,
        "animation": null
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "F1 25 / F2 8",
        "priority": [
          "F1",
          "F2",
          "F4",
          "F3"
        ],
        "distribution": {
          "F1": 25,
          "F2": 8,
          "F3": 1,
          "F4": 1
        },
        "confidence": "medium",
        "basis": "DMO Wiki atual",
        "reason": "Nenhuma skill nativa foi confirmada explicitamente como AoE. Farm usa F1/F2 como fallback de alvo único.",
        "rotation": [
          "F1",
          "F2",
          "F1"
        ],
        "notes": [],
        "farmStyle": "single",
        "purpose": "farm_single_fallback"
      },
      "dps": {
        "label": "DPS",
        "title": "F1 25 / F2 8",
        "priority": [
          "F1",
          "F2",
          "F4",
          "F3"
        ],
        "distribution": {
          "F1": 25,
          "F2": 8,
          "F3": 1,
          "F4": 1
        },
        "confidence": "medium",
        "basis": "DMO Wiki atual — cooldown/ganho",
        "reason": "F1 de 4s é o investimento sustentado principal; F2 recebe os 28 pontos restantes.",
        "rotation": [
          "F1",
          "F2",
          "F1"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — Holydramon Awaken",
        "url": "https://dmowiki.com/Holydramon_%28Awaken%29"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: nenhuma skill nativa explicitamente confirmada. A classificação não é inferida pelo número da skill; cada F1/F2/F3/F4/F5 foi verificada individualmente."
    ],
    "overclock": false,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "abbadomon_core": {
    "name": "Abbadomon Core",
    "aliases": [
      "Abbadomon Core U"
    ],
    "rank": "U",
    "attribute": "Desconhecido",
    "element": "Escuridão",
    "families": [
      "TBD",
      "NSo",
      "DA"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Bin Gerrard",
        "cooldown": 4,
        "cost": 2,
        "role": "DPS sustentado",
        "effect": "Cooldown aumentado para 4s no rebalance.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F2",
        "name": "Death Charge",
        "cooldown": 7,
        "cost": 3,
        "role": "DPS sustentado",
        "effect": "Skill curta e eficiente.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F3",
        "name": "Final Requiem",
        "cooldown": 43,
        "cost": 3,
        "role": "Dano",
        "effect": "Nuke intermediário.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F4",
        "name": "Eclipse Gnawn",
        "cooldown": 28,
        "cost": 4,
        "role": "Dano",
        "effect": "Skill de custo alto.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F5",
        "name": "Gaze Eraser",
        "cooldown": 52,
        "cost": 2,
        "role": "Nuke pesado",
        "effect": "Nuke de grande escala.",
        "aoe": false,
        "animation": null
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "F1 25 / F2 10",
        "priority": [
          "F1",
          "F2",
          "F4",
          "F5",
          "F3"
        ],
        "distribution": {
          "F1": 25,
          "F2": 10,
          "F3": 1,
          "F4": 1,
          "F5": 1
        },
        "confidence": "medium",
        "basis": "DMO Wiki + patch 27/08/2026",
        "reason": "Nenhuma skill nativa foi confirmada explicitamente como AoE. Farm usa F1/F2 como fallback de alvo único.",
        "rotation": [
          "F1",
          "F2",
          "F1"
        ],
        "notes": [],
        "farmStyle": "single",
        "purpose": "farm_single_fallback"
      },
      "dps": {
        "label": "DPS",
        "title": "F1 25 / F2 10",
        "priority": [
          "F1",
          "F2",
          "F5",
          "F3",
          "F4"
        ],
        "distribution": {
          "F1": 25,
          "F2": 10,
          "F3": 1,
          "F4": 1,
          "F5": 1
        },
        "confidence": "high",
        "basis": "DMO Wiki atual — tabela completa de dano/cooldown",
        "reason": "F1 de 4s tem o melhor retorno sustentado; F2 de 7s recebe o restante. Os nukes continuam na rotação no Lv.1 quando disponíveis.",
        "rotation": [
          "F1",
          "F2",
          "F1",
          "F5"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — Abbadomon Core",
        "url": "https://dmowiki.com/Abbadomon_Core"
      },
      {
        "type": "Oficial",
        "label": "GameKing — rebalanceamento 27/08/2026",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=228"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: nenhuma skill nativa explicitamente confirmada. A classificação não é inferida pelo número da skill; cada F1/F2/F3/F4/F5 foi verificada individualmente."
    ],
    "overclock": false,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "abbadomon": {
    "name": "Abbadomon",
    "aliases": [
      "Abbadomon U"
    ],
    "rank": "U",
    "attribute": "Desconhecido",
    "element": "Escuridão",
    "families": [
      "TBD",
      "NSo",
      "DA"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Gala-lightness",
        "cooldown": 3.5,
        "cost": 2,
        "role": "DPS sustentado",
        "effect": "Cooldown curto.",
        "aoe": false,
        "animation": "3,5s"
      },
      {
        "id": "F2",
        "name": "White Liner",
        "cooldown": 8.5,
        "cost": 3,
        "role": "DPS sustentado",
        "effect": "Segundo skill de ciclo.",
        "aoe": false,
        "animation": "4s"
      },
      {
        "id": "F3",
        "name": "Darkness Eclipse",
        "cooldown": 25,
        "cost": 3,
        "role": "Dano / cura de grupo",
        "effect": "Corrompe uma área específica com escuridão e ativa Black Sun, que recupera HP do usuário e do grupo. As fontes públicas consultadas não confirmam ataque multi-alvo; por segurança, não é tratada como AoE.",
        "aoe": false,
        "animation": "3s"
      },
      {
        "id": "F4",
        "name": "Gaze Eraser",
        "cooldown": 48,
        "cost": 4,
        "role": "Nuke",
        "effect": "Nuke de cooldown longo.",
        "aoe": false,
        "animation": "3s"
      },
      {
        "id": "F5",
        "name": "Doom Coffin",
        "cooldown": 70,
        "cost": 2,
        "role": "Nuke",
        "effect": "Cooldown muito longo.",
        "aoe": false,
        "animation": "5,5s"
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "F1 25 / F2 10",
        "priority": [
          "F1",
          "F2",
          "F3",
          "F4",
          "F5"
        ],
        "distribution": {
          "F1": 25,
          "F2": 10,
          "F3": 1,
          "F4": 1,
          "F5": 1
        },
        "confidence": "medium",
        "basis": "DMO Wiki + GameKing (lançamento do Abbadomon); nenhuma skill com tipo AoE confirmado",
        "reason": "Nenhuma skill teve dano multi-alvo confirmado. F3 descreve uma área, mas isso não basta para classificá-la como AoE; Farm usa F1/F2 como fallback.",
        "rotation": [
          "F1",
          "F2",
          "F1"
        ],
        "notes": [
          "F3 não é marcada como AoE sem confirmação explícita de ataque multi-alvo."
        ],
        "farmStyle": "single",
        "purpose": "farm_single_fallback"
      },
      "dps": {
        "label": "DPS",
        "title": "F1 25 / F2 10",
        "priority": [
          "F1",
          "F2",
          "F4",
          "F5",
          "F3"
        ],
        "distribution": {
          "F1": 25,
          "F2": 10,
          "F3": 1,
          "F4": 1,
          "F5": 1
        },
        "confidence": "high",
        "basis": "DMO Wiki atual — tabela completa de dano/cooldown",
        "reason": "Para DPS sustentado, F1 é o investimento mais eficiente e F2 recebe o restante. F3 permanece no Lv.1 como utilidade/cura; não é classificada como AoE sem confirmação explícita.",
        "rotation": [
          "F1",
          "F2",
          "F1",
          "F1"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — Abbadomon",
        "url": "https://dmowiki.com/Abbadomon"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: F3 Darkness Eclipse menciona consumir uma área, mas a documentação consultada não confirma que o dano atinja múltiplos alvos. Não é marcada como AoE apenas pela descrição visual/temática."
    ],
    "overclock": false,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "done": {
    "name": "DoneDevimon",
    "aliases": [
      "Done Devimon"
    ],
    "rank": "U",
    "attribute": "Vírus",
    "element": "Escuridão",
    "families": [
      "DA",
      "NSo",
      "TBD"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Destroy Claw",
        "cooldown": 3,
        "cost": null,
        "role": "DPS sustentado",
        "effect": "A wiki confirma o cooldown, mas não o custo de skill points.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F2",
        "name": "Ultimate Flare",
        "cooldown": 13,
        "cost": null,
        "role": "DPS",
        "effect": "Custo por nível não confirmado na fonte pública usada.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F3",
        "name": "Data of the End",
        "cooldown": 35,
        "cost": null,
        "role": "Dano",
        "effect": "Custo por nível não confirmado.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F4",
        "name": "Mias-spew",
        "cooldown": 39,
        "cost": null,
        "role": "Dano / debuff",
        "effect": "Reduz AT do alvo em 10% por 40s.",
        "aoe": false,
        "animation": null
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "Prioridade F1 → F2",
        "priority": [
          "F1",
          "F2",
          "F3",
          "F4"
        ],
        "distribution": null,
        "confidence": "review",
        "basis": "DMO Wiki — custos de pontos ausentes",
        "reason": "Nenhuma skill nativa foi confirmada explicitamente como AoE. A prioridade de Farm permanece qualitativa por falta de dados completos e confiáveis de custo/distribuição.",
        "rotation": [
          "F1",
          "F1",
          "F2",
          "F3"
        ],
        "notes": [
          "Sem níveis-alvo até confirmar os custos por skill point."
        ],
        "farmStyle": "single",
        "purpose": "farm_single_fallback"
      },
      "dps": {
        "label": "DPS",
        "title": "Prioridade F1 → F2",
        "priority": [
          "F1",
          "F2",
          "F4",
          "F3"
        ],
        "distribution": null,
        "confidence": "review",
        "basis": "DMO Wiki atual — custos por upgrade ainda não publicados",
        "reason": "F1 tem 3s de cooldown e é o núcleo sustentado; F2 é a segunda skill curta. Sem custo oficial por nível, a calculadora não inventa uma distribuição numérica.",
        "rotation": [
          "F1",
          "F2",
          "F1"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Wiki",
        "label": "DMO Wiki — DoneDevimon",
        "url": "https://dmowiki.com/DoneDevimon"
      },
      {
        "type": "Oficial",
        "label": "GameKing — rebalanceamento 27/08/2026",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=228"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: nenhuma skill nativa explicitamente confirmada. A classificação não é inferida pelo número da skill; cada F1/F2/F3/F4/F5 foi verificada individualmente."
    ],
    "overclock": false,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  },
  "quantumon": {
    "name": "Quantumon",
    "aliases": [
      "Quantum U"
    ],
    "rank": "U",
    "attribute": "Dados",
    "element": "Água",
    "families": [
      "DS",
      "UK",
      "TBD"
    ],
    "pointsTotal": 76,
    "skills": [
      {
        "id": "F1",
        "name": "Unlimited Journey",
        "cooldown": null,
        "cost": null,
        "role": "DPS",
        "effect": "Dano base oficial 14.771; cooldown/custo não publicados na nota.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F2",
        "name": "Larc: Energia do Tempo",
        "cooldown": null,
        "cost": null,
        "role": "DPS",
        "effect": "Dano base oficial 22.577.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F3",
        "name": "Hazy Time",
        "cooldown": null,
        "cost": null,
        "role": "Buff / dano",
        "effect": "Concede +30% skill damage próprio por 30s após o rebalance.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F4",
        "name": "Quantum Fluctuation",
        "cooldown": null,
        "cost": null,
        "role": "Dano",
        "effect": "Dano base oficial 135.678.",
        "aoe": false,
        "animation": null
      },
      {
        "id": "F5",
        "name": "Fractured Time",
        "cooldown": null,
        "cost": null,
        "role": "Nuke",
        "effect": "Dano base oficial 254.762.",
        "aoe": false,
        "animation": null
      }
    ],
    "presets": {
      "farm": {
        "label": "Farm",
        "title": "Prioridade F3 → F1 → F2",
        "priority": [
          "F3",
          "F1",
          "F2",
          "F4",
          "F5"
        ],
        "distribution": null,
        "confidence": "review",
        "basis": "Patch 27/08/2026 — custos/cooldowns ausentes",
        "reason": "Nenhuma skill nativa foi confirmada explicitamente como AoE nas notas públicas atuais. A prioridade de Farm é um fallback de alvo único, sem inventar uma AoE.",
        "rotation": [
          "F3",
          "F1",
          "F2",
          "F4"
        ],
        "notes": [
          "Sem níveis-alvo até confirmar custos e cooldowns públicos."
        ],
        "farmStyle": "single",
        "purpose": "farm_single_fallback"
      },
      "dps": {
        "label": "DPS",
        "title": "Prioridade F3 → F1 → F2",
        "priority": [
          "F3",
          "F1",
          "F2",
          "F5",
          "F4"
        ],
        "distribution": null,
        "confidence": "review",
        "basis": "GameKing 05/2026 + rebalance 08/2026; custos por upgrade não confirmados",
        "reason": "Quantumon foi ajustado para combate prolongado e F3 concede +30% Skill Damage. Sem custos oficiais por nível disponíveis, mantemos prioridade em vez de números inventados.",
        "rotation": [
          "F3",
          "F1",
          "F2",
          "F1"
        ],
        "notes": [],
        "purpose": "dps_sustained"
      }
    },
    "sources": [
      {
        "type": "Oficial",
        "label": "GameKing — lançamento Quantumon",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=214"
      },
      {
        "type": "Oficial",
        "label": "GameKing — rebalanceamento 27/08/2026",
        "url": "https://ptladmo.gameking.com/News/EventView.aspx?idx=228"
      }
    ],
    "notes": [
      "Auditoria AoE 28/09/2026: nenhuma skill nativa explicitamente confirmada. A classificação não é inferida pelo número da skill; cada F1/F2/F3/F4/F5 foi verificada individualmente."
    ],
    "overclock": false,
    "reviewed": "2026-09-28 (auditoria de builds v47 — LADMO)"
  }
};
