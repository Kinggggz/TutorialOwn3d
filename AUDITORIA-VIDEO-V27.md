# Auditoria do vídeo D-Unit — v27

> Documento histórico. A consolidação atual está em `dunit/AUDITORIA.md` e substitui as contagens desta revisão.

Data da revisão: 27/09/2026
Fonte principal: vídeo LADMO fornecido pelo proprietário do projeto (14:09, 1280×720).

## Método

- Leitura do vídeo completo, com amostragem temporal de todos os 849 segundos.
- Conferência do título do grupo e das quatro condições/bônus exibidos na interface do D-Unit.
- Comparação com a base v26 (notas oficiais + base adicional + transcrição anterior).
- Deduplicação por nome normalizado e assinatura dos quatro bônus.
- Entradas com leitura ambígua não foram forçadas para a base.

## Resultado

- Base v26 antes da ampliação do vídeo: 145 registros após a deduplicação em tempo de execução.
- Novos registros de alta confiança adicionados a partir do vídeo revisado: 90.
- Base v27 após a ampliação: 235 registros confirmados pelas fontes cadastradas.
- O requisito de ranking continua sendo 260 grupos concluídos para Digimon Master; o número 260 é requisito de rank, não deve ser interpretado automaticamente como quantidade total atual de grupos existentes.

## Correções e melhorias

- Fonte do vídeo atualizada para o arquivo comprimido acessível no Google Drive.
- Incluídos grupos que não estavam na v26, incluindo Butterfly, Bênção da Ilha dos Arquivos, Os Três Arcanjos, Os Três Anjos Caídos, Digimon Masters, Checkmate, Cavaleiros Reais, Digimon Tamers e vários grupos individuais de Digimon.
- Alguns grupos homônimos foram preservados quando o vídeo mostra conjuntos de bônus diferentes.
- O aviso de cobertura não afirma mais que a diferença entre a base e 260 é necessariamente o número de grupos “faltantes”; isso confundia requisito de rank com tamanho do catálogo.
- O D-Unit agora informa a quantidade de registros cadastrados e o requisito de 260 concluídos separadamente.

## Critério de segurança dos dados

Quando a gravação não permitiu confirmar com segurança os quatro bônus, o estado não foi adicionado nesta revisão. Isso evita transformar ruído de leitura/OCR em dado de gameplay.

## Correções posteriores

- `Bênção da Ilha dos Arquivos` foi removido como título de grupo: a inspeção quadro a quadro mostrou que esse texto era uma sobreposição enquanto **Renamon** estava selecionado.
- `Híbrido HH` foi corrigido para **Híbrido H**, conforme o título visível na lista do jogo.
