window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__nav'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger-active');
        menu.classList.toggle('header__nav-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__nav-active');
        })
    })
})