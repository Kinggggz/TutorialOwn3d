# Auditoria da Calculadora D-Unit LADMO — v48

Revisão concluída em 28/09/2026.

## Base consolidada

- 278 grupos únicos cadastrados após deduplicação.
- 100 composições nominais identificadas.
- 178 grupos mantêm a quantidade de membros e os requisitos/recompensas, mas ainda não exibem nomes individuais sem confirmação.
- Todos os grupos possuem quatro recompensas e quatro etapas cadastradas; **Eclipse solar** mantém as quatro etapas como requisito não publicado porque a nota oficial não informa esses requisitos.
- A entrada `codex-134` foi removida por ser duplicata exata de `codex-133` em nome, quantidade, quatro requisitos e quatro recompensas. O ID antigo permanece em `legacyIds`, de modo que progresso salvo em qualquer uma das duas entradas migra para `codex-133` usando o maior estágio marcado.

## Otimizador de rota

A antiga ordenação heurística foi substituída por programação dinâmica 0/1 exata.

- Ranking: cada grupo completo contribui 1 para o próximo rank.
- Status: cada grupo contribui apenas os bônus ainda não obtidos do status selecionado.
- `Menos condições`: minimiza exatamente a soma de condições restantes e usa dificuldade como desempate.
- `Mais acessível`: minimiza exatamente o custo de dificuldade e usa condições como desempate.
- `Menos grupos`: minimiza exatamente a quantidade de grupos necessária para atingir o valor escolhido.
- `Melhor custo-benefício`: minimiza um índice explícito de trabalho (condições × 3 + dificuldade × 2), com desempates determinísticos.
- Composições já identificadas são preferidas apenas quando as métricas principais empatam; grupos sem nomes confirmados não são descartados.
- O otimizador foi confrontado com busca exaustiva em cenários aleatórios menores e retornou a mesma solução ótima em todos os testes executados.

## Engenharia e desempenho

- O D-Unit deixou de depender de várias sobrescritas sucessivas de `render`, `renderGroups` e `score`.
- Estrutura atual:
  - `dunit-data.js` — base consolidada.
  - `dunit-optimizer.js` — otimizador puro e testável.
  - `dunit-app.js` — interface, armazenamento, importação/exportação e renderização.
  - `dunit.css` — estilos da ferramenta.
- A lista renderiza 60 grupos por vez no desktop e 30 no celular, com carregamento progressivo.
- Rotas com mais de 12 grupos ficam visualmente recolhidas em “Ver rota completa”.
- O estado local passou a ser salvo em formato compacto (`owned-dunit-ladmo-v3`), mas a migração do formato v2 continua automática.

## Segurança e validação

- Importações JSON nunca substituem a base oficial; importam somente progresso e grupos manuais.
- Grupos manuais importados são validados por esquema: nome, IDs, quantidade de Digimons, quatro bônus, tipos de status, valores inteiros, dificuldade e limites de tamanho.
- IDs manuais duplicados são regenerados.
- URLs de grupos importados não são aceitas; somente fontes incorporadas na base consolidada geram links.
- Conteúdo digitado/importado continua escapado antes de ser inserido no HTML.

## Acessibilidade

- Labels explícitos foram associados aos filtros e campos do planejador.
- Botões de condição informam grupo, requisito e estado por `aria-label`/`aria-pressed`.
- Progresso de ranking usa `role="progressbar"` com valor acessível.
- Rota, contagem da lista e notificações usam regiões `aria-live` quando apropriado.
- O Guia de Progressão ganhou uma transcrição textual invisível visualmente para leitores de tela, sem alterar a apresentação das 14 páginas.

## Manutenção global

- `ow3ned-ui-v24.css` e `ow3ned-nav-v24.js` foram renomeados para `ow3ned-ui.css` e `ow3ned-nav.js`; as páginas usam `?v=33` para controle de cache.
- `logo.png` foi otimizado de 512×512 para 128×128, mantendo resolução suficiente para o maior uso atual e reduzindo o arquivo de ~246 KB para ~28 KB.
- Metadados Open Graph básicos foram adicionados às páginas principais.

