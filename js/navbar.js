var html = `
<div class="navbarleft">
<div>
    <img src="img/logo.png">
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

const menuBtn = document.querySelector(".menu-btn");
const navRight = document.querySelector(".navbarright");
menuBtn.addEventListener('click', () => {
    // menuBtn.classList.toggle("open");
    navRight.classList.toggle("open"); 
    navRight.classList.add("ease-out");
});

function setNavBar(){
    var navbarelement = document.getElementsByClassName("navbarcontainer");
    navbarelement.innerHTML = navBar;
}
setNavBar();