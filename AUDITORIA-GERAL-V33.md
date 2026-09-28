# Auditoria geral — Ow3neD v33 — 28/09/2026

## Principais mudanças

1. Calculadora D-Unit refatorada em dados, otimizador, aplicação e CSS independentes.
2. Algoritmo heurístico substituído por otimizador exato de programação dinâmica.
3. Duplicação `codex-133`/`codex-134` consolidada com migração automática de progresso antigo.
4. Renderização progressiva da lista D-Unit para reduzir DOM e custo em celulares.
5. Importação de JSON endurecida com validação de esquema e sanitização de grupos manuais.
6. Acessibilidade do D-Unit revisada e Guia acrescido de alternativa textual para leitores de tela.
7. Assets compartilhados receberam nomes estáveis e cache versionado.
8. Logo otimizado para 128×128.
9. Open Graph básico incluído nas cinco páginas.

## Validações finais executadas

- Referências locais (`href`, `src`) nas cinco páginas: **0 quebradas**.
- IDs HTML duplicados: **0**.
- Sintaxe de todos os JavaScripts e scripts inline: **válida**.
- Integridade dos 278 grupos D-Unit: **278 IDs únicos; todos com 4 requisitos e 4 recompensas; nenhuma duplicata exata remanescente**.
- Otimizador comparado com busca exaustiva em **400 cenários aleatórios** (100 por estratégia): **mesmo custo ótimo em todos**.
- Migração v2, carregamento progressivo, importação válida/inválida e renderização desktop/mobile: **testados sem erro de página**.
