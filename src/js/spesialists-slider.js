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
      delay: 5000,
      stopOnLastSlide: false,
      disableOnIteration: false,
    },
    speed: 1000,
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
        slidesPerGroup: 1,
        autoplay: false,
        spaceBetween: 50,
        speed: 2000,
      },
    },
  });
}
