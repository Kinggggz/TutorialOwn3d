# Auditoria de Builds — v47

Base integrada a partir da revisão fornecida para o sistema Ow3neD. A regra aplicada é: **Farm = limpeza/leveling**, priorizando AoE apenas quando a skill específica está marcada como área; **DPS = dano sustentado em alvo único/chefes**, sem tratar “maior nuke” como sinônimo de melhor DPS.

## Validação estrutural

- 22 Rank U.
- 44 presets: 22 Farm + 22 DPS.
- 39 presets com distribuição numérica.
- 5 presets deliberadamente sem níveis fechados: BloomLordmon Farm, DoneDevimon Farm/DPS e Quantumon Farm/DPS.
- Limite máximo validado: 76 pontos.

## Tabela implementada

| Rank U | AoE confirmada | Farm | DPS |
|---|---|---|---|
| Susanoomon [Supremacia] | F3 – Lightning of Judgement | F3 25 / F1 15 | F1 24 / F2 11 |
| Omegamon - Merciful Mode | F4 – Garuru Hou (Benevolence) | F4 25 / F1 15 | F1 25 / F3 8 |
| Shoutmon X7 Superior Mode | Nenhuma confirmada | F2 25 / F1 15 | F2 25 / F3 10 |
| Kuzuhamon - Miko Mode | F2 – Kongoukai Mandala | F2 25 / F1 3 | F1 25 / F2 10 |
| Gallantmon (Crimson Mode) [Despertado] | Nenhuma confirmada | F1 24 / F2 11 | F1 24 / F2 11 |
| Alphamon Ouryuken [Supremacia] | Nenhuma confirmada | F1 25 / F2 15 | F1 25 / F2 15 |
| Lilithmon X [Despertado] | F3 – Abyss Butterfly; F4 – Seventh Fascinate | F4 20 | F2 24 / F5 11 |
| Omegamon X [Supremacia] | F2 – Garuru Cannon (Extreme) | F2 25 / F1 15 | F1 25 / F2 15 |
| Apollomon | F2 – Solar Eruption; F3 – Sol Blaster | F2 25 / F3 10 | F1 25 / F5 15 |
| Apollomon Whispered | F2 – Arrow of Whispered; F4 – Last Whisper | F2 25 / F4 2 | F3 25 / F1 15 |
| BloomLordmon | F4 – Flower Vine | Dados insuficientes para níveis exatos | F1 25 / F2 10 |
| Eosmon LV6 | Nenhuma confirmada | F1 25 / F2 10 | F1 25 / F2 10 |
| ZeedMillenniummon [Despertado] | F4 – Destroyer Breath | F4 20 | F1 25 / F2 10 |
| Imperialdramon Paladin Mode [Despertado] | F4 – Heaven's Light | F4 25 / F1 3 | F1 24 / F2 11 |
| Lucemon: Satan Mode [Supremacia] | F4 – Satan's Fury | F4 25 / F1 3 | F1 25 / F2 15 |
| Last Evolution: Kizuna | Nenhuma confirmada | F2 25 / F1 10 | F2 25 / F1 10 |
| Goddramon | F2 – God Flame | F2 25 / F1 3 | F1 25 / F2 10 |
| Holydramon [Despertado] | Nenhuma confirmada | F1 25 / F2 8 | F1 25 / F2 8 |
| Abbadomon Core | Nenhuma confirmada | F1 25 / F2 10 | F1 25 / F2 10 |
| Abbadomon | Nenhuma confirmada | F1 25 / F2 10 | F1 25 / F2 10 |
| DoneDevimon | Nenhuma confirmada | Dados insuficientes para níveis exatos | Dados insuficientes para níveis exatos |
| Quantumon | Nenhuma confirmada | Dados insuficientes para níveis exatos | Dados insuficientes para níveis exatos |

## Casos sem níveis exatos

- **BloomLordmon Farm:** prioridade qualitativa em F4, sem fechar níveis onde o custo necessário não está confirmado na base usada.
- **DoneDevimon:** Farm e DPS permanecem qualitativos.
- **Quantumon:** Farm e DPS permanecem qualitativos.

## Integração da interface

- `uCount` presente no HTML e preenchido pelo JavaScript.
- “Saiba o que upar” corrigido.
- cache busting `v=47`.
- fallbacks locais autorais para `assets/img/apollomon.png` e `assets/img/apollomon_whispered.png`, consultados antes das fontes remotas.
- catálogo de retratos não é recriado ao alternar somente Farm/DPS, limite ou pontos.
- presets vazios exibem **“Dados insuficientes para níveis exatos”** e **“níveis não confirmados”**.

## Fontes cadastradas no `data.js`

### Susanoomon [Supremacia]

- DMO Wiki — Susanoomon Extreme: https://dmowiki.com/Susanoomon_%28Extreme%29
- GameKing — rebalanceamento 27/08/2026: https://ptladmo.gameking.com/News/EventView.aspx?idx=228
- GameKing — lançamento LADMO: https://ptladmo.gameking.com/News/EventView.aspx?idx=179

### Omegamon - Merciful Mode

- DMO Wiki — OMM: https://dmowiki.com/Omegamon_-_Merciful_Mode
- Discussão 08/2026 — F1 25 / F3 8: https://www.reddit.com/r/DigimonMastersOnline/comments/1vuu1r4/omm/
- GameKing — balanceamento U: https://ptladmo.gameking.com/News/EventView.aspx?idx=228

### Shoutmon X7 Superior Mode

