import Swiper from 'swiper/swiper-bundle';

const swiper = new Swiper('.mySwiperSpesialists', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyOnViewport: true,
    padeUpDown: true,
  },

  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  speed: 1000,
  breakpoints: {
    370: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      loop: true,
    },
    1000: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
      loop: true,
    },
    1469: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 19,
    },
  },
});

// if (outerWidth < 768) {
//   const swiper = new Swiper('.mySwiperSpesialists', {
//     effect: 'cards',
//     grabCursor: true,
//     keyboard: {
//       enabled: true,
//       pageUpDown: true,
//     },
//     breakpoints: {
//       slidesPerView: 0.1,
//       slidesPerGroup: 1,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });
// } else {
//   const swiper = new Swiper('.mySwiperSpesialists', {
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     keyboard: {
//       enabled: true,
//       onlyOnViewport: true,
//       padeUpDown: true,
//     },
//     spaceBetween: 19,
//     autoplay: {
//       delay: 5000,
//       stopOnLastSlide: false,
//       disableOnIteration: false,
//     },
//     speed: 1000,
//     breakpoints: {
//       768: {
//         slidesPerView: 3,
//         slidesPerGroup: 3,
//         spaceBetween: 30,
//         loop: true,
//       },
//       1469: {
//         slidesPerView: 3,
//         slidesPerGroup: 3,
//         spaceBetween: 19,
//       },
//     },
//   });
// }
