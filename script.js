const image=document.getElementById('reference-image');
const loader=document.getElementById('design-loader');
const parts=['./assets/reference-01.txt','./assets/reference-02.txt','./assets/reference-03.txt','./assets/reference-04.txt'];

async function loadReference(){
  try{
    const encoded=await Promise.all(parts.map(async path=>{
      const response=await fetch(path,{cache:'force-cache'});
      if(!response.ok)throw new Error(`Could not load ${path}`);
      return response.text();
    }));
    image.addEventListener('load',()=>{
      image.classList.add('loaded');
      loader?.classList.add('hidden');
    },{once:true});
    image.src='data:image/avif;base64,'+encoded.join('').replace(/\s+/g,'');
  }catch(error){
    console.error(error);
    document.body.classList.add('load-error');
  }
}

for(const link of document.querySelectorAll('a[href^="#"]')){
  link.addEventListener('click',event=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(!target)return;
    event.preventDefault();
    target.scrollIntoView({behavior:'smooth',block:'start'});
  });
}

loadReference();