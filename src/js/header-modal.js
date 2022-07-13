const refs = {
  openModalBtn: document.querySelectorAll('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
};

refs.openModalBtn[0].addEventListener('click', toggleModal);
refs.openModalBtn[1].addEventListener('click', toggleModal);
refs.openModalBtn[2].addEventListener('click', toggleModal);
refs.openModalBtn[3].addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('hidden');
  refs.body.classList.toggle('no-scroll-mod');
}
