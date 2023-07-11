(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mob-menu-open'),
    closeMenuBtn: document.querySelector('.mob-menu-close'),
    menu: document.querySelector('.mob-menu'),
    link1: document.querySelector('#mob-menu--button1'),
    link2: document.querySelector('#mob-menu--button2'),
    link3: document.querySelector('#mob-menu--button3'),
    link4: document.querySelector('#mob-menu--button4'),
    link5: document.querySelector('#mob-menu--button5'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.link1.addEventListener('click', toggleMenu);
  refs.link2.addEventListener('click', toggleMenu);
  refs.link3.addEventListener('click', toggleMenu);
  refs.link4.addEventListener('click', toggleMenu);
  refs.link5.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
