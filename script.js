const image=document.querySelector('.design-image');

async function loadReferenceArtwork(){
  if(!image) return;

  const parts=[
    './assets/reference-01.txt',
    './assets/reference-02.txt',
    './assets/reference-03.txt',
    './assets/reference-04.txt'
  ];

  try{
    const chunks=await Promise.all(parts.map(async path=>{
      const response=await fetch(`${path}?v=2`,{cache:'no-store'});
      if(!response.ok) throw new Error(`Could not load ${path}: ${response.status}`);
      return response.text();
    }));

    const base64=chunks.join('').replace(/\s+/g,'');
    image.src=`data:image/avif;base64,${base64}`;
    await image.decode();
    document.documentElement.classList.add('artwork-ready');
  }catch(error){
    console.error('Reference artwork failed to load:',error);
    document.documentElement.classList.add('artwork-error');
    const design=document.querySelector('.design');
    if(design){
      const message=document.createElement('div');
      message.className='artwork-error-message';
      message.innerHTML='<strong>j’adore</strong><span>Sourdough Bakery</span><p>The bakery artwork failed to load. Please refresh the page.</p>';
      design.appendChild(message);
    }
  }
}

loadReferenceArtwork();

for(const link of document.querySelectorAll('a[href^="#"]')){
  link.addEventListener('click',event=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(!target) return;
    event.preventDefault();
    target.scrollIntoView({behavior:'smooth',block:'start'});
  });
}