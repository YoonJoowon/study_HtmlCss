const toogleBtn = document.querySelector('.navbar___toogleBtn');
const menu = document.querySelector('.navbar___menu');
const icons = document.querySelector('.navbar___icons');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});