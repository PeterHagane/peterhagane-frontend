const menuBtn = document.querySelector(".menu-btn");
const navRight = document.querySelector(".navbarright");
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("open");
    navRight.classList.toggle("open"); 
    navRight.classList.add("ease-out");
});