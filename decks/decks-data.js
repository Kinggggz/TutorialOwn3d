window.DECK_BUFF_DATA = {
  "revisedAt": "01/10/2026",
  "effectLabels": {
    "attackSpeed": "Velocidade de Ataque",
    "skillDamage": "Dano de Skill",
    "normalDamage": "Dano de Ataque Básico",
    "critDamage": "Dano Crítico",
    "hp": "HP",
    "attributeDamage": "Dano de Atributo",
    "finalDamage": "Dano Final",
    "attackAmp": "Amplificação de Ataque",
    "attack": "Ataque",
    "hit": "Precisão",
    "cooldownReset": "Reset de recarga"
  },
  "decks": [
    {
      "id": "four-holy-beasts",
      "name": "Quatro Bestas Sagradas",
      "digimons": [
        "Azulongmon",
        "Baihumon",
        "Ebonwumon",
        "Zhuqiaomon"
      ],
      "effects": [
        {
          "type": "critDamage",
          "value": 30,
          "trigger": "passive"
        }
      ]
    },
    {
      "id": "fusion-higher",
      "name": "Fusão para Evoluir ao Superior",
      "digimons": [
        "Alphamon Ouryuken",
        "Omegamon",
        "Shakkoumon (Jogress)"
      ],
      "effects": [
        {
          "type": "cooldownReset",
          "value": 100,
          "chance": 9,
          "trigger": "normalHit",
          "duration": null
        }
      ],
      "note": "Composição exigida na versão global; formas opcionais antigas foram removidas da rota."
    },
    {
      "id": "three-archangels",
      "name": "Três Arcanjos",
      "digimons": [
        "Seraphimon (linha Pegasusmon)",
        "Ophanimon (linha Mastemon)",
        "Cherubimon (Branco)"
      ],
      "effects": [
        {
          "type": "normalDamage",
          "value": 15,
          "chance": 3,
          "trigger": "normalHit",
          "duration": 5
        }
      ]
    },
    {
      "id": "adventure-main",
      "name": "Protagonistas da Aventura",
      "digimons": [
        "Agumon (Clássico)",
        "Piyomon",
        "Gabumon (linha MetalGarurumon)",
        "Gomamon (linha Ikkakumon)",
        "Patamon (linha Pegasusmon)",
        "Palmon (linha Togemon)",
        "Gatomon (linha Nefertimon)",
        "Tentomon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 8,
          "trigger": "passive"
        }
      ]
    },
    {
      "id": "burst-ultimate-wings",
      "name": "Asas Supremas Explosivas",
      "digimons": [
        "Gallantmon Modo Carmesim",
        "Imperialdramon Modo Paladino",
        "Lucemon Modo Satã",
        "MaloMyotismon",
        "Ornismon",
        "TyrantKabuterimon",
        "Valdurmon (não Jogress)",
        "VictoryGreymon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 15,
          "trigger": "passive"
        }
      ]
    },
    {
      "id": "burst-ultimate-wings-ii",
      "name": "Asas Supremas Explosivas II",
      "digimons": [
        "Boltboutamon",
        "Mastemon",
        "Lucemon Modo Satã",
        "Megidramon",
        "Dynasmon X",
        "Duftmon X",
        "UlforceVeedramon X",
        "Dexmon X",
        "GrandisKuwagamon X",
        "Valkyrimon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 15,
          "trigger": "passive"
        },
        {
          "type": "normalDamage",
          "value": 15,
          "chance": 15,
          "trigger": "skillUse",
          "duration": 10
        }
      ]
    },
    {
      "id": "seafood-stew",
      "name": "Ensopado de Frutos do Mar",
      "digimons": [
        "Gesomon",
        "Mushroomon",
        "Pumpkinmon",
        "Syakomon"
      ],
      "effects": [
        {
          "type": "hp",
          "value": 10,
          "trigger": "passive"
        }
      ]
    },
    {
      "id": "sharp-blue-sword",
      "name": "Onda Afiada de Espada Azul",
      "digimons": [
        "Grademon",
        "Knightmon",
        "Minervamon",
        "OuRyumon",
        "Zanbamon"
      ],
      "effects": [
        {
          "type": "normalDamage",
          "value": 10,
          "chance": 6,
          "trigger": "normalHit",
          "duration": 10
        }
      ]
    },
    {
      "id": "instant-red-gun",
      "name": "Disparo Instantâneo da Arma Vermelha",
      "digimons": [
        "Astamon",
        "Chaosdramon",
        "Deputymon",
        "Gargomon",
        "Z'dGarurumon"
      ],
      "effects": [
        {
          "type": "skillDamage",
          "value": 8,
          "chance": 7,
          "trigger": "skillUse",
          "duration": 12
        }
      ]
    },
    {
      "id": "so-cute",
      "name": "Tão Fofos",
      "digimons": [
        "Doggymon",
        "Kudamon",
        "Salamon (linha Nefertimon)",
        "Terriermon"
      ],
      "effects": [
        {
          "type": "critDamage",
          "value": 15,
          "trigger": "passive"
        }
      ]
    },
    {
      "id": "four-dark-masters",
      "name": "Quatro Mestres das Trevas",
      "digimons": [
        "Machinedramon",
        "MetalSeadramon",
        "Piedmon",
        "Puppetmon"
      ],
      "effects": [
        {
          "type": "skillDamage",
          "value": 12,
          "chance": 5,
          "trigger": "skillUse",
          "duration": 10
        }
      ]
    },
    {
      "id": "ego-darkness",
      "name": "Ego da Escuridão",
      "digimons": [
        "Apocalymon (linha MechaNorimon)",
        "Apocalymon (linha Betamon)",
        "Apocalymon (linha Soulmon)",
        "Apocalymon (linha Woodmon)"
      ],
      "effects": [
        {
          "type": "hp",
          "value": 15,
          "trigger": "passive"
        },
        {
          "type": "normalDamage",
          "value": 12,
          "chance": 70,
          "trigger": "normalHit",
          "duration": 5
        }
      ]
    },
    {
      "id": "hyper-spirit",
      "name": "Hiper Evolução Espírito",
      "digimons": [
        "KaiserGreymon",
        "MagnaGarurumon"
      ],
      "effects": [
        {
          "type": "hp",
          "value": 10,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 2,
          "trigger": "passive"
        },
        {
          "type": "normalDamage",
          "value": 15,
          "chance": 50,
          "trigger": "normalHit",
          "duration": 5
        }
      ]
    },
    {
      "id": "ancient-spirit",
      "name": "Evolução Espírito Ancestral",
      "digimons": [
        "KaiserGreymon",
        "MagnaGarurumon",
        "Susanoomon"
      ],
      "effects": [
        {
          "type": "hp",
          "value": 15,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 5,
          "trigger": "passive"
        },
        {
          "type": "normalDamage",
          "value": 25,
          "chance": 40,
          "trigger": "normalHit",
          "duration": 5
        }
      ]
    },
    {
      "id": "legendary-vaccine-knights",
      "name": "Cavaleiros Lendários de Vacina",
      "digimons": [
        "Magnamon",
        "Omegamon Zwart",
        "Imperialdramon Modo Paladino (Jogress)",
        "Susanoomon",
        "Alphamon Ouryuken X",
        "Omegamon X"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 15,
          "trigger": "passive"
        },
        {
          "type": "hp",
          "value": 15,
          "trigger": "passive"
        },
        {
          "type": "normalDamage",
          "value": 20,
          "chance": 30,
          "trigger": "normalHit",
          "duration": 7
        }
      ]
    },
    {
      "id": "omega",
      "name": "OMEGA",
      "digimons": [
        "Omegamon Zwart",
        "Omegamon Alter-S",
        "Omegamon"
      ],
      "effects": [
        {
          "type": "skillDamage",
          "value": 12,
          "trigger": "passive"
        }
      ]
    },
    {
      "id": "mega-omega",
      "name": "MEGA-OMEGA",
      "digimons": [
        "Omegamon Zwart",
        "Omegamon Alter-S",
        "Omegamon",
        "Omegamon Zwart D",
        "Omegamon Alter-B"
      ],
      "effects": [
        {
          "type": "skillDamage",
          "value": 15,
          "trigger": "passive"
        },
        {
          "type": "attackSpeed",
          "value": 15,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 100,
          "chance": 3,
          "trigger": "normalHit",
          "duration": 10
        }
      ]
    },
    {
      "id": "royal-knights-x",
      "name": "Cavaleiros Reais X",
      "digimons": [
        "Omegamon X",
        "Alphamon Ouryuken [Despertado]",
        "Examon X",
        "Gallantmon X",
        "UlforceVeedramon X",
        "Magnamon X",
        "Dynasmon X",
        "LordKnightmon X",
        "Sleipmon X",
        "Craniamon X",
        "Duftmon X",
        "Gankoomon X",
        "Jesmon X"
      ],
      "effects": [
        {
          "type": "hp",
          "value": 20,
          "trigger": "passive"
        },
        {
          "type": "attackSpeed",
          "value": 17,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 100,
          "chance": 5,
          "trigger": "normalHit",
          "duration": 10
        }
      ]
    },
    {
      "id": "legendary-ancient-warrior",
      "name": "Manifeste-se! Guerreiro Lendário Antigo",
      "digimons": [
        "Imperialdramon Modo Paladino [Despertado]",
        "Omegamon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 17,
          "trigger": "passive"
        },
        {
          "type": "hit",
          "value": 10,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 130,
          "trigger": "passive"
        }
      ],
      "date": "22/05/2025"
    },
    {
      "id": "stop-diablomon",
      "name": "Detenha o Diablomon!",
      "digimons": [
        "Imperialdramon Modo Paladino [Despertado]",
        "Armagemon [Fusão]",
        "Diablomon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 18,
          "trigger": "passive"
        },
        {
          "type": "attributeDamage",
          "value": 5,
          "trigger": "passive"
        },
        {
          "type": "normalDamage",
          "value": 30,
          "trigger": "passive"
        }
      ],
      "date": "22/05/2025"
    },
    {
      "id": "dark-justice",
      "name": "Justiça Sombria",
      "digimons": [
        "Kuzuhamon Modo Miko",
        "Eosmon (Mega)",
        "BloomLordmon",
        "ZeedMillenniumon [Despertado]"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 22,
          "trigger": "passive"
        },
        {
          "type": "attributeDamage",
          "value": 5,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 100,
          "trigger": "passive"
        },
        {
          "type": "attackAmp",
          "value": 15,
          "trigger": "passive"
        }
      ],
      "date": "22/05/2025"
    },
    {
      "id": "peaceful-savior",
      "name": "Salvador Pacificador",
      "digimons": [
        "Omegamon Modo Misericordioso",
        "Shoutmon X7 Modo Superior",
        "Gallantmon Modo Carmesim [Despertado]",
        "Imperialdramon Modo Paladino [Despertado]"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 22,
          "trigger": "passive"
        },
        {
          "type": "hp",
          "value": 5,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 100,
          "trigger": "passive"
        },
        {
          "type": "attackAmp",
          "value": 15,
          "trigger": "passive"
        }
      ],
      "date": "22/05/2025"
    },
    {
      "id": "corrupted-purification",
      "name": "O Ritual de Purificação Corrompido",
      "digimons": [
        "Kuzuhamon Modo Miko",
        "Kuzuhamon",
        "Siriusmon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 18,
          "trigger": "passive"
        },
        {
          "type": "hp",
          "value": 40,
          "trigger": "passive"
        },
        {
          "type": "attributeDamage",
          "value": 5,
          "trigger": "passive"
        }
      ],
      "date": "22/05/2025"
    },
    {
      "id": "digital-world-guardian",
      "name": "Guardião do Mundo Digital",
      "digimons": [
        "Omegamon Modo Misericordioso",
        "Shoutmon X7 Modo Superior",
        "Kuzuhamon Modo Miko",
        "Gallantmon Modo Carmesim [Despertado]"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 22,
          "trigger": "passive"
        },
        {
          "type": "hp",
          "value": 40,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 70,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 150,
          "trigger": "passive"
        }
      ],
      "date": "22/05/2025"
    },
    {
      "id": "reunion",
      "name": "Reencontro",
      "digimons": [
        "Alphamon Ouryuken [Supremacia]",
        "Omegamon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 20,
          "trigger": "passive"
        },
        {
          "type": "attackSpeed",
          "value": 10,
          "chance": 20,
          "trigger": "normalHit",
          "duration": null
        },
        {
          "type": "hit",
          "value": 7,
          "trigger": "passive"
        }
      ],
      "date": "12/06/2025",
      "note": "A nota oficial não informa a duração do efeito ativado."
    },
    {
      "id": "real-world-invasion",
      "name": "Invasão ao Mundo Real!",
      "digimons": [
        "Lucemon Modo Satã [Supremacia]",
        "Agnimon",
        "Fairimon",
        "Chakkumon",
        "Arbormon",
        "Grotmon",
        "Wolfmon",
        "Blitzmon",
        "Lanamon",
        "Lowemon",
        "Mercuremon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 18,
          "trigger": "passive"
        },
        {
          "type": "attributeDamage",
          "value": 7,
          "trigger": "passive"
        },
        {
          "type": "hit",
          "value": 10,
          "trigger": "passive"
        }
      ],
      "date": "24/07/2025"
    },
    {
      "id": "last-evolution-bonds",
      "name": "Última Evolução: Laços",
      "digimons": [
        "Agumon - Laços de Coragem",
        "Omegamon",
        "Eosmon (Mega)"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 18,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 130,
          "trigger": "passive"
        },
        {
          "type": "attack",
          "value": 45,
          "trigger": "passive"
        }
      ],
      "date": "21/08/2025"
    },
    {
      "id": "our-hope-light",
      "name": "Nossa Esperança, Nossa Luz",
      "digimons": [
        "Goddramon",
        "Holydramon",
        "Millenniumon",
        "WarGreymon [Despertado]",
        "MetalGarurumon [Despertado]",
        "ZeedMillenniumon [Despertado]"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 19,
          "trigger": "passive"
        },
        {
          "type": "hp",
          "value": 45,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 200,
          "trigger": "passive"
        }
      ],
      "date": "02/10/2025"
    },
    {
      "id": "enchantment-justice-wings",
      "name": "Asas do Encantamento e Asas da Justiça",
      "digimons": [
        "Lilithmon [Despertado/Resistência]",
        "Alphamon Ouryuken [Supremacia]"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 20,
          "trigger": "passive"
        },
        {
          "type": "hp",
          "value": 30,
          "trigger": "passive"
        },
        {
          "type": "attributeDamage",
          "value": 7,
          "trigger": "passive"
        }
      ],
      "date": "13/11/2025"
    },
    {
      "id": "abyss-terror-abbadomon",
      "name": "Terror do Abismo",
      "digimons": [
        "Abbadomon",
        "WarGreymon [Despertado]",
        "MetalGarurumon [Despertado]",
        "Seraphimon",
        "Ophanimon",
        "Rosemon",
        "HerculesKabuterimon",
        "Vikemon",
        "Phoenixmon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 18,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 85,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 75,
          "chance": 20,
          "trigger": "normalHit",
          "duration": null
        }
      ],
      "variant": "Abbadomon",
      "date": "29/01/2026",
      "note": "A nota oficial não informa a duração do efeito ativado."
    },
    {
      "id": "abyss-terror-core",
      "name": "Terror do Abismo",
      "digimons": [
        "Abbadomon",
        "Abbadomon Core"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 18,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 180,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 180,
          "trigger": "passive"
        }
      ],
      "variant": "Abbadomon Core",
      "date": "12/03/2026"
    },
    {
      "id": "complete-and-unknown-data",
      "name": "Dados Completos e Dados de Origem Desconhecida",
      "digimons": [
        "Abbadomon",
        "Abbadomon Core",
        "Eosmon (Mega)",
        "Agumon - Laços de Coragem",
        "Kuzuhamon Modo Miko",
        "Shoutmon X7 Modo Superior"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 25,
          "trigger": "passive"
        },
        {
          "type": "attributeDamage",
          "value": 12,
          "trigger": "passive"
        },
        {
          "type": "finalDamage",
          "value": 25,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 100,
          "trigger": "passive"
        }
      ],
      "date": "12/03/2026"
    },
    {
      "id": "wings-protect-justice",
      "name": "Asas que Protegem a Justiça",
      "digimons": [
        "Omegamon X [Supremacia]",
        "Alphamon Ouryuken [Despertado]"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 18,
          "trigger": "passive"
        },
        {
          "type": "attributeDamage",
          "value": 4,
          "trigger": "passive"
        },
        {
          "type": "attackAmp",
          "value": 15,
          "trigger": "passive"
        }
      ],
      "date": "02/04/2026"
    },
    {
      "id": "wings-seduce-justice",
      "name": "Bater de Asas que Seduz a Justiça",
      "digimons": [
        "Omegamon X [Supremacia]",
        "Lilithmon [Despertado/Resistência]"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 20,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 150,
          "trigger": "passive"
        },
        {
          "type": "attributeDamage",
          "value": 3,
          "trigger": "passive"
        }
      ],
      "date": "02/04/2026"
    },
    {
      "id": "neutralizers",
      "name": "Aqueles que Neutralizam",
      "digimons": [
        "Omegamon X [Supremacia]",
        "Lucemon Modo Satã [Supremacia]",
        "Alphamon Ouryuken [Supremacia]",
        "ZeedMillenniumon [Despertado]",
        "Holydramon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 25,
          "trigger": "passive"
        },
        {
          "type": "hit",
          "value": 20,
          "trigger": "passive"
        },
        {
          "type": "attributeDamage",
          "value": 10,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 140,
          "trigger": "passive"
        }
      ],
      "date": "02/04/2026"
    },
    {
      "id": "larc-sovereign",
      "name": "O Soberano de Larc",
      "digimons": [
        "Quantumon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 18,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 180,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 200,
          "trigger": "passive"
        }
      ],
      "date": "11/06/2026"
    },
    {
      "id": "sends-digimon-human-world",
      "name": "O Ser que Envia Digimons ao Mundo Humano",
      "digimons": [
        "Quantumon",
        "BloomLordmon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 19,
          "trigger": "passive"
        },
        {
          "type": "hp",
          "value": 45,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 200,
          "trigger": "passive"
        }
      ],
      "date": "11/06/2026"
    },
    {
      "id": "neutral-nature-digimon",
      "name": "Digimon de Natureza Neutra",
      "digimons": [
        "Quantumon",
        "Kuzuhamon Modo Miko",
        "Shoutmon X7 Modo Superior"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 20,
          "trigger": "passive"
        },
        {
          "type": "attributeDamage",
          "value": 5,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 100,
          "trigger": "passive"
        },
        {
          "type": "attackAmp",
          "value": 15,
          "trigger": "passive"
        }
      ],
      "date": "11/06/2026"
    },
    {
      "id": "descended-brilliance",
      "name": "Aquele que Desceu com o Brilho",
      "digimons": [
        "Apollomon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 16,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 165,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 200,
          "trigger": "passive"
        },
        {
          "type": "hp",
          "value": 20,
          "trigger": "passive"
        }
      ],
      "date": "30/07/2026"
    },
    {
      "id": "brilliance-faces-despair",
      "name": "O Brilho que Enfrenta o Desespero",
      "digimons": [
        "Apollomon",
        "Omegamon Modo Misericordioso",
        "Susanoomon [Supremacia]",
        "Abbadomon",
        "Abbadomon Core",
        "Lucemon Modo Satã [Supremacia]",
        "DarknessBagramon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 25,
          "trigger": "passive"
        },
        {
          "type": "attributeDamage",
          "value": 12,
          "trigger": "passive"
        },
        {
          "type": "finalDamage",
          "value": 25,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 100,
          "trigger": "passive"
        }
      ],
      "date": "30/07/2026"
    },
    {
      "id": "sun-lament-whispered",
      "name": "Lamento do Sol, Whispered",
      "digimons": [
        "Apollomon Whispered"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 16,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 165,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 200,
          "trigger": "passive"
        },
        {
          "type": "hp",
          "value": 20,
          "trigger": "passive"
        }
      ],
      "date": "17/09/2026"
    },
    {
      "id": "hidden-side-inverted-sun",
      "name": "O Lado Oculto do Sol Invertido",
      "digimons": [
        "Apollomon Whispered",
        "Apollomon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 20,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 180,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 150,
          "trigger": "passive"
        },
        {
          "type": "hit",
          "value": 12,
          "trigger": "passive"
        }
      ],
      "date": "17/09/2026"
    },
    {
      "id": "eternal-destruction-chaos",
      "name": "Destruição e Caos Eternos",
      "digimons": [
        "Apollomon Whispered",
        "Lucemon Modo Satã [Supremacia]",
        "ZeedMillenniumon [Despertado]",
        "Abbadomon",
        "Abbadomon Core"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 25,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 170,
          "trigger": "passive"
        },
        {
          "type": "attributeDamage",
          "value": 8,
          "trigger": "passive"
        },
        {
          "type": "hp",
          "value": 35,
          "trigger": "passive"
        }
      ],
      "date": "17/09/2026"
    },
    {
      "id": "white-wings-courage",
      "name": "Asas Brancas: Uryeongdo da Coragem",
      "digimons": [
        "Agumon",
        "Greymon",
        "MetalGreymon",
        "WarGreymon",
        "Omegamon (Jogress)",
        "Omegamon Modo Misericordioso"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 22,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 125,
          "chance": 10,
          "trigger": "normalHit",
          "duration": 10
        },
        {
          "type": "attack",
          "value": 30,
          "chance": 20,
          "trigger": "normalHit",
          "duration": 7
        }
      ],
      "date": "07/03/2024"
    },
    {
      "id": "white-wings-friendship",
      "name": "Asas Brancas: Garuru Hou da Amizade",
      "digimons": [
        "Gabumon",
        "Garurumon",
        "WereGarurumon",
        "MetalGarurumon",
        "Omegamon (Jogress)",
        "Omegamon Modo Misericordioso"
      ],
      "effects": [
        {
          "type": "skillDamage",
          "value": 25,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 125,
          "chance": 10,
          "trigger": "normalHit",
          "duration": 10
        },
        {
          "type": "skillDamage",
          "value": 25,
          "chance": 20,
          "trigger": "normalHit",
          "duration": 10
        }
      ],
      "date": "07/03/2024"
    },
    {
      "id": "future-digimon-king",
      "name": "Eu Serei o Futuro Rei Digimon!",
      "digimons": [
        "Shoutmon",
        "Shoutmon X2",
        "Shoutmon X3",
        "Shoutmon X4",
        "Shoutmon X5",
        "OmegaShoutmon",
        "Shoutmon DX",
        "Shoutmon X7",
        "Shoutmon X7 Modo Superior"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 18,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 70,
          "trigger": "passive"
        },
        {
          "type": "hp",
          "value": 40,
          "trigger": "passive"
        }
      ],
      "date": "16/04/2024"
    },
    {
      "id": "divine-will",
      "name": "Vontade de Deus",
      "digimons": [
        "Taomon",
        "Sakuyamon",
        "Sakuyamon [Despertado]",
        "Kuzuhamon",
        "Kuzuhamon Modo Miko"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 17,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 80,
          "chance": 10,
          "trigger": "normalHit",
          "duration": 10
        },
        {
          "type": "skillDamage",
          "value": 30,
          "chance": 10,
          "trigger": "normalHit",
          "duration": 10
        }
      ],
      "date": "11/06/2024"
    },
    {
      "id": "awakened-four-holy-beasts",
      "name": "Líder das Quatro Bestas Sagradas Despertadas",
      "digimons": [
        "Qinglongmon",
        "Xuanwumon",
        "Zhuqiaomon",
        "Baihumon",
        "Fanglongmon [Despertado]"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 8,
          "trigger": "passive"
        },
        {
          "type": "hp",
          "value": 10,
          "trigger": "passive"
        }
      ],
      "date": "20/08/2024"
    },
    {
      "id": "divine-spear-sacred-sword",
      "name": "Lança Divina e Espada de Luz",
      "digimons": [
        "Guilmon",
        "Growlmon",
        "WarGrowlmon",
        "Gallantmon",
        "Gallantmon Modo Carmesim",
        "Gallantmon (Shin / Despertado)",
        "Gallantmon Modo Carmesim (Shin / Despertado)"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 20,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 80,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 50,
          "chance": 20,
          "trigger": "normalHit",
          "duration": 10
        }
      ],
      "date": "20/08/2024"
    },
    {
      "id": "false-neverland-goddess",
      "name": "A Deusa da Falsa Terra do Nunca",
      "digimons": [
        "Eosmon Lv.4",
        "Eosmon Lv.5",
        "Eosmon (Mega)"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 19,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 35,
          "trigger": "passive"
        },
        {
          "type": "cooldownReset",
          "value": 100,
          "chance": 10,
          "trigger": "skillUse",
          "duration": null
        }
      ],
      "date": "12/11/2024"
    },
    {
      "id": "ultimate-holy-war",
      "name": "O Fim, A Guerra Santa Suprema!",
      "digimons": [
        "ZeedMillenniumon [Despertado]",
        "WarGreymon",
        "MetalGarurumon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 17,
          "trigger": "passive"
        },
        {
          "type": "hp",
          "value": 30,
          "trigger": "passive"
        },
        {
          "type": "attack",
          "value": 45,
          "trigger": "passive"
        }
      ],
      "date": "18/03/2025"
    },
    {
      "id": "white-wings-sorrow-determination",
      "name": "Asas Brancas: Tristeza e Determinação",
      "digimons": [
        "Omegamon Modo Misericordioso"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 20,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 125,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 30,
          "chance": 20,
          "trigger": "normalHit",
          "duration": 10
        }
      ],
      "date": "13/05/2025"
    },
    {
      "id": "transcending-time-legend",
      "name": "Atravessando o Tempo, o Início da Lenda!",
      "digimons": [
        "Susanoomon [Supremacia]",
        "Vritramon",
        "Chakkumon",
        "Blizzarmon",
        "Petaldramon",
        "Gigasmon",
        "Garmmon",
        "Bolgmon",
        "Calamaramon",
        "Kaiserleomon",
        "Sefirotmon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 17,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 70,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 70,
          "trigger": "passive"
        }
      ],
      "date": "01/10/2025"
    },
    {
      "id": "digital-world-guardians-supremacy",
      "name": "Guardiões do Mundo Digital",
      "digimons": [
        "Omegamon Modo Misericordioso",
        "Shoutmon X7 Modo Superior",
        "Kuzuhamon Modo Miko",
        "Gallantmon Modo Carmesim [Despertado]",
        "Susanoomon [Supremacia]"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 23,
          "trigger": "passive"
        },
        {
          "type": "hp",
          "value": 50,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 90,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 170,
          "trigger": "passive"
        }
      ],
      "variant": "Versão com Susanoomon [Supremacia]",
      "date": "01/10/2025"
    },
    {
      "id": "peace-protecting-saviors-supremacy",
      "name": "Salvadores que Protegem a Paz",
      "digimons": [
        "Omegamon Modo Misericordioso",
        "Shoutmon X7 Modo Superior",
        "Gallantmon Modo Carmesim [Despertado]",
        "Imperialdramon Modo Paladino [Despertado]",
        "Susanoomon [Supremacia]"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 23,
          "trigger": "passive"
        },
        {
          "type": "hp",
          "value": 60,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 100,
          "trigger": "passive"
        },
        {
          "type": "attack",
          "value": 60,
          "trigger": "passive"
        }
      ],
      "variant": "Versão com Susanoomon [Supremacia]",
      "date": "01/10/2025"
    },
    {
      "id": "final-demon",
      "name": "Demônio do Fim",
      "digimons": [
        "DoneDevimon",
        "MetalGreymon",
        "WereGarurumon",
        "Mugendramon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 18,
          "trigger": "passive"
        },
        {
          "type": "critDamage",
          "value": 100,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 100,
          "trigger": "passive"
        }
      ],
      "date": "11/12/2025"
    },
    {
      "id": "abnormal-virus",
      "name": "Condição Anormal: Vírus",
      "digimons": [
        "DoneDevimon",
        "Gallantmon Modo Carmesim [Despertado]",
        "Lilithmon [Despertado/Resistência]",
        "ZeedMillenniumon [Despertado]",
        "Lucemon Modo Satã [Supremacia]"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 25,
          "trigger": "passive"
        },
        {
          "type": "hp",
          "value": 35,
          "trigger": "passive"
        },
        {
          "type": "attributeDamage",
          "value": 8,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 170,
          "trigger": "passive"
        }
      ],
      "date": "11/12/2025"
    },
    {
      "id": "fight-virus",
      "name": "Lute contra o Vírus!",
      "digimons": [
        "Imperialdramon Modo Paladino [Despertado]",
        "Alphamon Ouryuken [Supremacia]",
        "Omegamon Modo Misericordioso",
        "BloomLordmon",
        "Goddramon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 25,
          "trigger": "passive"
        },
        {
          "type": "hp",
          "value": 35,
          "trigger": "passive"
        },
        {
          "type": "attributeDamage",
          "value": 8,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 170,
          "trigger": "passive"
        }
      ],
      "date": "11/12/2025"
    },
    {
      "id": "destroyer-true-form",
      "name": "Destruidor em sua Verdadeira Forma",
      "digimons": [
        "Abbadomon",
        "WarGreymon [Despertado]",
        "MetalGarurumon [Despertado]",
        "Seraphimon",
        "Ophanimon",
        "Rosemon",
        "HerculesKabuterimon",
        "Vikemon",
        "Phoenixmon",
        "Omegamon"
      ],
      "effects": [
        {
          "type": "attackSpeed",
          "value": 18,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 85,
          "trigger": "passive"
        },
        {
          "type": "skillDamage",
          "value": 75,
          "chance": 20,
          "trigger": "normalHit",
          "duration": null
        }
      ],
      "date": "05/03/2026",
      "note": "A nota oficial não informa a duração do efeito ativado."
    }
  ]
};
