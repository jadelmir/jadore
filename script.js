const image=document.querySelector('.design-image');
if(image){
  image.src='./assets/jadore-reference.webp?v=3';
  image.addEventListener('load',()=>document.documentElement.classList.add('artwork-ready'),{once:true});
  image.addEventListener('error',()=>{
    console.error('Reference artwork failed to load.');
    document.documentElement.classList.add('artwork-error');
  },{once:true});
}

for(const link of document.querySelectorAll('a[href^="#"]')){
  link.addEventListener('click',event=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(!target)return;
    event.preventDefault();
    target.scrollIntoView({behavior:'smooth',block:'start'});
  });
}
