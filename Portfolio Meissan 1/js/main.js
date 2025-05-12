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

/* Scroll reveal animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* Scroll home */
sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home__img',{delay: 400})
sr.reveal('.home__social-icon',{interval: 200})

/* Scroll about */
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay: 200})
sr.reveal('.about__text',{delay: 400})

/* Scroll skills */
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 200})
sr.reveal('.skills__data',{interval: 200})
sr.reveal('.skills__img',{delay: 400})

/* Scroll work */
sr.reveal('.work__img',{interval: 200})

/* Scroll contact */
sr.reveal('.contact__input',{interval: 200})

/* Affichage read more ppe */
function togglelba(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popuplba = document.getElementById('popuplba');
    popuplba.classList.toggle('active');
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

function toggleaprescovid(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popupaprescovid = document.getElementById('popupaprescovid');
    popupaprescovid.classList.toggle('active');
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

function toggledeviator(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popupdeviator = document.getElementById('popupdeviator');
    popupdeviator.classList.toggle('active');
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

function togglemessage(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popupmessage = document.getElementById('popupmessage');
    popupmessage.classList.toggle('active');
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

function miseEnAttente()
{
 setTimeout(disableScroll, 300);
}

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScrolling(){
    document.body.style.overflow = 'auto';
}