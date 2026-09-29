# Auditoria completa de builds — v9

Data da revisão: 28/09/2026

## Regra aplicada

A v8 herdou a lógica de **PvE sustentado** e apenas trocou o rótulo para **Farm**. Isso criou o problema percebido no site: várias builds chamadas Farm continuavam sendo builds de chefe/alvo único, enquanto skills de área apareciam no outro preset ou nem recebiam pontos.

Na v9 os presets foram reconstruídos com duas funções claras:

- **Farm:** limpeza/leveling. Se existe AoE confirmado, ele passa a ser o foco. Se não existe AoE dedicado confirmado, o preset usa a rotação mais rápida de alvo único e deixa isso explícito.
- **Burst:** dano concentrado em janela curta. Uma skill AoE ainda pode ser a melhor skill de Burst quando ela também é o maior nuke do kit.

Hierarquia usada na auditoria: notas oficiais GameKing/LADMO → DMO Wiki atual → cálculo por custo, cooldown e dano já cadastrado. Não foi criada classificação AoE apenas por nome/animação quando a fonte não confirmou o tipo.

## Resultado Digimon por Digimon

| Digimon | Farm v9 | Burst v9 | Resultado da auditoria |
|---|---|---|---|
| Susanoomon [Supremacia] | F3 25 / F1 15 | F4 20 | F3 é AoE confirmada; Farm antiga F1/F2 era sustentado, não farm de mobs. |
| Omegamon - Merciful Mode | F4 25 / F1 15 | F3 20 | F4 ataca todos os inimigos no alcance; F3 continua o nuke de Burst. |
| Shoutmon X7 Superior Mode | F2 25 / F1 15 | F3 25 / F1 3 | Sem AoE dedicado confirmado. Corrigido também o texto da F1: a Provocação foi removida no patch de 27/08. |
| Kuzuhamon - Miko Mode | F2 25 / F1 3 | F1 25 / F2 10 | F2 é a opção de área/leveling; os antigos modos Single target/AoE foram normalizados para Burst/Farm. |
| Gallantmon Crimson Mode [Despertado] | F1 24 / F2 11 | F3 20 | Sem AoE dedicado confirmado; Farm é rotação rápida. F4 continua despriorizada por animação longa. |
| Alphamon Ouryuken [Supremacia] | F1 25 / F2 15 | F3 20 | O patch não converteu F3 em AoE; não foi inventada uma AoE. |
| Lilithmon X [Despertado] | F4 20 | F5 25 / F2 3 | F3 e F4 são AoE; F4 é a AoE de maior dano. F5 25 permanece a recomendação de Burst curto. |
| Omegamon X [Supremacia] | F2 25 / F1 15 | F5 25 / F1 3 | Correção importante: só F2 foi convertida para AoE em linha; F3 teve alcance aumentado e All Delete, não conversão para AoE. |
| Apollomon | F2 25 / F3 10 | F5 25 / F1 15 | F2 ataca inimigos ao redor e F3 causa dano em ampla área; Farm agora usa as skills de área. |
| Apollomon Whispered | F2 25 / F4 2 | F3 25 / F5 8 | Correção importante: F2 é Linear AoE e F4 é Frontal AoE na nota oficial de lançamento. |
| BloomLordmon | Prioridade F4 → F1 → F2 | F3 20 | F4 é AoE + stun e foi fortalecida em agosto. Sem custo/cooldown público confiável de F4, níveis exatos não são inventados. |
| Eosmon LV6 | F1 25 / F2 10 | F3 25 / F4 2 | Sem AoE dedicado confirmado; Farm fica como rotação rápida de alvo único. |
| ZeedMillenniummon [Despertado] | F4 20 | F4 20 | Correção importante: F4 é a AoE confirmada e dá +30% Skill Damage; F3 teve alcance aumentado, mas não foi documentada como AoE. |
| Imperialdramon Paladin Mode [Despertado] | F4 25 / F1 3 | F3 20 | F4 é a opção de área cadastrada; F3 continua o nuke principal de Burst. |
| Lucemon: Satan Mode [Supremacia] | F4 25 / F1 3 | F4 25 / F1 3 | F4 foi oficialmente convertida de alvo único para ataque em área. Ela também é o maior nuke, então aparece nos dois modos por razões diferentes. |
| Last Evolution: Kizuna | F2 25 / F1 10 | F4 25 / F2 3 | Sem AoE dedicada confirmada no tipo de ataque. Burst foi corrigido de F3 para F4 pelos valores atuais pós-rebalance. |
| Goddramon | F2 25 / F1 3 | F5 25 / F4 2 | F2 atinge inimigos em todas as direções e tem 9s de cooldown; agora é a base do Farm. |
| Holydramon [Despertado] | F1 25 / F2 8 | F4 25 / F3 2 | Sem AoE dedicada confirmada; Farm por rotação rápida e F4 para Burst. |
| Abbadomon Core | F1 25 / F2 10 | F5 25 / F1 15 | Sem AoE dedicada confirmada. Farm usa os menores cooldowns; 1 ponto fica sem uso com essa combinação de custos. |
| Abbadomon | F3 25 / F1 3 | F4 20 | F3 é descrita como consumindo uma área em escuridão e foi movida para Farm. Burst antigo F5 25 foi corrigido: F4 tem dano máximo maior e cooldown menor. |
| DoneDevimon | Prioridade F1 → F2 | Prioridade F4 → F3 | Custos de pontos não estão confirmados na fonte usada; a v9 não inventa níveis. |
| Quantumon | Prioridade F3 → F1 → F2 | Prioridade F3 → F5 → F4 | Custos/cooldowns não estão publicados de forma suficiente; F3 abre a rotação pelo buff de +30% Skill Damage. |

## Erros de dados corrigidos

1. **Shoutmon X7SM F1:** removida a informação incorreta de Provocação após o rebalance; a nota oficial diz que o efeito foi removido.
2. **Omegamon X [Supremacia] F3:** removida a marcação `aoe:true`. O patch converteu a F2 para AoE em linha; a F3 recebeu alcance + All Delete.
3. **ZeedMillenniummon [Despertado] F3:** removida a marcação `aoe:true`. A AoE confirmada é a F4.
4. **Apollomon F2:** marcado como ataque em área conforme a descrição oficial de inimigos ao redor; F3 já permanece como ampla área.
5. **Apollomon Whispered F2/F4:** marcadas corretamente como Linear AoE e Frontal AoE.
6. **Kizuna Burst:** F3 25 substituída por F4 25 / F2 3 com base nos valores atuais.
7. **Abbadomon Burst:** F5 25 substituída por F4 20, que possui maior dano máximo e cooldown menor nos dados atuais.
8. Todos os 22 Rank U agora têm exatamente **Farm + Burst**, totalizando **44 presets**.

## Fontes centrais

- GameKing/LADMO — rebalanceamento geral de Rank U de 27/08/2026: https://ptladmo.gameking.com/News/EventView.aspx?idx=228
- GameKing — Apollomon Whispered, tipos oficiais das skills em 16/09/2026: https://dmo.gameking.com/News/PatchNoteView.aspx?idx=4199&page=1
- GameKing/LADMO — lançamento do Apollomon em 16/07/2026: https://ptladmo.gameking.com/News/EventView.aspx?idx=222
- DMO Wiki — páginas atuais dos Rank U e valores de cooldown/custo/dano: https://dmowiki.com/

O canal do Doragoro foi considerado como possível apoio para testes práticos, mas não foi usado para alterar uma build quando o vídeo correspondente não pôde ser indexado/verificado de forma confiável neste ambiente.
