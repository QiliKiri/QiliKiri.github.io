window.onload = function() { scrollWindow() }
function scrollWindow() {
    window.onscroll = function() { showBtn() }
}
function showBtn() {
    let btn = document.querySelector(".to-top-btn");
    let viewportHeight = document.documentElement.clientHeight;
    if(document.documentElement.scrollTop > 0.2 * viewportHeight) {
        btn.style.visibility = "visible";
    } else {
        btn.style.visibility = "hidden";
    }
}

function scrollToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}
