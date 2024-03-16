new Swiper('.coach-slider', {
  navigation:{
    nextEl: '.coach-slider-next',
    prevEl: '.coach-slider-prev'
  },
  // pagination: {
  //   el: ".coach-pagination",
  //   type: "progressbar"
  // }
  
  slidesPerView: 3.2,
  watchOverFlow: true,
});
// адаптив для слайдера
// if (window.innerWidth < 450) {
//   swiper.params.slidesPerView = 1.5;
  
//   swiper.update();
// }
// адаптив для слайдера

document.getElementById("header-btn").onclick = function() {
  document.getElementById("last").scrollIntoView({behavior: "smooth"});
}

let links = document.querySelectorAll(".navbar-item > a");
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function() {
    document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
  }
}

let buttons = document.getElementsByClassName("pack-item-btn");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    document.getElementById("last").scrollIntoView({behavior:"smooth"});
  }
}