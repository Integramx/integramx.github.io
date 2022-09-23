// MENU DE MOBILE

const menuGeneral = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('.menu-mobile');

menuGeneral.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    mobileMenu.classList.toggle('inactive');
}

//