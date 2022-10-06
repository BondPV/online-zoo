
window.addEventListener('DOMContentLoaded', () => {
    const testimonial = document.querySelectorAll('.testimonials__item-popup'),
    overlay = document.querySelector('.overlay');


    
    testimonial.forEach (elem => {
        elem.addEventListener('click', () => {
                elem.classList.toggle('testimonials__item-popup_active');
                overlay.classList.toggle('overlay_active');
            });
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('overlay_active');

        testimonial.forEach (elem => {
            elem.classList.remove('testimonials__item-popup_active');
        });
    });
});