var splashHTML = `
<div class="flexColumn ">
    <h3>
    Design & Development
    </h3>
    <h4>
    By
    </h4>
    <h1>
        PETER HAGANE
    </h1>
    </div>
    <div class="flexRow">

    </div>
    <!-- <img class="graphic" src="img/textgraphic.svg"></img> -->
</div>
`

var setSplash = function setSplash(){
    var splash = document.getElementById("splash");
    splash.setAttribute("class", "flexColumn text-gr flexCenter");
    splash.innerHTML = splashHTML;
}
setSplash();