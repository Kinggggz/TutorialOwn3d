# Auditoria do Comparador de Deck Buff — v51

Revisão: 29/09/2026

## Escopo final

- Página reduzida a um comparador de decks.
- Removidos: recomendação de rota, coleção, catálogo, progresso e Digimons faltantes.
- Cada resultado mostra somente o nome do deck, os Digimons exigidos e os status concedidos.
- Comparação instantânea de dois, três ou quatro decks.
- Dois seletores principais e dois opcionais, sem fluxo de adicionar ou remover cartões.
- Destaque automático do melhor deck conforme o status escolhido.
- Empates são identificados.
- Decks repetidos são considerados apenas uma vez.

## Critério de “melhor”

- Para um status específico, vence o maior valor comparável daquele status.
- Efeitos permanentes recebem peso integral.
- Efeitos ativados são ponderados pela chance de ativação.
- “Desempenho geral” usa uma estimativa comparativa entre categorias e é identificado como estimativa na interface.

## Testes

- Sintaxe JavaScript validada.
- Renderização de Digimons e status validada.
- Comparação com quatro decks validada.
- Indicação de vencedor validada.
- Integridade estrutural do CSS validada.
- Base preservada com 43 decks e 126 Digimons/formas.
