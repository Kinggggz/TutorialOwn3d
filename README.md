# Site da guilda Ow3neD

Site estático preparado para GitHub Pages, com a Calculadora Rank U, a Calculadora de Selos, a Calculadora D-Unit e o Guia de Progressão de Digimon Masters Online.

## Calculadora D-Unit LADMO

- Disponível em `dunit/` e integrada à navegação global do site.
- Base consolidada com **278 grupos únicos**, após remover uma duplicação exata entre `codex-133` e `codex-134`; progresso antigo de qualquer uma das duas entradas é migrado automaticamente.
- **96 composições nominais identificadas** e **182 grupos** com requisitos/recompensas confirmados, mas nomes individuais ainda em validação.
- A base contempla a meta de 260 grupos concluídos necessária ao rank Digimon Master.
- A antiga pontuação heurística da rota foi substituída por um **otimizador exato por programação dinâmica 0/1**.
- Prioridades disponíveis: melhor custo-benefício, menos condições, mais acessível e menos grupos.
- A lista carrega progressivamente (60 grupos no desktop e 30 no celular) para reduzir custo de renderização.
- O progresso usa armazenamento compacto v3, com migração automática do formato v2 e importação/exportação JSON.
- Importações de grupos manuais passam por validação rígida de esquema antes de entrar no site.
- O grupo oficial **Eclipse solar** permanece incluído com Apollomon Whispered + Apollomon e HP +500 / AT +100 / HT +100 / EXP +50%.
- O D-Unit foi separado em `dunit-data.js`, `dunit-optimizer.js`, `dunit-app.js` e `dunit.css`, eliminando as antigas sobrescritas sucessivas de funções.

## Base LADMO da Calculadora de Selos

