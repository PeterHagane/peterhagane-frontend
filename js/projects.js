var projects = [
    {
        pimg: "img/textgraphic.svg",
        purl: "",
        ptitle:"Title",
        ptags: {tags: ["JS", "C#"]}
    },
    {
        pimg: "img/textgraphic.svg",
        purl: "",
        ptitle:"Title2",
        ptags: {tags: ["JS", "HTML"]}
    },
    {
        pimg: "img/textgraphic.svg",
        purl: "",
        ptitle:"Title",
        ptags: {tags: ["JS", "C#"]}
    },
    {
        pimg: "img/textgraphic.svg",
        purl: "",
        ptitle:"Title2",
        ptags: {tags: ["JS", "HTML"]}
    }    
]

var projectHTML = `
<div class="flexRow flexCenter">
    ${setProjects()}
</div>
`
function setProjects() {
    var pHTML = ``;
    for (var project in projects) {
        pHTML += `
            <div class="card flexColumn">
            <img src="${projects[project].pimg}"></img>
            <h5>${projects[project].ptitle}</h5>
            <p>${projects[project].ptags.tags}</p>
            </div>
            `
    }
    return pHTML;
}

var setProjects = function setProjects(){
    var projects = document.getElementById("projects");
    projects.setAttribute("class", "flexColumn text-gr");
    projects.innerHTML = projectHTML;
}
setProjects();