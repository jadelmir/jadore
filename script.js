const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
    toggle.textContent=open?'×':'☰';
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
    toggle.textContent='☰';
  }));
}

const breadImages=[
  './assets/bread/sourdough-loaf-vintage.svg',
  './assets/bread/focaccia-vintage.svg',
  './assets/bread/baguettes-vintage.svg',
  './assets/bread/flavored-loaf-vintage.svg'
];
const breadLabels=[
  'Vintage illustration of a sourdough loaf',
  'Vintage illustration of sourdough focaccia',
  'Vintage illustration of little baguettes',
  'Vintage illustration of flavored sourdough loaf'
];
const breadArts=document.querySelectorAll('#bread .bread-card .bread-art');
if(breadArts.length){
  const style=document.createElement('style');
  style.textContent=`
    #bread .bread-art{width:120px;height:110px;border-radius:8px;overflow:hidden;background-size:contain;background-repeat:no-repeat;background-position:center;flex:0 0 auto}
    #bread .bread-art svg{display:none}
    @media(max-width:1050px){#bread .bread-art{width:105px;height:98px}}
    @media(max-width:520px){#bread .bread-art{width:78px;height:78px}}
  `;
  document.head.appendChild(style);
  breadArts.forEach((art,index)=>{
    if(breadImages[index]){
      art.style.backgroundImage=`url('${breadImages[index]}')`;
      art.setAttribute('role','img');
      art.setAttribute('aria-label',breadLabels[index]);
    }
  });
}

const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();