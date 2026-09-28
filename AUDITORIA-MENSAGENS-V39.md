# Auditoria de mensagens — v39

Verificação focada em mensagens vazias, estados sem conteúdo e resíduos de interface.

## Correções
- Removido `routeEmpty`, placeholder vazio e sem uso da Calculadora de Selos.
- Removidas as referências JavaScript associadas a esse placeholder.
- Corrigidos caracteres de controle ocultos na regra de detecção de `X7` do D-Unit.

## Estados vazios verificados
Os demais elementos inicialmente vazios são intencionais e ficam ocultos ou são preenchidos dinamicamente: alertas de erro, toast, lista de grupos, rota, ranking e conteúdo do modal de dificuldade.

Não foram encontrados cards/sections visíveis sem conteúdo estático.
