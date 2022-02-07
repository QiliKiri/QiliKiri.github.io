function sectionContainerHighlight(sectionNameContainer) {
    sectionNameContainer.style.borderColor = "white";
    sectionNameContainer.style.backgroundColor = "grey";
    sectionNameContainer.style.color = "black";
}
function sectionContainerRecover(sectionNameContainer) {
    sectionNameContainer.style.borderColor = "grey";
    sectionNameContainer.style.backgroundColor = "#3b3838";
    sectionNameContainer.style.color = "white";
}
function sectionContainerEffect(sectionNameContainerIndex) {
    let sectionContainers = document.querySelectorAll(".section-name-container");
    let targetSectionContainer = sectionContainers.item(sectionNameContainerIndex);
    sectionContainerHighlight(targetSectionContainer);
    setTimeout(sectionContainerRecover, 600, targetSectionContainer);
}