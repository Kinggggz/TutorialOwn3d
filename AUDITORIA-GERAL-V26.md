# Auditoria geral — v26 — 27/09/2026

## Escopo técnico

Foram verificados todos os arquivos HTML, CSS e JavaScript do projeto, incluindo scripts inline, referências locais, IDs, imagens e links com `target="_blank"`.

Validações executadas:

- sintaxe de todos os arquivos JavaScript com `node --check`;
- sintaxe de todos os scripts JavaScript inline extraídos das páginas HTML;
- referências locais de `href` e `src`;
- IDs HTML duplicados;
- imagens sem atributo `alt`;
- links `target="_blank"` sem `rel="noopener"`;
- balanceamento de chaves dos arquivos CSS;
- integridade do ZIP final.

## Correções aplicadas

1. **D-Unit — Eclipse solar**
   - Incluído a partir da nota oficial LADMO de 17/09/2026 (idx=231).
   - Digimons: Apollomon Whispered + Apollomon.
   - Bônus: HP +500, AT +100, HT +100, EXP +50%.

2. **D-Unit — Palmon [Woodmon]**
   - Corrigida a segunda condição no bloco transcrito do vídeo de EV +20 para EV +70.
   - Isso faz a deduplicação reconhecer corretamente o grupo que já existe na base secundária.

3. **Calculadora Rank U — calendário após 24/09/2026**
   - A 2ª temporada oficial terminou em 24/09/2026.
   - A atualização de 22/09/2026 não anunciou o calendário da temporada seguinte.
   - O site agora marca ciclos posteriores como **PROJEÇÃO**, em vez de apresentá-los como período oficial confirmado.

4. **Selos — Barbamon**
   - Padronizado para o nome LADMO `Selo de Barbamon, Rei Demônio da Ganância`.
   - O nome global em inglês continua disponível como alias de busca.
   - A progressão de 1/25/50/75/90/100 e CT 50/100/200/300/400/500 já estava matematicamente correta no projeto.

## Pesquisa de atualização

Fontes principais revisadas:

- GAMEKING LADMO — atualização 17/09/2026 (idx=231);
- GAMEKING LADMO — atualização 22/09/2026 (idx=232);
- GAMEKING LADMO — Ranking Dungeon 30/07/2026 (idx=224);
- GAMEKING / DMO — dados do Selo de Barbamon (PatchNote idx=4191);
- GAMEKING / DMO — dados dos Selos de Passe de Temporada;
- DMO Wiki — D-Unit e requisito de 260 grupos para Digimon Master;
- Seal Codex informado pelo usuário, usado como referência já integrada ao projeto.

A atualização de 22/09/2026 adicionou a masmorra de Belphemon e eventos, mas não publicou novo selo, novo grupo D-Unit nem novo calendário da Ranking Dungeon.

## Vídeo do Drive

O vídeo já transcrito no projeto continua representado em `dunit/video-groups.js`. A tentativa de reabrir o arquivo original pelo conector do Drive encontrou um limite técnico: o vídeo possui aproximadamente 1,69 GB e excede o limite de 256 MB do conector. Por isso, nesta auditoria foram revisados os dados transcritos existentes e comparados com as fontes públicas disponíveis.
