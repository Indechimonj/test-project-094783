const navMenu=document.getElementById('nav-Menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

const navLink=document.querySelectorAll('nav__link')

const linkAction=() =>{
    const navMenu=document.getElementById('nav-Menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n=> n.addEventListener('click',linkAction))