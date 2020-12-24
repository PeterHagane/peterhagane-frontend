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
    }    
]

var projectHTML = `
<div class="flexRow">
    ${setProjects()}
</div>
`
function setProjects() {
    var pHTML = ``;
    for (var project in projects) {
        pHTML += `
            <div class="flexColumn">
            <img src="${projects[project].pimg}"></img>
            <p>${projects[project].ptitle}</p>
            <p>${projects[project].ptags.tags}</p>
            </div>
            `
    }
    return pHTML;
}

var setProjects = function setProjects(){
    var projects = document.getElementById("projects");
    projects.setAttribute("class", "flexColumn text-gr flexCenter");
    projects.innerHTML = projectHTML;
}
setProjects();