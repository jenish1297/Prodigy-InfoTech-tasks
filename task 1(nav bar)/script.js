window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

const menuIcon = document.querySelector(".bar");
const menu = document.querySelector("#menu");

menuIcon.addEventListener("click", function() {
    menu.classList.toggle("active");
});
