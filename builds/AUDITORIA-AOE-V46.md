# Auditoria completa de skills em área — v46

Data: 28/09/2026

## Regra usada

A posição da skill **não determina** se ela é AoE. F1, F2, F3, F4 ou F5 só é marcada como área quando uma fonte atual descreve explicitamente múltiplos alvos, ataque em área/linear/frontal, todos os inimigos no alcance ou inimigos ao redor. Texto visual como “atinge uma área” sem confirmação de dano multi-alvo não é suficiente.

Para diferenças entre regiões, a prioridade é a documentação do **LADMO/GameKing Latino**. DMO Wiki e outras bases são usadas como apoio.

| Digimon | Skill(s) de área confirmada(s) | Farm v46 | DPS v46 | Situação |
|---|---|---|---|---|
| Susanoomon [Supremacia] | **F3** — Lightning of Judgement | F3 25 / F1 15 | F1 24 / F2 11 | Confirmada como AoE |
| Omegamon - Merciful Mode | **F4** — Garuru Hou (Benevolence) | F4 25 / F1 15 | F1 25 / F3 8 | F4 ataca todos no alcance |
| Shoutmon X7 Superior Mode | Nenhuma confirmada | F2 25 / F1 15 | F2 25 / F3 10 | Farm usa fallback single-target |
| Kuzuhamon - Miko Mode | **F2** — Kongoukai Mandala | F2 25 / F1 3 | F1 25 / F2 10 | F2 é a AoE/leveling |
| Gallantmon Crimson Mode [Despertado] | Nenhuma confirmada | F1 24 / F2 11 | F1 24 / F2 11 | F3 não é presumida AoE |
| Alphamon Ouryuken [Supremacia] | **Nenhuma confirmada no LADMO atual** | F1 25 / F2 15 | F1 25 / F2 15 | Ver observação regional abaixo |
| Lilithmon X [Despertado] | **F3 e F4** | F4 20 | F2 24 / F5 11 | F4 = AoE forte + stun |
| Omegamon X [Supremacia] | **F2** — AoE linear | F2 25 / F1 15 | F1 25 / F2 15 | Conversão oficial no LADMO |
| Apollomon | **F2 e F3** | F2 25 / F3 10 | F1 25 / F5 15 | F2 ao redor; F3 área ampla |
| Apollomon Whispered | **F2 e F4** | F2 25 / F4 2 | F3 25 / F1 15 | F2 linear; F4 frontal |
| BloomLordmon | **F4** — Flower Vine | Prioridade F4 → F1 → F2 | F1 25 / F2 10 | F4 possui efeito/alcance em área confirmado |
| Eosmon LV6 | Nenhuma confirmada | F1 25 / F2 10 | F1 25 / F2 10 | Fallback single-target |
| ZeedMillenniummon [Despertado] | **F4** — Destroyer Breath | F4 20 | F1 25 / F2 10 | F4 explicitamente AoE |
| Imperialdramon Paladin Mode [Despertado] | **F4** — Heaven's Light | F4 25 / F1 3 | F1 24 / F2 11 | F3 é explicitamente alvo único |
| Lucemon: Satan Mode [Supremacia] | **F4** | F4 25 / F1 3 | F1 25 / F2 15 | F4 mudou de alvo único para área |
| Last Evolution: Kizuna | Nenhuma confirmada oficialmente | F2 25 / F1 10 | F2 25 / F1 10 | Há relato comunitário sobre F1, mas sem confirmação oficial suficiente |
| Goddramon | **F2** — God Flame | F2 25 / F1 3 | F1 25 / F2 10 | Atinge inimigos em todas as direções |
| Holydramon [Despertado] | Nenhuma confirmada | F1 25 / F2 8 | F1 25 / F2 8 | Fallback single-target |
| Abbadomon Core | Nenhuma confirmada | F1 25 / F2 10 | F1 25 / F2 10 | Fallback single-target |
| Abbadomon | Nenhuma confirmada | F1 25 / F2 10 | F1 25 / F2 10 | F3 não é marcada como AoE por inferência |
| DoneDevimon | Nenhuma confirmada | Prioridade F1 → F2 | Prioridade F1 → F2 | Sem distribuição numérica inventada |
| Quantumon | Nenhuma confirmada | Prioridade F3 → F1 → F2 | Prioridade F3 → F1 → F2 | Sem AoE pública confirmada |

