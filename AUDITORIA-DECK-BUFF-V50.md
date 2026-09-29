# Auditoria da Calculadora de Deck Buff — v50

Revisão: 29/09/2026

## Repaginação

- Cabeçalho, filtros, resultados e catálogo ficaram mais compactos.
- Mensagens auxiliares foram encurtadas.
- Espaços mínimos artificiais foram reduzidos.
- Catálogo passou a usar três colunas em telas grandes e adaptação progressiva para tablet e celular.
- Cores, superfícies, bordas, tipografia e estados seguem a identidade visual das ferramentas Ow3neD.

## Comparação simplificada

- Removido o fluxo de adicionar e remover decks da comparação.
- Removidos os botões **Comparar** dos cartões.
- A aba agora possui dois seletores diretos: **Deck X** e **Deck Y**.
- Resultado atualizado imediatamente ao trocar qualquer seletor.
- Botão para inverter X e Y.
- Comparação limitada, de forma intencional, a dois decks.
- Resumo indica a rota com menos Digimons faltando.

## Verificações

- Sintaxe JavaScript validada.
- Comparação X × Y renderizada em DOM simulado.
- Ausência do fluxo antigo de comparação confirmada.
- Integridade das chaves CSS validada.
- Acesso aos Digimons da rota preservado.
- Base de 43 decks e 126 Digimons/formas preservada.
