function popUpWindow(projectId) {
    let window = document.getElementById(projectId);
    let mask = document.querySelector(".maskBackground");
    mask.classList.toggle("active");
    window.classList.toggle("active");
}