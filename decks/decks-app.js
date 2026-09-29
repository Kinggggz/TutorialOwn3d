(() => {
  'use strict';
  const DB = window.DECK_BUFF_DATA;
  if (!DB?.decks?.length) return;
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const objectiveNames = {overall:'desempenho geral',...DB.effectLabels};
  const overallWeights = {attackSpeed:3.4,skillDamage:.045,normalDamage:.11,critDamage:.018,hp:.8,attributeDamage:3.7,finalDamage:5,attackAmp:4.5,attack:.07,hit:.35,cooldownReset:.5};
  const effectNotes = {
    attributeDamage:{label:'Exige vantagem',title:'Dano de Atributo',body:'Aumenta a parcela de atributo quando existe vantagem válida contra o inimigo. Em alvo neutro, pode não oferecer ganho. Por exemplo: Vacina contra Vírus ou Luz contra Escuridão, quando essa relação for reconhecida pelo jogo.'},
    attack:{label:'Entender AT',title:'Ataque',body:'Aumenta a parcela elegível do AT do Digimon. Não equivale ao mesmo percentual de dano final, pois selos, acessórios e outros valores fixos não são necessariamente multiplicados novamente.'},
    attackAmp:{label:'Entender',title:'Amplificação de Ataque',body:'Amplifica a categoria de Ataque. É diferente de Dano Final e o ganho observado depende de quanto do dano vem do AT.'},
    skillDamage:{label:'Só skills',title:'Dano de Skill',body:'Aumenta o dano das habilidades, não dos ataques básicos. Bônus da mesma categoria são somados antes de interagir com outras categorias.'},
    normalDamage:{label:'Só ataque básico',title:'Dano de Ataque Básico',body:'Afeta os ataques normais. Não aumenta diretamente o dano base das skills.'},
    critDamage:{label:'Exige crítico',title:'Dano Crítico',body:'Só melhora golpes que resultam em crítico. Se a taxa de crítico não for suficiente para o conteúdo, parte do potencial não será aproveitada.'},
    attackSpeed:{label:'Frequência',title:'Velocidade de Ataque',body:'Aumenta a frequência dos ataques; não aumenta o número de dano de cada golpe. O ganho real pode variar por animação e limites de velocidade.'},
    cooldownReset:{label:'Por chance',title:'Reset de Recarga',body:'É um efeito condicionado à chance de ativação. Pode ser muito forte quando ativa, mas não entrega resultado constante em todas as lutas.'},
    hit:{label:'Não dá dano direto',title:'Precisão',body:'Aumenta a capacidade de acertar o alvo. Não adiciona dano quando você já possui precisão suficiente para não errar.'},
    finalDamage:{label:'Aplicação ampla',title:'Dano Final',body:'É uma categoria de aplicação mais ampla que AT ou Dano de Atributo, mas o resultado exibido ainda depende das outras etapas do cálculo do jogo.'}
  };

  function deckLabel(deck){return `${deck.name}${deck.variant?` — ${deck.variant}`:''}`}
  function procFactor(effect){
    if(effect.trigger==='passive') return 1;
    const chance=(effect.chance||0)/100;
    const duration=effect.duration?Math.min(effect.duration/10,1):.35;
    return Math.max(.05,chance*duration);
  }
  function score(deck, objective){
    if(objective==='overall') return deck.effects.reduce((total,effect)=>total+(overallWeights[effect.type]||0)*effect.value*procFactor(effect),0);
    return deck.effects.filter((effect)=>effect.type===objective).reduce((total,effect)=>total+effect.value*procFactor(effect),0);
  }
  function formatEffect(effect){
    const label=DB.effectLabels[effect.type]||effect.type;
    if(effect.type==='cooldownReset') return `${effect.chance}% ao atacar: resetar recarga`;
    const value=`${label} +${effect.value}%`;
    if(effect.trigger==='passive') return value;
    const trigger=effect.trigger==='skillUse'?'ao usar Skill':'ao atacar';
    return `${effect.chance}% ${trigger}: ${value}${effect.duration?` por ${effect.duration}s`:''}`;
  }
  function noteButton(deck,effect){
    const note=effectNotes[effect.type];
    return note?`<button class="effect-note" type="button" data-effect-note="${effect.type}" data-deck-id="${deck.id}">${note.label}</button>`:'';
  }
  function normalizeSearch(value){
    return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  }
  function deckSearchText(deck){
    const effects=deck.effects.flatMap((effect)=>[DB.effectLabels[effect.type]||effect.type,formatEffect(effect)]);
    return normalizeSearch([deckLabel(deck),...deck.digimons,...effects].join(' '));
  }
  const deckSearchIndex=new Map(DB.decks.map((deck)=>[deck.id,deckSearchText(deck)]));
  function deckMatches(deck,query){
    const normalized=normalizeSearch(query);
    if(!normalized)return true;
    return normalized.split(/\s+/).every((term)=>deckSearchIndex.get(deck.id).includes(term));
  }
  function optionHtml(deck){return `<option value="${deck.id}">${deckLabel(deck)}</option>`}
  function refreshDeckSelect(selectId,query='',preserveValue=true){
    const select=$(`#${selectId}`);
    if(!select)return [];
    const optional=selectId==='deck3'||selectId==='deck4';
    const current=select.value;
    const matches=DB.decks.filter((deck)=>deckMatches(deck,query));
    const currentDeck=DB.decks.find((deck)=>deck.id===current);
    const currentOutsideFilter=currentDeck&&!matches.some((deck)=>deck.id===current);
    let html=optional?'<option value="">Nenhum</option>':'';
    if(currentOutsideFilter)html+=`<optgroup label="Selecionado"><option value="${currentDeck.id}">${deckLabel(currentDeck)}</option></optgroup>`;
    html+=matches.length?`<optgroup label="Resultados (${matches.length})">${matches.map(optionHtml).join('')}</optgroup>`:'<optgroup label="Resultados"><option value="__noresult" disabled>Nenhum deck encontrado</option></optgroup>' ;
    select.innerHTML=html;
    if(preserveValue&&current&&(currentDeck||optional))select.value=current;
    else if(optional)select.value='';
    else if(matches.length)select.value=matches[0].id;
    const count=document.querySelector(`[data-search-count="${selectId}"]`);
    if(count)count.textContent=query?`${matches.length} resultado${matches.length===1?'':'s'}`:'';
    return matches;
  }
  function populateSelectors(){
    ['deck1','deck2','deck3','deck4'].forEach((id)=>refreshDeckSelect(id,'',false));
    $('#deck1').value=DB.decks.at(-2).id;
    $('#deck2').value=DB.decks.at(-1).id;
    $('#deck3').value=''; $('#deck4').value='';
  }
  function clearDeckSearch(selectId){
    const input=document.querySelector(`[data-deck-search="${selectId}"]`);
    if(input)input.value='';
    refreshDeckSelect(selectId,'',true);
  }
  function bindDeckSearch(){
    $$('[data-deck-search]').forEach((input)=>{
      const selectId=input.dataset.deckSearch;
      const select=$(`#${selectId}`);
      input.addEventListener('input',()=>refreshDeckSelect(selectId,input.value,true));
      input.addEventListener('keydown',(event)=>{
        if(event.key==='Escape'){event.preventDefault();input.value='';refreshDeckSelect(selectId,'',true);return;}
        if(event.key!=='Enter')return;
        const matches=DB.decks.filter((deck)=>deckMatches(deck,input.value));
        if(!matches.length)return;
        event.preventDefault();
        select.value=matches[0].id;
        input.value='';
        refreshDeckSelect(selectId,'',true);
        render();
      });
      select.addEventListener('change',()=>{if(input.value)clearDeckSearch(selectId);render();});
    });
  }
  function selectedDecks(){
    const seen=new Set();
    return $$('[data-deck-select]').map((select)=>DB.decks.find((deck)=>deck.id===select.value)).filter((deck)=>{
      if(!deck||seen.has(deck.id)) return false;
      seen.add(deck.id);
      return true;
    });
  }
  function renderCard(deck,isBest,objective){
    return `<article class="deck-card ${isBest?'best':''}">${isBest?`<div class="best-badge">MELHOR EM ${objectiveNames[objective].toUpperCase()}</div>`:''}<h3>${deck.name}</h3>${deck.variant?`<p class="variant">${deck.variant}</p>`:''}<section><h4>Digimons</h4><ul class="digimon-list">${deck.digimons.map((name)=>`<li>${name}</li>`).join('')}</ul></section><section><h4>Status</h4><div class="status-list">${deck.effects.map((effect)=>`<div class="status-item ${effect.trigger==='passive'?'':'activated'}"><span>${formatEffect(effect)}</span>${noteButton(deck,effect)}</div>`).join('')}</div></section></article>`;
  }
  function relevantEffects(deck,objective){
    const effects=objective==='overall'?deck.effects:deck.effects.filter((effect)=>effect.type===objective);
    return effects.length?effects.map(formatEffect).join(' • '):'Não possui este status';
  }
  function openDialog(title,html){
    $('#explanationTitle').textContent=title;
    $('#explanationContent').innerHTML=html;
    const dialog=$('#explanationDialog');
    if(typeof dialog.showModal==='function') dialog.showModal(); else dialog.setAttribute('open','');
  }
  function closeDialog(dialog){
    if(typeof dialog.close==='function') dialog.close(); else dialog.removeAttribute('open');
  }
  function explainEffect(type,deckId){
    const note=effectNotes[type],deck=DB.decks.find((item)=>item.id===deckId);
    if(!note||!deck)return;
    const effects=deck.effects.filter((effect)=>effect.type===type).map(formatEffect).join(' • ');
    const warning=type==='attributeDamage'?'<div class="warning-note"><strong>Importante:</strong> este bônus é bom principalmente quando seu Digimon possui vantagem de atributo. Contra alvo neutro, não deve ser tratado como dano garantido.</div>':'';
    openDialog(note.title,`<p><strong>${deckLabel(deck)}</strong></p><p>${effects}</p><p>${note.body}</p>${warning}`);
  }
  function explainComparison(){
    const decks=selectedDecks(),objective=$('#objective').value;
    const values=decks.map((deck)=>({deck,value:score(deck,objective)}));
    const max=Math.max(...values.map((item)=>item.value),0);
    const winners=max>0?values.filter((item)=>Math.abs(item.value-max)<.0001):[];
    const rows=values.map(({deck,value})=>`<li class="explain-row"><strong>${deckLabel(deck)}</strong><span>${relevantEffects(deck,objective)}</span><small>Pontuação comparativa: ${value.toFixed(2)}</small></li>`).join('');
    const winnerText=winners.length?`O destaque é <strong>${winners.map(({deck})=>deckLabel(deck)).join(' e ')}</strong>, pois obteve a maior pontuação em ${objectiveNames[objective]}.`:`Nenhum dos decks selecionados possui ${objectiveNames[objective]}.`;
    const attributeWarning=decks.some((deck)=>deck.effects.some((effect)=>effect.type==='attributeDamage'))?'<div class="warning-note"><strong>Atenção ao atributo:</strong> Dano de Atributo depende de vantagem contra o inimigo. Um deck pode vencer na estimativa geral e ainda perder em um alvo neutro.</div>':'';
    const method=objective==='overall'?'<p class="dialog-muted">Desempenho geral é uma estimativa que pondera categorias diferentes. Para uma conclusão mais objetiva, selecione um status específico em “Melhor em”.</p>':'<p class="dialog-muted">Efeitos permanentes recebem peso integral. Efeitos ativados são ponderados pela chance e duração conhecida.</p>';
    openDialog('Por que este deck é melhor?',`<p>${winnerText}</p><ul class="explain-list">${rows}</ul>${attributeWarning}${method}`);
  }
  function render(){
    const decks=selectedDecks();
    const objective=$('#objective').value;
    const values=decks.map((deck)=>({deck,value:score(deck,objective)}));
    const max=Math.max(...values.map((item)=>item.value),0);
    const winners=max>0?values.filter((item)=>Math.abs(item.value-max)<.0001).map((item)=>item.deck):[];
    const duplicateCount=$$('[data-deck-select]').filter((select)=>select.value).length-decks.length;
    if(decks.length<2){$('#verdict').textContent='Selecione pelo menos dois decks.'}
    else if(!winners.length){$('#verdict').textContent=`Nenhum deck selecionado oferece ${objectiveNames[objective]}.`}
    else {$('#verdict').innerHTML=`<span>Melhor em ${objectiveNames[objective]}</span><strong>${winners.map(deckLabel).join(' e ')}</strong>${winners.length>1?'<small>Empate</small>':''}<button class="why-button" type="button" data-explain-comparison>Por que?</button>`}
    if(duplicateCount>0) $('#verdict').insertAdjacentHTML('beforeend','<small>Deck repetido foi considerado uma vez.</small>');
    $('#comparison').style.setProperty('--deck-total',Math.max(2,decks.length));
    $('#comparison').innerHTML=decks.map((deck)=>renderCard(deck,winners.some((winner)=>winner.id===deck.id),objective)).join('');
  }

  populateSelectors();
  $('#deckCount').textContent=DB.decks.length;
  bindDeckSearch();
  $('#objective').addEventListener('change',render);
  document.addEventListener('click',(event)=>{
    const note=event.target.closest('[data-effect-note]');
    if(note) explainEffect(note.dataset.effectNote,note.dataset.deckId);
    if(event.target.closest('[data-explain-comparison]')) explainComparison();
  });
  $('#explanationClose').addEventListener('click',()=>closeDialog($('#explanationDialog')));
  $('#explanationDialog').addEventListener('click',(event)=>{if(event.target===$('#explanationDialog'))closeDialog(event.target)});
  render();
  window.DECK_COMPARE_TEST={score,formatEffect,selectedDecks,relevantEffects,explainComparison,explainEffect,normalizeSearch,deckMatches,refreshDeckSelect};
})();
