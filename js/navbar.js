var html;
var open = false;
var menuButton = `
<div id="nav-icon">
<span></span>
<span></span>
<span></span>
</div>
`
var openMenuButton = `
<div id="nav-icon" class="open">
<span></span>
<span></span>
<span></span>
</div>
`

var bigNav = `
<flexChild class="flexChild">
    <img src="img/logo.png">
</flexChild>
<flexChild class="flexFill">
</flexChild>
<flexRow class="flexRow flexCenter">
    <nav>
        <ul>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </nav>
</flexRow>`;

var smallNav = `
<flexChild class="flexChild">
    <img src="img/logo.png">
</flexChild>
<flexChild class="flexFill">
</flexChild>
<flexChild class="flexChild">
${menuButton}
</flexChild>
<flexRow class="flexRow flexCenter">
    <nav>
        <ul>

        </ul>
    </nav>
</flexRow>`;



function throttle(func, limit){
    let flag = true;
    return function(){
        if(flag){
            func.apply(this, arguments);
            console.log("Update nav");
            flag = false;
            setTimeout(function(){
                flag = true;
            }, limit);
        }
    }
}

function checkWidth(){
    var navBar;
    if(window.innerWidth > 1080){
        navBar = bigNav;
        // console.log("bignav");
    }else if (window.innerWidth < 1081){
        navBar = smallNav;
        // console.log("smallnav");
    }
    return navBar;
}

var setNavBar = function setNavBar(){
    var navbar = document.getElementById("navBar");
    navbar.setAttribute("class", "navBar flexCenter");
    try {
        var retainedmenubtn = document.getElementById("nav-icon").outerHTML;
    } catch (error) { 
    }
    navbar.innerHTML = checkWidth();
    var menubtn = document.getElementById("nav-icon");
    
    if(retainedmenubtn == "undefined"){
    menubtn.outerHTML = retainedmenubtn;   
    }
    menubtn.addEventListener("click", function(){
        menubtn.classList.toggle("open");
    });    
}

// var animateMenuButton = function(){
//     document.getElementById("nav-icon")
// }

// document.getElementById(elementId)

// {};

//make all burgerbuttons animated
//document.onready = menuButtonAnimate([]);

setNavBar(); //inital navbar
window.onresize = throttle(setNavBar, 250); //set navbar at a max frequency of every 250ms


// document.
// //hamburger icon
// $(document).ready(function(){
// 	$('#nav-icon4').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });

//Just an idea in case I want to use the menu button elsewhere
// var setMenuButton = function setMenuButton(elementId){   //put burger button inside given element by id
//     var element = document.getElementById(elementId);    //get element by id
//     element.innerHTML = menuButton; //put button tag inside element
//     var div = element.querySelector("#nav-icon"); //then get that button tag
//     div.removeAttribute(id); //remove its id
//     div.setAttribute("id", "nav-icon"); //in future: "nav-icon" + idcount++, make sure each new button has unique id. Then, when animating onclick later, pass correct id and animate by id.
// }