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

function throttle(func, limit){
    let flag = true;
    return function(){
        let context = this;
        let args = arguments;
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
    navbar.innerHTML = checkWidth();
}

setNavBar(); //inital navbar
window.onresize = throttle(setNavBar, 250); //set navbar at a max frequency of every 250ms

