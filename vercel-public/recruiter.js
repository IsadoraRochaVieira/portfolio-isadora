const recruiterStylesheet=document.querySelector('link[href="/recruiter.css"]');if(recruiterStylesheet)document.head.appendChild(recruiterStylesheet);
const recruiterFix=document.querySelector('link[href="/recruiter-fix.css"]');if(recruiterFix)document.head.appendChild(recruiterFix);
window.addEventListener('load',()=>{
  const imgs=[...document.querySelectorAll('.card img')];
  imgs.forEach((img,i)=>{img.width=720;img.height=420;img.decoding='async';if(i<3)img.fetchPriority='high';else img.loading='lazy'});
  document.querySelectorAll('.card').forEach((card,i)=>{
    card.removeAttribute('role');card.removeAttribute('tabindex');card.removeAttribute('aria-label');
    if(!card.querySelector('.open-case')){const button=document.createElement('button');button.className='open-case';button.type='button';button.textContent='VER CASE COMPLETO ↗';button.setAttribute('aria-label',`Abrir case ${card.querySelector('h3')?.textContent||i+1}`);card.appendChild(button)}
  });
  const careerPreview=document.querySelector('.career-preview');
  if(careerPreview){careerPreview.querySelectorAll('a').forEach(a=>{if(a.href.includes('blog'))a.textContent='LER 120 POSTS TÉCNICOS ↗'});careerPreview.insertAdjacentHTML('beforeend','<a class="career-link" href="/curriculo-isadora-rocha-vieira.pdf" target="_blank" rel="noopener">ABRIR CURRÍCULO PDF ↗</a>')}
  document.querySelectorAll('a[target="_blank"]').forEach(a=>{const rel=new Set((a.rel||'').split(/\s+/).filter(Boolean));rel.add('noopener');rel.add('noreferrer');a.rel=[...rel].join(' ')});
});
