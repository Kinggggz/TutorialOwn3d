# Site da guilda Ow3neD

Site estático preparado para GitHub Pages, com a Calculadora Rank U, a Calculadora de Selos e o Guia de Progressão de Digimon Masters Online.

## Base unificada da Calculadora de Selos

- **LADMO + DMO global:** 503 selos únicos em uma única calculadora.
- O cruzamento encontrou 195 correspondências diretas e 52 equivalências de tradução ou grafia. Esses registros foram acoplados sem duplicar o mesmo selo.
- Os dois selos confirmados no LADMO que não estavam na base global são **Happy Christmas** e **[Despertado] Gallantmon**.
- **Happy Christmas** utiliza sua progressão oficial especial de bônus: 20, 50, 100, 130, 160 e 200.
- Os 249 registros da base LADMO foram preservados. Quando existe divergência regional, o atributo e o bônus do LADMO têm prioridade; a referência global complementa limites especiais e dados ausentes.
- A única divergência de bônus encontrada foi **Sprout**: LADMO/DMO Wiki registra HT +100, enquanto a tabela global registra HT +200. A calculadora usa **HT +100** e identifica o registro como **Valor LADMO**.
- A busca também reconhece os nomes globais equivalentes, mesmo quando a tela exibe o nome utilizado no LADMO.
- O nome incorreto `13th Anniversary DE` dentro do atributo DS foi acoplado ao registro correto `13th Anniversary DS Seal`.
- A base global original possuía uma duplicação de HerculesKabuterimon; ela permanece removida. O selo Demon Lord of Greed Barbamon continua incluído a partir da atualização oficial de 26/08/2026.
- Custos de Tickets desconhecidos aparecem como `N/D`; a calculadora não inventa valores para completar esses dados.
- Registros ainda não confirmados especificamente no LADMO recebem a indicação **Referência global**.

## Publicar no GitHub Pages

1. Extraia o arquivo ZIP e envie **o conteúdo da pasta `Ow3neD-site`** para a raiz do repositório. O arquivo `index.html` precisa ficar visível diretamente na página inicial do repositório, e não dentro de outra pasta.
2. No GitHub, abra **Settings > Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch **main**, a pasta **/(root)** e clique em **Save**.

O endereço ficará disponível no formato `https://seu-usuario.github.io/nome-do-repositorio/`.
