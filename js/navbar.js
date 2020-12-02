var html = `
<flexChild class=\"flexChild\"><img src=\"img/logo.png\">
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
</flexRow>"
`
var navbar = document.getElementsByTagName("navBar");
navbar.appendChild(html); 