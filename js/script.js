// toggle class actvie hamburger menu dan shopping cart
const navbarNav = document.querySelector(".navbar-nav");
const shoppingCartShop = document.querySelector(".shopping-cart");
// kalau hamburger menu di clik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCartShop.classList.toggle("active");
  e.preventDefault();
};

// toggle class active search form
const searchform = document.querySelector(".search-form");
const searchbox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchform.classList.toggle("active");
  searchbox.focus();
  e.preventDefault();
};

// untuk keluar dari hamburger menu,search bar tanpa perlu klik hamburger menu, serarch bar
const hamburger = document.querySelector("#hamburger-menu");

const searchbar = document.querySelector("#search-button");

const shoppingbar = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchbar.contains(e.target) && !searchform.contains(e.target)) {
    searchform.classList.remove("active");
  }
  if (!shoppingbar.contains(e.target) && !shoppingCartShop.contains(e.target)) {
    shoppingCartShop.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// Modal close box
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// Click Diluar Modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
