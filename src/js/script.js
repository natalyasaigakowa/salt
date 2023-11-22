window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__nav'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger-active');
        menu.classList.toggle('header__nav-active');
    });

    const swiper = new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 100,

        pagination: {
            el: '.swiper-pagination',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        keyboard: true,
      });

    
})

