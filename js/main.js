//=================== Remove overlay div onload ========================
const delay = ms => new Promise(res => setTimeout(res, ms));

window.onload = async function overlay(){
    // var body = document.getElementsByTagName("body");
    // body.style.display = "hidden";
    var loading = document.getElementById("loading");
    //checks if all images are loaded and simulates click, fading out loading overlay before displaying none. Requires at least one picture on your site to work...
        var image = document.querySelector("img");
        if(image.complete && image.naturalHeight !== 0){
            loading.click();
            await delay(1000);
        };
    await delay(1000);
    loading.style.display = "none";
}
