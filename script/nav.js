const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar-nav");
const show = document.querySelector('.show');

navbarToggler.addEventListener("click", () => {
  navbarToggler.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});
