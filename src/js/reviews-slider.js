import Swiper from 'swiper/swiper-bundle';
const swiper = new Swiper('.reviews-swiper', {
  pagination: {
    el: '.reviews-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyOnViewport: true,
    padeUpDown: true,
  },
  spaceBetween: 30,
  loop: true,
  initialSlide: 1,

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 40,
    },
    1000: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 120,
    },
    1469: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 50,
    },
  },
});

//<section class="reviews">
//   <div class="container">
//     <h2 class="reviews-title">Ціни</h2>
//     <div class="reviews-swiper">
//       <div class="reviews-swiper__wrap swiper-wrapper">
//         <div class="reviews-slid swiper-slide"></div>
//         <div class="reviews-slid swiper-slide"></div>
//         <div class="reviews-slid swiper-slide"></div>
//         <div class="reviews-slid swiper-slide"></div>
//         <div class="reviews-slid swiper-slide"></div>
//         <div class="reviews-slid swiper-slide"></div>
//       </div>
//       <div class="reviews-pagination"></div>
//     </div>
//   </div>
// </section>
