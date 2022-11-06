(function () {

const burger = document.querySelector(".header__mobile-btn");
const menu = document.querySelector(".header__menu-list");
const body = document.querySelector(".body");

burger.addEventListener("click", function() {
    menu.classList.toggle("header__menu-list-show")
    burger.classList.toggle("header__close-btn")
    body.classList.toggle("stop-scroll")
})

})()
