let navbar = document.getElementsByClassName('navbar')
let navul=document.getElementsByClassName('nav-ul')
let navli=document.getElementsByClassName('nav-li')
let cross=document.getElementsByClassName('toggle-btn')

let btn =document.getElementById('btn')
btn.addEventListener('click',()=>{
    navbar[0].classList.toggle('active')
    navul[0].classList.toggle('active')
  Array.from(navli).forEach(element => {
    element.classList.toggle('active')
   });
   cross[0].classList.toggle('active')

})