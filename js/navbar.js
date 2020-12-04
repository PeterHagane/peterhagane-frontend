var html;
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
<flexRow class="flexRow flexCenter">
    <nav>
        <ul>

        </ul>
    </nav>
</flexRow>`;

function throttled(){
    var now = new Date();
    var interval = 200;
    var then = now.getSeconds() + interval;
    return timeleft;
}

function checkWidth(){
    var navBar;
    if(window.innerWidth > 1080){
        navBar = bigNav;
        console.log("bignav");
    }else if (window.innerWidth < 1081){
        navBar = smallNav;
        console.log("smallnav");
    }
    return navBar;
}

function setNavBar(){
    var navbar = document.getElementById("navBar");
    navbar.setAttribute("class", "navBar flexCenter");
    navbar.innerHTML = checkWidth();
}

window.onresize = function(){
    throttle(setNavBar(), 20000); //set navbar at a max frequency of every 250ms
};


setNavBar();