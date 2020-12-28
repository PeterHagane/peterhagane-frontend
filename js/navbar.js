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
var navbarelement = document.getElementById("navbarcontainer");

var setNavBar = function setNavBar(){
    // var navbarelement = document.getElementById("navbarcontainer");
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

//handle hide/show on scroll
// The element we will observe
var splash = document.getElementById("splash");
const scrollelement = document.getElementById("scrollelement");

var unscrolled = function(){
    navbarelement.classList.toggle("hidden");
    splash.classList.toggle("fullheight");

    // navbarelement.target.style.display = "hidden";
    // splash.target.style.height = "100vh";
}
var scrolled = function(){
    navbarelement.classList.toggle("hidden");
    splash.classList.toggle("fullheight");
    // navbarelement.target.style.display = "flex";
    // splash.target.style.height = "50vh";
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
  ! observedelement.isIntersecting ?  scrolled : unscrolled
};

const observer = new IntersectionObserver( callback, options );

//observe if element is present
if ( scrollelement ) {
  observer.observe( scrollelement );
}

//https://www.youtube.com/watch?v=huVJW23JHKQ