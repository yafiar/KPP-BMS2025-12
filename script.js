const toggle = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active"); 
  toggle.classList.toggle("open");   
});
