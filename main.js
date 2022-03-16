let darkModeIcon = document.getElementById("dark-mode__icon");
let body = document.querySelector("body");
let title = document.querySelectorAll(".texts");

darkModeIcon.addEventListener("click" , () => {
    body.classList.toggle("active");
})
