window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__nav'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger-active');
        menu.classList.toggle('header__nav-active');
    });
})