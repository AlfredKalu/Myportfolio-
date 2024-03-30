/*--------------Toggle style switcher---------------*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switcher on scroll //
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/*---------------Theme color-----------------*/
const alternatestyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternatestyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAtrribute("disabled");
        } else {
            style.setAtrribute("disabled", "true");
        }
    })
}