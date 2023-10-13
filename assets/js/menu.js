const navUser1 = document.querySelector(".mobile-menu-btn");
const modal = document.querySelector(".tb-header-navbar");
const register = document.querySelector(".tb-header");

function showBuyTickets() {
  modal.classList.add("open");
}
function hideBuyTickets() {
  modal.classList.remove("open");
}
navUser1.addEventListener("click", showBuyTickets);
register.addEventListener("click", function (event) {
  event.stopPropagation();
});