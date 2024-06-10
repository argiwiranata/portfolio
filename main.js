// ======================== Togle Navbar===================

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('fa-x');
    navbar.classList.toggle('active')
} 

// ======================== scrol section active===================//
let sections =document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >=offset && top < offset + height){
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [heref*=' + id + ']').classList.add('acttive');
            });
        };
    });
    // ======================== stikyn navbar===================//
    let header = document.querySelector('header');
    header.classList.toggle('stiky', window.scrollY > 100);
    // ======================== stikyn navbar===================//
    menuicon.classList.remove('fa-x');
    navbar.classList.remove('actvie');
};

// ======================== scroll reveal===================//
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-content,heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container,.certificate-box, contact-form', { origin:'buttom' });
ScrollReveal().reveal('.home-contac h1, .about-img', { origin:'left'});
ScrollReveal().reveal('.home-contact p,.about-content', { origin:'right' });

// ======================== typed js===================//
const typed = new Typed('.multiple-text',{
    strings: ['Student In NURUL HUDA UNIVERSITY', 'Informatics Engenering', 'Admind Mitra SRD GROUP'],
    type5speed: 50,
    backspeed:50,
    backdelay:1000,
    loop:true
});