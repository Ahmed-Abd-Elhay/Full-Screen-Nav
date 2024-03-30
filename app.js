let toggleMinue = document.querySelector(".toggle");
let navy = document.querySelector("nav");
let closeButton = document.querySelector(".close");

toggleMinue.onclick = function () {
    navy.classList.add("open");
};

closeButton.onclick = function () {
    // navy.classList.remove("open");
    this.parentElement.classList.remove("open");
};

window.onkeyup = function (e) {
    e.key === "Escape" ? navy.classList.remove("open") : "";
}