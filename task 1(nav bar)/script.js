window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if(window.scrolly > 50){
        navbar.classList.add("acrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");

menuIcon.addEventListener("click", function()  {
    manu.classList.toggle ("active");
})