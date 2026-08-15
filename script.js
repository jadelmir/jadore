const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menuToggle&&nav){
  menuToggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',String(open));
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded','false');
  }));
}

const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();

const referenceParts=['./assets/reference-01.txt','./assets/reference-02.txt','./assets/reference-03.txt','./assets/reference-04.txt'];
async function loadReferenceCrops(){
  try{
    const parts=await Promise.all(referenceParts.map(async path=>{
      const response=await fetch(path,{cache:'force-cache'});
      if(!response.ok)throw new Error(`Could not load ${path}`);
      return response.text();
    }));
    const source='data:image/avif;base64,'+parts.join('').replace(/\s+/g,'');
    document.querySelectorAll('.reference-source').forEach(img=>{img.src=source;});
  }catch(error){
    console.error('Reference crop load failed',error);
  }
}
loadReferenceCrops();