import Swiper from 'swiper/swiper-bundle';
const swiper = new Swiper('.price-swiper', {
  pagination: {
    el: '.price-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyOnViewport: true,
    padeUpDown: true,
  },
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  speed: 1000,
  // mousewheel: {
  //   sensitivity: 1,
  // },
  breakpoints: {
    370: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 40,
      loop: true,
    },
    1469: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      autoplay: false,
      spaceBetween: 50,
    },
  },
});
