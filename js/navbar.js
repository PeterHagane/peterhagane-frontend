var html = `
<div class="navbarleft">
<div>
    <img src="img/logo.svg">
</div>
<div class="flexfill">
</div>
<div class="menu-btn">
    <div class="menu-btn__burger"></div>
</div>
</div>

<div class="navbarright">
<ul class="menu">
    <li><a href="#About">About</a></li>
    <li><a href="#Projects">Projects</a></li>
    <li><a href="#Contact">Contact</a></li>
</ul>
</div>
`
var setNavBar = function setNavBar(){
    var navbarelement = document.getElementById("navbarcontainer");
    navbarelement.setAttribute("class", "navbarcontainer");
    navbarelement.innerHTML = html;
}
setNavBar();

const menuBtn = document.querySelector(".menu-btn");
const navRight = document.querySelector(".navbarright");
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("open");
    navRight.classList.toggle("open"); 
    navRight.classList.add("ease-out");
});

//https://www.youtube.com/watch?v=huVJW23JHKQ