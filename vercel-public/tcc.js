const recall=document.querySelector('#recallText');
const state=document.querySelector('#saveState');
const storageKey='isadora-tcc-recall-v1';
if(recall){recall.value=localStorage.getItem(storageKey)||'';recall.addEventListener('input',()=>{localStorage.setItem(storageKey,recall.value);state.textContent='salvo neste navegador ✓';clearTimeout(window.tccSaveTimer);window.tccSaveTimer=setTimeout(()=>state.textContent='salvamento local automático',1400)})}
document.querySelectorAll('[data-recall]').forEach(button=>button.addEventListener('click',()=>{const prompt=button.dataset.recall;recall.value+=(recall.value?'\n\n':'')+prompt+'\n';localStorage.setItem(storageKey,recall.value);recall.focus();recall.scrollIntoView({behavior:'smooth',block:'center'})}));
