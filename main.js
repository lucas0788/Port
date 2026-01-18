// ===================== MENU SHOW ====================
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

// ===================== REMOVE MENU MOBILE ====================
const navLinks = document.querySelectorAll('.nav__link');
const navMenu = document.getElementById('nav-menu');

const linkAction = () => {
    navMenu.classList.remove('show');
};

navLinks.forEach(link => {
    link.addEventListener('click', linkAction);
});

// ===================== SCROLL SECTIONS ACTIVE LINK ====================
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 58;
        const sectionId = section.getAttribute('id');
        // Usando um método mais seguro de selecionar o link do menu
        const sectionLink = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);

        if (scrollPosition > sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            if (sectionLink) {
                sectionLink.classList.add('active-link');
            }
        } else {
            if (sectionLink) {
                sectionLink.classList.remove('active-link');
            }
        }
    });
};

window.addEventListener('scroll', scrollActive);

// ===================== SCROLL REVEAL ANIMATION ====================
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true // Habilitar se necessário para animações contínuas
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
// Toggle menu mobile
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav-menu');

if(toggle && nav){
    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}
