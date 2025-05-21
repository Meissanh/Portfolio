/* Affichage des menus */
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/* Active et remove des menus */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Active le lien
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove le menu
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* Scroll reveal animation - effet plus subtil */
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '4px',
    duration: 200,
    opacity: 0.05,
    easing: 'ease',
    interval: 60,
    reset: false
});

/* Scroll home */
sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 100})
sr.reveal('.home__img',{delay: 200})
sr.reveal('.home__social-icon',{interval: 100})

/* Scroll about */
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay: 100})
sr.reveal('.about__text',{delay: 200})

/* Scroll skills */
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 100})
sr.reveal('.skills__data',{interval: 100})
sr.reveal('.skills__img',{delay: 200})

/* Scroll work */
sr.reveal('.work__img',{interval: 100})

/* Scroll contact */
sr.reveal('.contact__input',{interval: 100})

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScrolling(){
    document.body.style.overflow = 'auto';
}