const closeEl = document.getElementById('close');
const menuEl = document.getElementById('menu');
const navLinks = document.getElementById('nav-link');
console.log(closeEl , menuEl)

let counter = 0;

// Menu Icon Function
menuEl.addEventListener('click', ()=>{
    if(counter === 0){
        navLinks.style.left = '0';
    }
});

closeEl.addEventListener('click',()=>{
    if(counter === 0){
        navLinks.style.left = '-100%'
    }
})