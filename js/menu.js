const menuButton = document.querySelector('.n-menu');
const menu = document.querySelector('.menu');
menuButton.addEventListener('click', () => {
    menu.classList.toggle('is-open');
    });