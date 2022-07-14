(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const bodyScroll = document.querySelector('body');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-opn');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    bodyScroll.classList.toggle('no-scroll-menu');
    mobileMenuRef.classList.toggle('is-opn');
  });
})();
