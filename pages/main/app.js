const MobMenu = document.getElementById('mobileMenu').addEventListener('mouseover', myStartFunction);

/*const exit = document.getElementById('mobileMenu').addEventListener('click', myExitFunction);*/



const bugerMenu = document.getElementById('burgerMenu');

const buggerMenuExit = document.getElementById('StartMenu');
/*buggerMenuExit.style.transform = 'rotate(0deg)';*/

console.log(buggerMenuExit);

const nav = document.querySelector('nav');
console.log(nav);



function myStartFunction() {
    bugerMenu.style.transition = "All 2s ease-in-out";
    bugerMenu.style.transform = 'rotate(90deg)';
    bugerMenu.style.transform = 'rotate(-0.25turn)';


};

/*function myExitFunction() {
    buggerMenuExit.style.transition = "All 2s ease-in-out"
    buggerMenuExit.style.transform = 'rotate(0deg)';

}*/

/*console.log(MobMenu);*/