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
});