- **514 selos ativos** em uma única página, sem seletor de servidor.
- A base pública mais ampla foi acoplada aos registros e às notas oficiais do LADMO. Nomes equivalentes em português e inglês são tratados como o mesmo selo.
- Há **246 trocas por Tickets confirmadas para o LADMO**: os 213 registros da [calculadora de referência](https://carvalhojp.github.io/ladmo-seal-codex/) e a lista adicionada oficialmente ao NPC Takato em [26/03/2026](https://ptladmo.gameking.com/News/EventView.aspx?idx=206), sem contar duas vezes nomes equivalentes.
- Foram adicionados 11 registros realmente ausentes com dados suficientes para cálculo: quatro selos **New LADMO**, três **Selos de Natal**, **Virada da Sorte AT**, **Tamer Matt**, **Férias Digitais AT** e **Selo Vampírico**.
- **Wormmon/Numemon/Nunemon**, **Baohumon/BaoHackmon**, **Flotomon/Salamon/Plotmon**, **Pukumon/Peckmon** e **Cogmon/Hagurumon** são registros equivalentes nas duas traduções da tabela oficial de março de 2026. Eles foram unificados por aliases, removendo cinco duplicações sem perder a busca pelos nomes antigos.
- Foram corrigidos os nomes dos selos de 12, 13, 14, 15 e 16 anos, além do atributo incorreto do registro `13th Anniversary DE` que aparecia dentro de DS.
- **Selo do Broto** foi corrigido de HT +100 para HT +200 conforme as notas posteriores do LADMO.
- Os bônus intermediários oficiais de Patamon–T.K., Gatomon–Hikari e Princesa Mimi foram cadastrados, evitando que a calculadora aplicasse uma progressão genérica incorreta.
- **Happy Christmas** mantém sua progressão especial: 20, 50, 100, 130, 160 e 200.
- A duplicação de HerculesKabuterimon permanece removida. **Selo de Barbamon, Rei Demônio da Ganância** está incluído com limite de 100 e progressão própria.
- A revisão mais recente foi feita em **28/09/2026**. A atualização oficial de **22/09/2026** foi revisada e não acrescentou novos selos.
- O nome **Sharmamon** foi corrigido conforme a base de referência atualizada; a grafia antiga `Shamamon` continua funcionando na busca.
- A tabela oficial do NPC Takato publicada em **26/03/2026** foi aplicada. Foram corrigidos nomes e custos divergentes, incluindo Myotismon, VenomMyotismon, Vritramon, Chakmon, Grotemon, Diarbbitmon, HerculesKabuterimon, Yukidarumon, Angemon, Marsmon, Reppamon, Gabumon, DarkTyrannomon e WereGarurumon (Black).
- Os nomes de **Dungeon Masters**, **Passe de Temporada**, **Dungeon Masters2**, **Dungeon Masters3**, **Exploração**, **Inverno** e **Dokugumon** foram padronizados para o LADMO; os nomes globais continuam funcionando como aliases de busca.
- Nove itens cuja existência está confirmada — Virada da Sorte HT e os oito selos do 4º Aniversário LADMO — permanecem fora dos cálculos porque as notas públicas consultadas não informam os bônus por rank. Eles estão listados em `assets/seals-ladmo-updates.js` para inclusão assim que os valores forem confirmados.
- A rota automática usa somente selos com custo de troca confirmado para o LADMO, evitando estimativas de Tickets sem fonte confirmada.

## Calculadora Rank U

- As recompensas e a estrutura da 2ª temporada continuam baseadas na nota oficial de 30/07/2026.
- Como essa temporada terminou em 24/09/2026 e a atualização de 22/09/2026 não anunciou o próximo calendário, datas posteriores passam a ser identificadas explicitamente como **projeção**, evitando apresentar um ciclo estimado como oficial.

## Publicar no GitHub Pages

1. Extraia o arquivo ZIP e envie **o conteúdo da pasta `Ow3neD-site`** para a raiz do repositório. O arquivo `index.html` precisa ficar visível diretamente na página inicial do repositório, e não dentro de outra pasta.
2. No GitHub, abra **Settings > Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch **main**, a pasta **/(root)** e clique em **Save**.

O endereço ficará disponível no formato `https://seu-usuario.github.io/nome-do-repositorio/`.


## Calculadora de Builds

A pasta `builds/` contém o Skill Builder Rank U integrado ao portal, com presets **Farm** (AoE/leveling) e **DPS** (alvo único/sustentado), além do comparador de DPS estimado.

## Atualização V45 — Skill Builder

A calculadora de builds foi re-auditada em 28/09/2026 com a separação correta de função: **Farm = limpeza/leveling com AoE quando disponível** e **DPS = dano sustentado contra alvo único/chefes**. O antigo preset Burst foi removido. Susanoomon [Supremacia], por exemplo, ficou com **Farm F3 25 / F1 15** e **DPS F1 24 / F2 11**. Consulte `AUDITORIA-BUILDS-V45.md`.

## v46 — auditoria de AoE
As skills em área dos 22 Rank U foram revisadas **individualmente**, sem assumir que F3 seja a skill de área. A versão distingue F2/F3/F4 conforme cada kit, mantém fallback single-target quando não há AoE confirmada e documenta divergências regionais como o caso do Alphamon Ouryuken [Supremacia]. O rótulo antigo “Burst” também foi removido dos papéis das skills para evitar confusão com a build DPS. Consulte `builds/AUDITORIA-AOE-V46.md`. A integração também foi corrigida para diferenciar Farm com AoE de Farm fallback, respeitar a ordem visual da distribuição e exibir o tipo de área confirmado nas skills.


## v47 — Farm/DPS auditado e integração final
A calculadora de builds mantém 22 Rank U e 44 presets, separando **Farm** de **DPS sustentado** sem inferir AoE pela posição F1/F2/F3/F4/F5. Presets sem custos suficientes não recebem níveis inventados; a interface exibe “Dados insuficientes para níveis exatos”. A v47 também adiciona o contador de verificados, corrige “Saiba o que upar”, usa cache `v=47`, prioriza fallbacks locais para Apollomon/Apollomon Whispered e evita recriar o catálogo de retratos ao mudar apenas o modo ou os pontos. Consulte `AUDITORIA-BUILDS-V47.md`.
