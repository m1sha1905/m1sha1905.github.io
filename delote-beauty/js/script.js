let headerBurger = document.querySelector(".header-burger");
let headerMobWrapper = document.querySelector(".header-mob-wrapper");

headerBurger.addEventListener("click", () => {
  headerMobWrapper.classList.toggle("active");
  headerBurger.classList.toggle("active");
});