## v38 — análise de dificuldade com divulgação progressiva
- O bloco de evoluções só é exibido quando há formas especiais identificáveis em uma composição confirmada.
- Mensagens de composição pendente deixaram de ser exibidas ao usuário.
- A explicação de dificuldade passou a separar quantidade de membros, transcendência, nível total e esforço estrutural.
- A orientação de foco informa a próxima condição do grupo e continua usando a rota otimizada.
- Composições unitárias de 13 grupos foram consolidadas pelo próprio título do grupo (1 membro) e Meicoomon recuperou a composição já revisada anteriormente.

## v48 — conferência cruzada com LADMO Seal Codex e GameKing

Revisão cruzada realizada em 28/09/2026 com a base pública do LADMO Seal Codex (`dUnitAudit.ts`) e notas oficiais do LADMO/GameKing quando disponíveis.

- A base do codex trabalha com 278 conjuntos-fonte e quatro condições por conjunto. O projeto Ow3neD mantém 278 grupos após remover a duplicata exata `dunit-134`/`dunit-133` e incluir o grupo oficial mais recente **Eclipse solar**, ainda ausente do arquivo público do codex consultado.
- **Ressurreição**: corrigido `BL +30` para **`BL +50`**. O codex público ainda registra +30, mas a nota oficial da GameKing publica +50; a fonte oficial prevalece. A composição também foi preenchida: ZeedMillenniumon [Despertado], Siriusmon e Diarbbitmon.
- **Batalha Suprema!**: composição oficial preenchida com ZeedMillenniumon [Despertado], WarGreymon [Despertado] e MetalGarurumon [Despertado]. Os quatro bônus já estavam corretos.
- **Digimon Masters**: o segundo bônus foi corrigido de `Base SCD +5%` para **`Dano de atributo básico +5%`**. São categorias diferentes no arquivo auditado do codex e agora permanecem separadas na calculadora.
- A interface agora separa três objetivos que antes podiam parecer equivalentes: **SCD**, **SCD de atributo Base** e **Dano de atributo básico**. O otimizador deixa de ignorar bônus de SCD genérico quando o usuário escolhe SCD e deixa de atribuir Dano de atributo básico a SCD Base.
- **O Último Reino, Sol Radiante** permanece com `AT +50 / SCD +1% / SCD de atributo Base +1% / Fogo SCD +2%`, seguindo a nota oficial quando a ordem/rotulagem diverge da estrutura interna do codex.
- **Eclipse solar** permanece com `HP +500 / AT +100 / HT +100 / EXP +50%`, confirmado pela nota oficial de 17/09/2026. Como os quatro requisitos de ativação/conquista não foram publicados nessa nota, continuam explicitamente não informados em vez de serem estimados.
- Os limiares de ranking permanecem: Bronze 1, Prata 30, Ouro 60, Platina 100, Diamante 140, Mestre 190 e Digimon Master 260.

Regra de precedência adotada: **nota oficial atual do LADMO/GameKing > valor confirmado visualmente no LADMO Seal Codex > dado pendente**. Nenhum valor pendente é completado por suposição.
- **Seres do Mal**: o terceiro bônus foi normalizado como **`Vírus SCD +1%`** seguindo a leitura confirmada do LADMO Seal Codex (`Ataque habilidade Virus +1%`). A nota oficial em português usa a formulação mais genérica “Poder de Ataque de Habilidade +1%”; para a categoria do otimizador, a captura auditada do codex fornece o qualificador Vírus que a tradução oficial omite.

- Três grupos unitários que ainda usavam o placeholder “Composição exibida no vídeo” foram normalizados pelo próprio nome do grupo: **Ranamon**, **Fairimon** e **Petaldramon**. O contador de composições agora também trata esse placeholder como pendente, evitando inflar o total de composições identificadas.
