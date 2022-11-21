var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
  },
  speed: 2800,
  pagination: {
    el: ".my-swiper-pagination",
    clickable: true,
    renderBullet: function (className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
});
// var swiper2 = new Swiper(".mySwiper2", {
//   spaceBetween: 10,
//   autoplay: {
//     delay: 4000,
//   },
//   speed: 2800,
//   pagination: {
//     el: ".my-swiper-pagination",
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + "</span>";
//     },
//   },
// });
