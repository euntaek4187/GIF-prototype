const toogleButton1 = document.querySelector('.navbar__toogleBtn')
const all = document.querySelector('.test')

toogleButton1.addEventListener('click', () => {
    all.classList.toggle('active');
});