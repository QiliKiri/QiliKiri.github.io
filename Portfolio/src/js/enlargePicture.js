function enlargePicture(pictureSrc) {
    let container = document.querySelector(".picture-container");
    let mask = document.querySelector(".maskBackground");
    mask.classList.toggle("active");
    container.classList.toggle("active");
    if (pictureSrc != "") {
        container.style.backgroundImage = `url(${pictureSrc})`;
    }
}