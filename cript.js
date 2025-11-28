// DARK MODE TOGGLE
const themeButton = document.getElementById("theme-toggle");
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// MOBILE NAV TOGGLE
const navButton = document.getElementById("nav-toggle");
const navMenu = document.getElementById("navbar");

navButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
