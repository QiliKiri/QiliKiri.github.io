let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        let content = this.nextElementSibling;
        this.classList.toggle("expand");
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
}
let sectionNames = document.getElementsByClassName("section-name-container");


function collapseAll(content) {
    let coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        if (coll[i].nextElementSibling.classList.contains(content)) {
            coll[i].click();
        }
    }
}