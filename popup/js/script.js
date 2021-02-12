// Variables
const requestBtn = document.querySelector(".request");
const closeMenuBtn = document.querySelector(".closeMenu");
const navMenu = document.querySelector(".menu");
const popUp = document.querySelector(".popup");
const closePopup = document.querySelector(".closePopup");
const openMenu = document.querySelector(".openMenu");

// Open popup
requestBtn.addEventListener("click", () => {
	popUp.style.display = "flex";
});

// Close popup
closePopup.addEventListener("click", () => {
	popUp.style.display = "none";
});

// Open menu
openMenu.addEventListener("click", () => {
	navMenu.style.left = "0";
});

// Close menu
closeMenuBtn.addEventListener("click", () => {
	navMenu.style.left = "-50vw";
});