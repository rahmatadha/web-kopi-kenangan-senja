// toggle class actvie
const navbarNav = document.querySelector(".navbar-nav");

// kalau hamburger menu di clik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// untuk keluar dari hamburger menu tanpa perlu klik hamburger menu
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
