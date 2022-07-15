const btn = document.querySelectorAll('.js-class');
const elements = document.querySelectorAll('.js-class-text');
const photo = document.querySelectorAll('.our-list__photo');
const li = document.querySelectorAll('.our-list__elements');

for (const button of btn) {
  button.addEventListener('click', eventClick);
}

function eventClick(e) {
  let id = null;
  elements.forEach((x, i) => {
    x.classList.remove('our-list__box--activ');
    li[i].classList.add('is-no-activ');
    photo[i].classList.remove('our-list__box--activ');
  });

  btn.forEach((x, i) => {
    if (x === e.srcElement) {
      id = i;
    }
  });

  elements[id].classList.add('our-list__box--activ');
  photo[id].classList.add('our-list__box--activ');
  li[id].classList.remove('is-no-activ');
}
