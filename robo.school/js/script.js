new Swiper('.coach-slider', {
  navigation:{
    nextEl: '.coach-slider-next',
    prevEl: '.coach-slider-prev'
  },
  // pagination: {
  //   el: ".coach-pagination",
  //   type: "progressbar"
  // }
  loop: true,
  
  slidesPerView: 3.2,
  watchOverFlow: true,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
    },
    "@0.75": {
      slidesPerView: 2,
    },
    "@1.00": {
      slidesPerView: 3,
    },
  }
});

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