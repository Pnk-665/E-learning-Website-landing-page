const menuBtn = document.querySelector("#menu-bars");
const closeBtn = document.querySelector("#cross");
const menu = document.querySelector("nav ul");

menuBtn.addEventListener('click', () => {
    menu.style.display ='block';
    menuBtn.style.display ='none';
    closeBtn.style.display ='inline-block';
})

closeBtn.addEventListener('click', () => {
    menu.style.display ='none';
    closeBtn.style.display ='none';
    menuBtn.style.display ='inline-block';
})