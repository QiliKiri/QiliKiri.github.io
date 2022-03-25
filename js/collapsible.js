let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        let content = this.nextElementSibling;
        // change the "+/-"
        this.classList.toggle("expand");
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
}
let expandALL = true;
function collapseAll(content) {
    let coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        if (coll[i].nextElementSibling.classList.contains(content)) {
            if (expandALL) {
                if (!coll[i].classList.contains("expand")) {
                    coll[i].click();
                }
            }else {
                if (coll[i].classList.contains("expand")) {
                    coll[i].click();
                }
            }
        }
    }
    expandALL = !expandALL;
}