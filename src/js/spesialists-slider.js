import Swiper from 'swiper/swiper-bundle';

if (outerWidth < 1000) {
  const swiper = new Swiper('.mySwiperSpesialists', {
    effect: 'cards',
    grabCursor: true,
    keyboard: {
      enabled: true,
      pageUpDown: true,
    },
  });
} else {
  const swiper = new Swiper('.mySwiperSpesialists', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
