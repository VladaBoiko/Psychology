const btn = document.querySelectorAll('.js-class');
const elements = document.querySelectorAll('.js-class-text');
const CLASS = 'visually-hidden';

for (const button of btn) {
  button.addEventListener('click', eventClick);
}

function eventClick(e) {
  let id = null;
  elements.forEach(x => {
    const isActiv = x.classList.contains(CLASS);
    if (!isActiv) {
      x.classList.add(CLASS);
    }
  });

  btn.forEach((x, i) => {
    if (x === e.srcElement) {
      id = i;
    }
  });
  elements[id].classList.remove(CLASS);
}
