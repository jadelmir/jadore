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

// Premium product photography for the Our Bread cards.
const breadImages=[
  './assets/bread/sourdough-loaf.webp',
  './assets/bread/focaccia.webp',
  './assets/bread/baguettes.webp',
  './assets/bread/flavored-loaves.webp'
];
const breadArts=document.querySelectorAll('#bread .bread-card .bread-art');
if(breadArts.length){
  const style=document.createElement('style');
  style.textContent=`
    #bread .bread-art{width:120px;height:90px;border-radius:8px;overflow:hidden;background-size:cover;background-position:center;box-shadow:0 5px 16px rgba(77,49,29,.12);flex:0 0 auto}
    #bread .bread-art svg{display:none}
    @media(max-width:1050px){#bread .bread-art{width:105px;height:82px}}
    @media(max-width:520px){#bread .bread-art{width:78px;height:70px}}
  `;
  document.head.appendChild(style);
  breadArts.forEach((art,index)=>{
    if(breadImages[index]){
      art.style.backgroundImage=`url('${breadImages[index]}')`;
      art.setAttribute('role','img');
      art.setAttribute('aria-label',['Artisan sourdough loaf','Sourdough focaccia','Little sourdough baguettes','Flavored sourdough loaves'][index]);
    }
  });
}

const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();
const signup=document.getElementById('signup');
if(signup){
  signup.addEventListener('submit',event=>{
    event.preventDefault();
    const note=document.getElementById('signup-note');
    if(note) note.textContent='Email updates are coming soon.';
  });
}