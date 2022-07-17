const throttle = require('lodash.throttle');
const element = document.querySelector('.scrol-to');

element.addEventListener('click', function (e) {
  window.scrollTo(0, 0);
});

window.addEventListener('scroll', throttle(scrolIsHidden, 500));

function scrolIsHidden() {
  const scroll = window.scrollY;
  if (scroll > 300) {
    element.classList.remove('scrol-to--opacity');
    return;
  }

  element.classList.add('scrol-to--opacity');
}
