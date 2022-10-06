
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header'),
    menuItem = document.querySelectorAll('.nav-menu__item'),
    hamburger = document.querySelector('.hamburger'),
    overlayBurger = document.querySelector('.overlay');
    

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header_active');
        overlayBurger.classList.toggle('overlay_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header_active');
            overlayBurger.classList.toggle('overlay_active');            
        });
    });

    overlayBurger.addEventListener('click', () => {
        hamburger.classList.remove('hamburger_active');
        menu.classList.remove('header_active');
        overlayBurger.classList.remove('overlay_active');
    });
});