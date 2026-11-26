
const pt={navServices:'O que fazemos',navProcess:'Como trabalhamos',navAbout:'Sobre',navContact:'Contato',eyebrow:'Estúdio independente de produtos digitais',headline:'Juntos, construímos coisas grandiosas.',subhead:'Suas ideias, nossa experiência. Juntos, criamos experiências digitais que impulsionam seu negócio.',cta:'Vamos trabalhar juntos',capabilities:'O que fazemos',servicesIntro:'Do primeiro lançamento à próxima melhoria do seu produto, trabalhamos ao lado da sua equipe para fazer acontecer.',service1:'Lançar e crescer',desc1:'Landing pages, páginas de produto e microsites.',service2:'Construir e evoluir',desc2:'Aplicações web, desenvolvimento de funcionalidades e comércio eletrônico.',service3:'Aprender e melhorar',desc3:'Testes A/B e testes de funcionalidades.',brandsTitle:'Experiência com marcas',brandsDesc:'Marcas com as quais Matheus trabalhou como freelancer ou funcionário em tempo integral.',processIntro:'Um processo flexível que se adapta ao seu projeto, à sua equipe e aos seus objetivos.',step1:'Entender',step1d:'Conhecemos seus objetivos e usuários.',step2:'Dar forma',step2d:'Definimos juntos uma direção prática.',step3:'Construir',step3d:'Projetamos, desenvolvemos e revisamos juntos.',step4:'Aprimorar',step4d:'Aprendemos com o feedback e aprimoramos continuamente.',founderLabel:'Fundador · Pixelias',founderTitle:'Conheça Matheus Moreira',bio:'Matheus Moreira é engenheiro de software sênior e fundador da Pixelias, com mais de uma década de experiência em desenvolvimento web. Trabalhou na DAZN e na Hotmart em produtos que vão de sistemas de gestão de conteúdo a plataformas de vídeo, combinando experiência prática em engenharia e visão de produto.',getInTouch:'Entre em contato',contactTitle:'Vamos construir juntos.',contactDesc:'Tem uma ideia ou um projeto em andamento? Conte para nós o que está desenvolvendo e como podemos ajudar.',demoNote:'Protótipo: este formulário demonstra a experiência e não envia mensagens.',name:'Nome',company:'Empresa (opcional)',email:'E-mail',message:'Detalhes do projeto',send:'Enviar mensagem',descriptor:'Produtos web, experiências de lançamento e experimentação para fundadores e equipes consolidadas.',messageHint:'O que você está criando ou aprimorando e em que precisa de apoio?',requiredNote:'* Campos obrigatórios'};const en={};document.querySelectorAll('[data-i]').forEach(el=>{en[el.dataset.i]=el.textContent});let lang='en';document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;document.documentElement.lang=lang;document.title=lang==='pt'?'Pixelias — Juntos, construímos coisas grandiosas':'Pixelias — Great things are built together';document.querySelector('meta[name=description]').content=lang==='pt'?'Pixelias é um estúdio de produtos que ajuda equipes a projetar, desenvolver e aprimorar experiências digitais.':'Pixelias is a product studio that helps teams design, build and improve digital experiences.';document.querySelectorAll('[data-i]').forEach(el=>el.textContent=(lang==='pt'?pt:en)[el.dataset.i]);document.querySelectorAll('[data-lang]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));document.querySelector('nav').setAttribute('aria-label',lang==='pt'?'Navegação principal':'Main navigation');document.querySelector('.lang').setAttribute('aria-label',lang==='pt'?'Idioma':'Language');document.querySelector('.portrait img').alt=lang==='pt'?'Matheus Moreira, fundador da Pixelias':'Matheus Moreira, founder of Pixelias'}));document.body.classList.remove('no-js');if('IntersectionObserver'in window){let observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e))}else document.querySelectorAll('.reveal').forEach(e=>e.classList.add('visible'));
const form = document.querySelector('#contactForm');
const fields = [...form.querySelectorAll('[required]')];
const validationText = {
 en: {name:'Please enter your name.',email:'Please enter a valid email address.',message:'Please tell us about your project.'},
 pt: {name:'Informe seu nome.',email:'Informe um endereço de e-mail válido.',message:'Conte um pouco sobre seu projeto.'}
};
function showFieldError(field, show = true) {
 const invalid = show && !field.validity.valid;
 field.setAttribute('aria-invalid', String(invalid));
 document.getElementById(field.name + '-error').textContent = invalid ? validationText[lang][field.name] : '';
 return invalid;
}
// With JavaScript disabled, native validation and the original POST remain intact.
form.noValidate = true;
fields.forEach(field => {
 field.addEventListener('blur', () => { if (field.value || field.getAttribute('aria-invalid') === 'true') showFieldError(field); });
 field.addEventListener('input', () => { if (field.getAttribute('aria-invalid') === 'true') showFieldError(field); });
});
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
 fields.forEach(field => { if (field.getAttribute('aria-invalid') === 'true') showFieldError(field); });
}));
form.addEventListener('submit', event => {
 const invalid = fields.filter(field => showFieldError(field));
 if (invalid.length) { event.preventDefault(); invalid[0].focus(); }
});

