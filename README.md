# Site da guilda Ow3neD

Site estático preparado para GitHub Pages, com a Calculadora Rank U, a Calculadora de Selos e o Guia de Progressão de Digimon Masters Online.

## Base LADMO da Calculadora de Selos

- **513 selos calculáveis** em uma única página, sem seletor de servidor.
- A base pública mais ampla foi acoplada aos registros e às notas oficiais do LADMO. Nomes equivalentes em português e inglês são tratados como o mesmo selo.
- Foram adicionados 10 registros ausentes com dados suficientes para cálculo: quatro selos **New LADMO**, três **Selos de Natal**, **Virada da Sorte AT**, **Tamer Matt** e **Férias Digitais AT**.
- Foram corrigidos os nomes dos selos de 12, 13, 14, 15 e 16 anos, além do atributo incorreto do registro `13th Anniversary DE` que aparecia dentro de DS.
- **Selo do Broto** foi corrigido de HT +100 para HT +200 conforme as notas posteriores do LADMO.
- Os bônus intermediários oficiais de Patamon–T.K., Gatomon–Hikari e Princesa Mimi foram cadastrados, evitando que a calculadora aplicasse uma progressão genérica incorreta.
- **Happy Christmas** mantém sua progressão especial: 20, 50, 100, 130, 160 e 200.
- A duplicação de HerculesKabuterimon permanece removida. **Selo de Barbamon, Rei Demônio da Ganância** está incluído com limite de 100 e progressão própria.
- A revisão mais recente foi feita em **23/09/2026**. A atualização desse dia não acrescentou novos selos.
- Nove itens cuja existência está confirmada — Virada da Sorte HT e os oito selos do 4º Aniversário LADMO — permanecem fora dos cálculos porque as notas públicas consultadas não informam os bônus por rank. Eles estão listados em `assets/seals-ladmo-updates.js` para inclusão assim que os valores forem confirmados.
- Custos de Tickets desconhecidos aparecem como `N/D`; a calculadora não inventa esses valores.

## Publicar no GitHub Pages

1. Extraia o arquivo ZIP e envie **o conteúdo da pasta `Ow3neD-site`** para a raiz do repositório. O arquivo `index.html` precisa ficar visível diretamente na página inicial do repositório, e não dentro de outra pasta.
2. No GitHub, abra **Settings > Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch **main**, a pasta **/(root)** e clique em **Save**.

O endereço ficará disponível no formato `https://seu-usuario.github.io/nome-do-repositorio/`.
