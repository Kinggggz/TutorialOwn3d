# Auditoria da Calculadora D-Unit LADMO

Revisão concluída em 27/09/2026.

## Cobertura atual

- 144 grupos únicos cadastrados.
- 83 grupos com composição completa de Digimons.
- 61 grupos com composição parcial.
- 26 grupos provenientes de notas oficiais, 32 da base secundária e 87 da gravação do LADMO.
- O rank Digimon Master exige 260 grupos concluídos. Portanto, ainda faltam ao menos 116 grupos no cadastro.

Essa diferença significa que a calculadora recomenda rotas somente dentro da base cadastrada. Ela não deve ser apresentada como catálogo integral do LADMO enquanto as composições e recompensas restantes não forem transcritas e confirmadas.

## Validações executadas

- IDs duplicados: nenhum.
- Registros exatamente duplicados: nenhum.
- Recompensas sem atributo, valor ou rótulo: nenhuma.
- Valores de SCD acima do intervalo esperado: nenhum.
- Referências locais quebradas nas páginas HTML: nenhuma.
- Sintaxe de `video-groups.js` e dos scripts embutidos: válida.
- Nomes iguais com composições diferentes foram preservados, incluindo `Palmon [Woodmon]`, `PicoDevimon [Soulmon]` e `Shoutmon`.

## Correções principais

- Contagem pública corrigida de 153 para 144 grupos únicos.
- O contador de rank passou a usar todos os grupos concluídos da base, sem misturar o conceito de fonte confirmada.
- A interface identifica a quantidade de composições completas e parciais.
- A rota prioriza grupos cuja composição de Digimons já está conhecida.
- `Cooldown` foi normalizado para `SCD`.
- Foram adicionados os objetivos `DS` e `SCD de Terra`.
- Nomes, composições e recompensas divergentes encontrados na gravação e nas notas oficiais foram corrigidos.

## Pendências comprovadas pela gravação

A gravação mostra grupos ainda ausentes da base, entre eles entradas de `MailBirdramon`, `Greymon (C)`, `Dorumon [DexDorugamon]`, `Gotsumon`, `Deputymon`, `Starmon`, `DemiMeramon`, `Kiwimon`, `Dobermon`, `Gizumon`, `PawnChessmonWhite`, `PawnChessmonBlack` e outros.

Eles não foram inseridos apenas pelo nome, pois uma rota confiável também precisa da composição completa, das quatro recompensas e das condições corretas. Cadastrar valores presumidos criaria resultados falsos.

## Revisão 27/09/2026

- A nota oficial de 17/09/2026 adicionou **Eclipse solar**, com Apollomon Whispered + Apollomon e bônus HP +500 / AT +100 / HT +100 / EXP +50%. O grupo foi incluído.
- O registro do vídeo para **Palmon [Woodmon]** tinha a segunda condição como EV +20, enquanto a base consolidada usa EV +70. A correção para EV +70 elimina uma duplicação artificial no processo de deduplicação.
- A nota oficial de 22/09/2026 foi verificada e não adicionou um novo grupo D-Unit.
