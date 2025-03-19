const header = document.querySelector('header')

window.addEventListener('scroll', ()=>{
  if(window.scrollY >=180){
    header.classList.add('scroll-header')
  } else{
    header.classList.remove('scroll-header')
  }
})