// Hero choreography: a common clock keeps moving structures and their connections together.
(() => {
 if (!('IntersectionObserver' in window)) return;
 const art = document.querySelector('.art');
 const svg = art.querySelector('.hero-illustration');
 const warm = svg.querySelector('.hero-system-warm'), cool = svg.querySelector('.hero-system-cool');
 const paths = [...svg.querySelectorAll('.hero-connections path')];
 const pulses = [...svg.querySelectorAll('.hero-energy circle')];
 const lowerNode=svg.querySelector('.node-lower-curve'), upperNode=svg.querySelector('.node-upper-curve');
 const anchorPlanes = ['.warm-one','.warm-three','.cool-two','.cool-three'].map(selector => svg.querySelector(selector));
 const lightWarm = svg.querySelector('.hero-light-warm'), lightCool = svg.querySelector('.hero-light-cool');
 const reduce = matchMedia('(prefers-reduced-motion: reduce)');
 const fine = matchMedia('(hover: hover) and (pointer: fine)');
 const animated = [art, ...document.querySelectorAll('#services,#process,#about,#contact')];
 const observer = new IntersectionObserver(entries => entries.forEach(entry => {
   entry.target.classList.toggle('motion-offscreen', !entry.isIntersecting);
   if (entry.target === art) { inView = entry.isIntersecting; sync(); }
 }), {rootMargin:'100px'});
 let inView = false, frame = 0, last = 0, elapsed = 0, pointerX = 0, pointerY = 0, targetX = 0, targetY = 0;
 let previousWarm = {x:0,y:0}, previousCool = {x:0,y:0};
 function bezier(a,b,c,d,t) { const u=1-t; return u*u*u*a+3*u*u*t*b+3*u*t*t*c+t*t*t*d; }
 function pointOn(p,t) { return {x:bezier(p[0],p[2],p[4],p[6],t),y:bezier(p[1],p[3],p[5],p[7],t)}; }
 function movePulse(el, segments, t) { const point=pointOn(segments[t<.5?0:1],t<.5?t*2:(t-.5)*2); el.setAttribute('cx',point.x);el.setAttribute('cy',point.y); }
 function moveNode(el, segment, t) { const point=pointOn(segment,t);el.setAttribute('x',point.x-5);el.setAttribute('y',point.y-5); }
 function pathData(parts) { const a=parts[0],b=parts[1];return `M${a[0]} ${a[1]} C${a[2]} ${a[3]} ${a[4]} ${a[5]} ${a[6]} ${a[7]} C${b[2]} ${b[3]} ${b[4]} ${b[5]} ${b[6]} ${b[7]}`; }
 function segments(aw,ac,bw,bc) { const x=327,y=148;return [
  [[aw.x,aw.y,aw.x+67,aw.y-61,x-70,y-70,x,y],[x,y,x+48,y+42,ac.x-48,ac.y+20,ac.x,ac.y]],
  [[bw.x,bw.y,bw.x+50,bw.y+38,x-75,y+72,x,y],[x,y,x+45,y-50,bc.x-60,bc.y-26,bc.x,bc.y]]
 ]; }
 // Read geometry together before any writes. The parent-system delta is
 // applied below so connections follow the new position in the same frame.
 function anchor(plane, x, y, inverse, previous, next) {
  try {
   const matrix = plane.getScreenCTM();
   if (!inverse || !matrix) throw new Error('SVG matrix unavailable');
   const point = svg.createSVGPoint(); point.x=x; point.y=y;
   const position = point.matrixTransform(inverse.multiply(matrix));
   return {x:position.x + next.x - previous.x, y:position.y + next.y - previous.y};
  } catch (_) { return {x:x+next.x,y:y+next.y}; }
 }
 function render(now) {
  if (!last) last=now; const delta=Math.min(now-last,50); last=now; elapsed+=delta;
  const time=elapsed/1000, blend=1-Math.exp(-delta/300);
  pointerX+=(targetX-pointerX)*blend; pointerY+=(targetY-pointerY)*blend;
  const phase=Math.sin(time*2*Math.PI/15), phase2=Math.sin(time*2*Math.PI/22+0.8);
  const wx=Number((phase*9+pointerX*6).toFixed(2)), wy=Number((phase2*5+pointerY*4).toFixed(2));
  const cx=Number((-phase*9+pointerX*9).toFixed(2)), cy=Number((-phase2*5+pointerY*6).toFixed(2));
  const nextWarm={x:wx,y:wy}, nextCool={x:cx,y:cy};
  let inverse = null;
  try { const root=svg.getScreenCTM(); if (root) inverse=root.inverse(); } catch (_) {}
  const aw=anchor(anchorPlanes[0],143,161,inverse,previousWarm,nextWarm), ac=anchor(anchorPlanes[2],465,185,inverse,previousCool,nextCool);
  const bw=anchor(anchorPlanes[1],156,190,inverse,previousWarm,nextWarm), bc=anchor(anchorPlanes[3],492,116,inverse,previousCool,nextCool);
  warm.style.setProperty('--system-x', wx+'px'); warm.style.setProperty('--system-y',wy+'px');
  cool.style.setProperty('--system-x', cx+'px'); cool.style.setProperty('--system-y',cy+'px');
  previousWarm=nextWarm; previousCool=nextCool;
  const [a,b]=segments(aw,ac,bw,bc);
  paths[0].setAttribute('d',pathData(a)); paths[1].setAttribute('d',pathData(b));
  moveNode(lowerNode,b[0],.7); moveNode(upperNode,b[1],.55);
  const t=(time%13)/13, u=((time+6.5)%17)/17; movePulse(pulses[0],a,t); movePulse(pulses[1],b,1-u);
  pulses[0].style.opacity=String(time>1.8?Math.sin(Math.PI*t)*.8:0);pulses[1].style.opacity=String(time>1.8?Math.sin(Math.PI*u)*.65:0);
  lightWarm.style.setProperty('--light-x',(wx*.5).toFixed(2)+'px');lightWarm.style.setProperty('--light-y',(wy*.5).toFixed(2)+'px');
  lightCool.style.setProperty('--light-x',(cx*.5).toFixed(2)+'px');lightCool.style.setProperty('--light-y',(cy*.5).toFixed(2)+'px');
  lightWarm.style.setProperty('--light-opacity',String(.9+.1*Math.sin(Math.PI*t)));lightCool.style.setProperty('--light-opacity',String(.9+.1*Math.sin(Math.PI*u)));
  frame=requestAnimationFrame(render);
 }
 function reset() {
  previousWarm={x:0,y:0}; previousCool={x:0,y:0};
  [warm,cool].forEach(e=>{e.style.removeProperty('--system-x');e.style.removeProperty('--system-y')});
  [lightWarm,lightCool].forEach(e=>{e.style.removeProperty('--light-x');e.style.removeProperty('--light-y');e.style.removeProperty('--light-opacity')});
  const [a,b]=segments({x:143,y:161},{x:465,y:185},{x:156,y:190},{x:492,y:116});
  paths[0].setAttribute('d',pathData(a)); paths[1].setAttribute('d',pathData(b));
  moveNode(lowerNode,b[0],.7); moveNode(upperNode,b[1],.55);
  pulses.forEach(p=>p.style.opacity='0');art.classList.remove('motion-running');
 }
 function sync(){if (inView && !reduce.matches && !document.hidden){if(!frame){last=0;art.classList.add('motion-running');frame=requestAnimationFrame(render)}}else{if(frame)cancelAnimationFrame(frame);frame=0;last=0;if(reduce.matches)reset()}}
 art.addEventListener('pointermove',e=>{if(!fine.matches||reduce.matches)return;const r=art.getBoundingClientRect();targetX=Math.max(-1,Math.min(1,(e.clientX-r.left)/r.width*2-1));targetY=Math.max(-1,Math.min(1,(e.clientY-r.top)/r.height*2-1))},{passive:true});
 art.addEventListener('pointerleave',()=>{targetX=0;targetY=0},{passive:true});
 animated.forEach(e=>observer.observe(e)); document.addEventListener('visibilitychange',sync);reduce.addEventListener('change',sync);
})();
