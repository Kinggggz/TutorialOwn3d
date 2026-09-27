# Site da guilda Ow3neD

Site estático preparado para GitHub Pages, com a Calculadora Rank U, a Calculadora de Selos, a Calculadora D-Unit e o Guia de Progressão de Digimon Masters Online.

## Calculadora D-Unit LADMO

- Disponível em `dunit/` e integrada à navegação global do site.
- Base consolidada com 144 grupos únicos após deduplicação: 26 provenientes de notas oficiais, 32 da base secundária e 86 exclusivos transcritos do vídeo LADMO.
- A base é parcial: o LADMO exige 260 grupos concluídos para Digimon Master. Portanto, ainda faltam ao menos 116 grupos no cadastro.
- 83 grupos possuem composição completa de Digimons; 61 ainda possuem composição parcial e são identificados na interface.
- Permite registrar até quatro condições por grupo, acompanhar o rank, filtrar por dificuldade/status e calcular rotas para rank ou atributos dentro da base cadastrada.
- Progresso salvo localmente no navegador, com importação e exportação em JSON.
- Incluído o grupo oficial **Eclipse solar** (Apollomon Whispered + Apollomon), adicionado em 17/09/2026: HP +500, AT +100, HT +100 e EXP +50%.
- Corrigido o bônus do grupo **Palmon [Woodmon]** no bloco transcrito do vídeo (EV +70 na 2ª condição), permitindo a deduplicação correta com a base secundária.

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
- A revisão mais recente foi feita em **27/09/2026**. A atualização oficial de **22/09/2026** foi revisada e não acrescentou novos selos.
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
