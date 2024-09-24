"use strict";

const navBarButton = document.querySelector(".nav-bar__button");
const navBarMenu = document.querySelector(".nav-bar__menu");

navBarButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    navBarMenu.classList.toggle("hidden");
    console.log("I'm clicking the button");
}