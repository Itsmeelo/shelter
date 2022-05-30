const burgerMenu = document.querySelector(".burgerMenu");
const navMenu = document.querySelector(".nav-menu");

console.log(burgerMenu);
console.log(navMenu);

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});