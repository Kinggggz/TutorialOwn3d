# Auditoria de Builds — V45

Data: 28/09/2026

## Regra corrigida

- **Farm**: limpeza/leveling; prioriza AoE confirmado quando o Digimon possui uma skill de área.
- **DPS**: dano sustentado contra alvo único/chefes; usa a distribuição de ciclo longo auditada na V44.
- O antigo preset **Burst** foi removido. Ele estava misturando nukes de cooldown alto com o conceito de DPS.

## Caso que motivou a correção

**Susanoomon [Supremacia]**: F3 (Lightning of Judgement) é AoE. Portanto, **Farm = F3 25 / F1 15**. Para DPS sustentado, **F1 24 / F2 11**.

## 22 Rank U

| Digimon | Farm | DPS |
|---|---|---|
| Susanoomon [Supremacia] | F3 25 / F1 15 | F1 24 / F2 11 |
| Omegamon - Merciful Mode | F4 25 / F1 15 | F1 25 / F3 8 |
| Shoutmon X7 Superior Mode | F2 25 / F1 15 | F2 25 / F3 10 |
| Kuzuhamon - Miko Mode | F2 25 / F1 3 | F1 25 / F2 10 |
| Gallantmon (Crimson Mode) [Despertado] | F1 24 / F2 11 | F1 24 / F2 11 |
| Alphamon Ouryuken [Supremacia] | F1 25 / F2 15 | F1 25 / F2 15 |
| Lilithmon X [Despertado] | F4 20 | F2 24 / F5 11 |
| Omegamon X [Supremacia] | F2 25 / F1 15 | F1 25 / F2 15 |
| Apollomon | F2 25 / F3 10 | F1 25 / F5 15 |
| Apollomon Whispered | F2 25 / F4 2 | F3 25 / F1 15 |
| BloomLordmon | Prioridade F4 → F1 → F2 | F1 25 / F2 10 |
| Eosmon LV6 | F1 25 / F2 10 | F1 25 / F2 10 |
| ZeedMillenniummon [Despertado] | F4 20 | F1 25 / F2 10 |
| Imperialdramon Paladin Mode [Despertado] | F4 25 / F1 3 | F1 24 / F2 11 |
| Lucemon: Satan Mode [Supremacia] | F4 25 / F1 3 | F1 25 / F2 15 |
| Last Evolution: Kizuna | F2 25 / F1 10 | F2 25 / F1 10 |
| Goddramon | F2 25 / F1 3 | F1 25 / F2 10 |
| Holydramon [Despertado] | F1 25 / F2 8 | F1 25 / F2 8 |
| Abbadomon Core | F1 25 / F2 10 | F1 25 / F2 10 |
| Abbadomon | F3 25 / F1 3 | F1 25 / F2 10 |
| DoneDevimon | Prioridade F1 → F2 | Prioridade F1 → F2 |
| Quantumon | Prioridade F3 → F1 → F2 | Prioridade F3 → F1 → F2 |

## Validações de integração

- 22 Digimon carregados.
- 44 presets: exatamente `farm` + `dps` em cada Digimon.
- Nenhum preset `burst` restante.
- Todos os IDs de prioridade/distribuição apontam para skills existentes.
- Nenhuma distribuição excede os 76 pontos disponíveis.
- Em todo Digimon com AoE cadastrado, o primeiro foco do Farm é uma skill marcada como AoE.
- O texto da interface foi alterado para Farm = limpeza/AoE e DPS = alvo único/sustentado.
- Cache-bust dos arquivos da calculadora atualizado para `v=45`.

## Fontes centrais revisadas

- GameKing/LADMO — rebalanceamento geral Rank U de 27/08/2026.
- DMO Wiki — páginas atuais dos Rank U, cooldown, custo e descrições de AoE.
- GameKing — Apollomon e Apollomon Whispered para tipos/descrições oficiais das skills.
- Comunidade/Reddit apenas como apoio para distribuições de DPS quando não há recomendação oficial; dados oficiais e mecânicas do jogo têm prioridade.