## Pontos importantes encontrados

### Alphamon Ouryuken [Supremacia]

Existe uma divergência regional/documental importante. Uma nota do GDMO de 26/08/2026 descreve uma conversão de uma “Skill 3” para AoE, mas a nota oficial do **LADMO de 27/08/2026** usa uma numeração/recarga diferente e não registra essa conversão: no LADMO, a Habilidade 3 aparece com recarga **49s → 46s**, correspondendo ao kit atual exibido nas bases LADMO/DMO Wiki. Por isso a v46 **não força F3 como AoE** no LADMO.

### Abbadomon

`Darkness Eclipse` (F3) diz que consome/corrompe uma área, mas a documentação consultada não confirma que o dano atinja vários monstros ao mesmo tempo. A v45 inferia AoE a partir do texto; a v46 não faz essa inferência.

### BloomLordmon

Flower Vine/F4 possui `Shadow Bind` descrito como efeito de área e também aparece em base especializada de AoE. Como as fontes públicas não são igualmente completas sobre custo e comportamento de dano, a build de Farm permanece **qualitativa** em vez de inventar níveis.

## Fontes principais verificadas

- LADMO/GameKing — balanceamento de 27/08/2026: https://ptladmo.gameking.com/News/EventView.aspx?idx=228
- GameKing — Apollomon Whispered (16/09/2026): https://dmo.gameking.com/News/PatchNoteView.aspx?idx=4199&page=1
- DMO Wiki — Susanoomon Extreme: https://dmowiki.com/Susanoomon_%28Extreme%29
- DMO Wiki — Omegamon Merciful Mode: https://dmowiki.com/Omegamon_-_Merciful_Mode
- DMO Wiki — Kuzuhamon Miko Mode: https://dmowiki.com/Kuzuhamon_-_Miko_Mode
- DMO Wiki — Lilithmon X Awaken: https://dmowiki.com/Lilithmon_X_%28Awaken%29
- DMO Wiki — Apollomon: https://dmowiki.com/Apollomon
- DMO Wiki — ZeedMillenniummon Awaken: https://dmowiki.com/ZeedMillenniummon_%28Awaken%29
- DMO Wiki — Imperialdramon Paladin Mode Awaken: https://dmowiki.com/Imperialdramon_Paladin_Mode_%28Awaken%29
- DMO Wiki — Goddramon: https://dmowiki.com/Goddramon
- DMO Wiki — BloomLordmon: https://dmowiki.com/Bloomlordmon
- LADMO/GameKing — lançamento de BloomLordmon: https://ptladmo.gameking.com/News/EventView.aspx?idx=147

## Validação do código

A v46 também valida que:

- existem 22 Rank U e 44 presets (`Farm` + `DPS`);
- nenhum preset usa a chave antiga `Burst`;
- toda prioridade referencia uma skill existente;
- nenhuma distribuição ultrapassa 76 pontos;
- quando existe AoE confirmada, a primeira prioridade de Farm é uma AoE real daquele Digimon;
- quando não existe AoE confirmada, o Farm é explicitamente tratado como fallback de alvo único.

## Correções de integração feitas nesta versão

Durante o teste funcional do Skill Builder integrado ao portal, foram corrigidos três pontos de interface:

1. O texto de **Farm** não diz mais “limpeza de múltiplos alvos” quando o Digimon não possui AoE confirmada; nesses casos aparece explicitamente que é um fallback de alvo único.
2. O título da build agora respeita a **ordem real de prioridade**. Ex.: Susanoomon mostra `F3 25 / F1 15` no Farm, e não `F1 15 / F3 25` apenas por ordem interna do objeto.
3. Os papéis das skills deixaram de usar os termos `Farm` e `Burst`; agora mostram funções neutras como `Dano em área`, `Nuke`, `controle` e `buff`, evitando confundir o papel da skill com o tipo de preset selecionado.

O DOM da calculadora foi executado com os scripts reais (`dps-engine.js`, `data.js` e `app.js`) e testado alternando Susanoomon, IPMA, Miko, Omegamon X, Alphamon Ouryuken e Abbadomon entre presets. Não foram encontrados erros JavaScript no teste funcional.
