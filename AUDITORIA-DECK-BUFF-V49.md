# Auditoria da Calculadora de Deck Buff — v49

Revisão: 29/09/2026

## Escopo validado

- 43 decks cadastrados.
- 25 decks extraídos de notas oficiais do LADMO.
- 18 decks da base legada do Deck System.
- 126 nomes de Digimons e formas tratados separadamente.
- Decks homônimos mantêm identificadores distintos; as duas versões de **Terror do Abismo** não compartilham progresso por nome.
- Formas X, Supremacia, Despertado, Resistência, Jogress e linhas específicas permanecem separadas.

## Funções implementadas

- Recomendação por objetivo: equilíbrio, Skill, ataque básico, HP, atributo, crítico, velocidade e reset de recarga.
- Prioridade por maior efeito, menor número de Digimons faltando ou equilíbrio entre os dois.
- Coleção persistida no navegador.
- Abertura direta dos Digimons necessários ao clicar na rota.
- Comparação de dois ou três decks.
- Filtro opcional para mostrar somente decks confirmados em notas oficiais do LADMO.

## Testes executados

- Sintaxe JavaScript.
- Integridade dos 43 IDs e dos tipos de efeito.
- Renderização inicial da recomendação e do catálogo em DOM simulado.
- Rota de reset de recarga.
- Presença de todos os arquivos locais referenciados pelas páginas.
- Integração do menu Deck Buff em todas as páginas.

## Limite conhecido

A pontuação de recomendação é comparativa. Ela não substitui uma simulação completa de DPS, pois preço, equipamento, conteúdo, intervalo de ataque e duração de alguns efeitos ativados variam. Quando a nota oficial não informa a duração de um proc, o cadastro deixa essa duração explicitamente ausente.