- DMO Wiki — X7SM: https://dmowiki.com/Shoutmon_X7_Superior_Mode
- Discussão de distribuição: https://www.reddit.com/r/DigimonMastersOnline/comments/1l31b6z/x7sm_skill_levels_distribution/
- Review LADMO — skills/showcase: https://www.youtube.com/watch?v=qYHm8FiQVUQ
- GameKing — balanceamento/Overclock: https://ptladmo.gameking.com/News/EventView.aspx?idx=228

### Kuzuhamon - Miko Mode

- DMO Wiki — Miko: https://dmowiki.com/Kuzuhamon_-_Miko_Mode
- Skill distribution help — 06/2026: https://www.reddit.com/r/DigimonMastersOnline/comments/1ud3egb/skill_distribution_help/
- GameKing — balanceamento/Overclock: https://ptladmo.gameking.com/News/EventView.aspx?idx=228

### Gallantmon (Crimson Mode) [Despertado]

- DMO Wiki — CMA: https://dmowiki.com/Gallantmon_%28Crimson_Mode%29_%28Awaken%29
- Skill distribution help — 06/2026: https://www.reddit.com/r/DigimonMastersOnline/comments/1ud3egb/skill_distribution_help/
- GameKing — balanceamento/Overclock: https://ptladmo.gameking.com/News/EventView.aspx?idx=228

### Alphamon Ouryuken [Supremacia]

- DMO Wiki — AOE: https://dmowiki.com/Alphamon_Ouryuken_%28Extreme%29
- Discussão AOE — 22/09/2026: https://www.reddit.com/r/DigimonMastersOnline/comments/1wnof06/aoe_skill_dist/
- GameKing — rebalanceamento 27/08/2026: https://ptladmo.gameking.com/News/EventView.aspx?idx=228

### Lilithmon X [Despertado]

- DMO Wiki — Lilith X Awaken: https://dmowiki.com/Lilithmon_%28X-Antibody%29_%28Awaken%29
- GameKing — rebalanceamento 27/08/2026: https://ptladmo.gameking.com/News/EventView.aspx?idx=228

### Omegamon X [Supremacia]

- DMO Wiki — OXE: https://dmowiki.com/Omegamon_X_Extreme
- Showcase e teste de dano — 03/2026: https://www.youtube.com/watch?v=nmG6RKUzvdY
- GameKing — rebalanceamento 27/08/2026: https://ptladmo.gameking.com/News/EventView.aspx?idx=228
- GameKing — lançamento LADMO: https://ptladmo.gameking.com/News/EventView.aspx?idx=204

### Apollomon

- DMO Wiki — Apollomon: https://dmowiki.com/Apollomon

### Apollomon Whispered

- DMO Wiki — Apollomon Whispered: https://dmowiki.com/Apollomon_Whispered

### BloomLordmon

- DMO Wiki — BloomLordmon: https://dmowiki.com/Bloomlordmon
- GameKing — rebalanceamento/Overclock: https://ptladmo.gameking.com/News/EventView.aspx?idx=228

### Eosmon LV6

- DMO Wiki — Eosmon LV6: https://dmowiki.com/Eosmon_LV6
- GameKing — balanceamento/Overclock: https://ptladmo.gameking.com/News/EventView.aspx?idx=228

### ZeedMillenniummon [Despertado]

- DMO Wiki — Zeed Awaken: https://dmowiki.com/ZeedMillenniummon_%28Awaken%29
- GameKing — rebalanceamento/Overclock: https://ptladmo.gameking.com/News/EventView.aspx?idx=228

### Imperialdramon Paladin Mode [Despertado]

- DMO Wiki — IPMA: https://dmowiki.com/Imperialdramon_Paladin_Mode_%28Awaken%29
- GameKing — rebalanceamento 27/08/2026: https://ptladmo.gameking.com/News/EventView.aspx?idx=228

### Lucemon: Satan Mode [Supremacia]

- DMO Wiki — Lucemon Extreme: https://dmowiki.com/Lucemon%3A_Satan_Mode_%28Extreme%29
- GameKing — rebalanceamento 27/08/2026: https://ptladmo.gameking.com/News/EventView.aspx?idx=228

### Last Evolution: Kizuna

- DMO Wiki — Kizuna: https://dmowiki.com/Last_Evolution%3A_Kizuna
- GameKing — rebalanceamento 27/08/2026: https://ptladmo.gameking.com/News/EventView.aspx?idx=228

### Goddramon

- DMO Wiki — Goddramon: https://dmowiki.com/Goddramon

### Holydramon [Despertado]

- DMO Wiki — Holydramon Awaken: https://dmowiki.com/Holydramon_%28Awaken%29

### Abbadomon Core

- DMO Wiki — Abbadomon Core: https://dmowiki.com/Abbadomon_Core
- GameKing — rebalanceamento 27/08/2026: https://ptladmo.gameking.com/News/EventView.aspx?idx=228

### Abbadomon

- DMO Wiki — Abbadomon: https://dmowiki.com/Abbadomon

### DoneDevimon

- DMO Wiki — DoneDevimon: https://dmowiki.com/DoneDevimon
- GameKing — rebalanceamento 27/08/2026: https://ptladmo.gameking.com/News/EventView.aspx?idx=228

### Quantumon

- GameKing — lançamento Quantumon: https://ptladmo.gameking.com/News/EventView.aspx?idx=214
- GameKing — rebalanceamento 27/08/2026: https://ptladmo.gameking.com/News/EventView.aspx?idx=228

