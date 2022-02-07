let dark = false;

function darkOrLightMode() {
    let body = document.querySelector("body");
    let menuItems = document.querySelectorAll(".menu-item");
    let links = document.querySelectorAll("a");
    let sourceCodes = document.querySelectorAll(".source-code");
    let darkLightBtn = document.querySelector(".dark-or-light-btn");
    let footer = document.querySelector("footer");
    let windows = document.querySelectorAll(".window");

    if (dark) {
        body.style.color = "black";
        body.style.backgroundColor = "white";
        darkLightBtn.style.color = "black";
        footer.style.backgroundColor = "grey";

        for (let index = 0; index < menuItems.length; index++) {
            menuItems[index].style.color = "black";
        }

        for (let index = 0; index < links.length; index++) {
            links[index].style.color = "black";
        }
        for (let index = 0; index < windows.length; index++) {
            windows[index].style.color = "black";
            windows[index].style.backgroundColor = "white";
        }
        dark = false;
    } else {
        body.style.color = "white";
        body.style.backgroundColor = "black";
        darkLightBtn.style.color = "white";
        footer.style.backgroundColor = "#1e1c1c";

        for (let index = 0; index < menuItems.length; index++) {
            menuItems[index].style.color = "white";
        }

        for (let index = 0; index < links.length; index++) {
            links[index].style.color = "white";
        }
        for (let index = 0; index < windows.length; index++) {
            windows[index].style.color = "white";
            windows[index].style.backgroundColor = "#1e1c1c";
        }
        dark = true;
    }

    for (let index = 0; index < sourceCodes.length; index++) {
        sourceCodes[index].style.color = "green";
    }
}