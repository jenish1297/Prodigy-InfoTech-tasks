window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if(window.scrolly > 50){
        navbar.classList.add("acrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

const menuIcon = document.querySelector(".toggle");
const menu = document.querySelector("#menu");

menuIcon.addEventListener("click", function()  {
    if(menu.style.display="none")
    {
        menu.style.display="flex";
    }
})
