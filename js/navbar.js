var html = `
<div class="navbarleft">
<div>
    
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
var navbarcontainer = document.getElementById("navbarcontainer");

var setNavBar = function setNavBar(){
    // var navbarcontainer = document.getElementById("navbarcontainer");
    navbarcontainer.setAttribute("class", "navbarcontainer hidden");
    navbarcontainer.innerHTML = html;
}
setNavBar();

const menuBtn = document.querySelector(".menu-btn");
const navRight = document.querySelector(".navbarright");
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("open");
    navRight.classList.toggle("open"); 
    navRight.classList.add("ease-out");
});

//handle hide/show on scroll
var splash = document.getElementById("splash");
var projects = document.getElementById("projects");
var splashmenu = document.getElementById("splashmenu");
// The element we will observe
const scrollelement = document.getElementById("scrollelement");

var unscrolled = function(){
    navbarcontainer.classList.add("hidden");
    projects.classList.remove("slideIn");
    splashmenu.classList.add("hidden");
    // navbarcontainer.classList.toggle("hidden");
    // splash.classList.toggle("fullheight");
    // splash.target.style.display = "none";


}
var scrolled = function(){
    console.log("Scrolling down - show navbar, show projects, hide menu, reduce height of splash");
    navbarcontainer.classList.remove("hidden");
    splash.classList.add("short");
}


// Observer options.
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7,
};

// Callback function executed during observe.
const callback = function( entries, observer ) {
  // Target the first entry available.
  let observedelement = entries[0];

  // Log observer entry data.
  console.log(observedelement);

  // Add or remove the blur.
  observedelement.isIntersecting ? unscrolled() : scrolled();
};

const observer = new IntersectionObserver( callback, options );

//observe if element is present
if ( scrollelement ) {
  observer.observe( scrollelement );
}

//https://www.youtube.com/watch?v=huVJW23JHKQ