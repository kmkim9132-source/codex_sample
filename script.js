// Sticky header, mobile drawer, category tabs, FAQ accordion, and scroll reveal
const header=document.querySelector('[data-header]');
const toggleHeader=()=>header.classList.toggle('is-scrolled',window.scrollY>8);
toggleHeader();window.addEventListener('scroll',toggleHeader,{passive:true});

const menuToggle=document.querySelector('[data-menu-toggle]');
const drawer=document.querySelector('[data-drawer]');
const backdrop=document.querySelector('[data-drawer-backdrop]');
const closeDrawer=()=>{drawer.classList.remove('is-open');drawer.setAttribute('aria-hidden','true');menuToggle.setAttribute('aria-expanded','false');backdrop.hidden=true;};
const openDrawer=()=>{drawer.classList.add('is-open');drawer.setAttribute('aria-hidden','false');menuToggle.setAttribute('aria-expanded','true');backdrop.hidden=false;drawer.querySelector('a,button')?.focus();};
menuToggle.addEventListener('click',()=>drawer.classList.contains('is-open')?closeDrawer():openDrawer());
document.querySelector('[data-drawer-close]').addEventListener('click',closeDrawer);backdrop.addEventListener('click',closeDrawer);drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeDrawer));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&drawer.classList.contains('is-open'))closeDrawer();});

const tabCopy={hair:'헤어 분야는 시술 결과, 고객 변화, 살롱 전문성을 브랜드가 빠르게 검토할 수 있는 구조로 정리합니다.',makeup:'메이크업 분야는 무드, 피부 표현, 촬영 결과 중심으로 브랜드 협업 제안 흐름을 설계합니다.',nail:'네일 분야는 디자인 콘셉트, 디테일 컷, 시즌 캠페인 적합성을 중심으로 포트폴리오를 구성합니다.'};
const tabPanel=document.querySelector('[data-tab-panel]');
document.querySelectorAll('[role="tab"]').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('[role="tab"]').forEach(t=>t.setAttribute('aria-selected','false'));tab.setAttribute('aria-selected','true');tabPanel.textContent=tabCopy[tab.dataset.tab];}));

document.querySelectorAll('.faq-item button').forEach(button=>button.addEventListener('click',()=>{const item=button.closest('.faq-item');const expanded=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!expanded));item.classList.toggle('is-open',!expanded);}));

if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.14,rootMargin:'0px 0px -40px 0px'});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'));}
