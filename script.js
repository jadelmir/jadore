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