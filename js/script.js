"use strict";
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
  },
  speed: 2800,
  pagination: {
    el: ".my-swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
});
