function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "none" ? "block" : "none";
}

// document.addEventListener("click", function(event) {
//   const menu = document.getElementById("menu");
//   const targetElement = event.target;
//   if (!menu.contains(targetElement) && !targetElement.classList.contains("mobile-menu-btn")) {
//     menu.style.display = "none";
//   }
// });