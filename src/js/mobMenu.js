(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mob-menu-open'),
    closeMenuBtn: document.querySelector('.mob-menu-close'),
    menu: document.querySelector('.mob-menu'),
    links: document.querySelector('.mob-menu--button'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.links.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
