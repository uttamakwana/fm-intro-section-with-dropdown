const closeMenuIcon = document.querySelector(".close-menu-icon");
const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu-icon");
const overlay = document.querySelector(".overlay");

menuIcon.addEventListener("click", () => {
  menu.classList.add("active");
  overlay.classList.add("active");
});

closeMenuIcon.addEventListener("click", () => {
  console.log("working");
  menu.classList.remove("active");
  overlay.classList.remove("active");
});
