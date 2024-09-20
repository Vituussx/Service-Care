// menu.js
const menuIcon = document.getElementById('menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
});