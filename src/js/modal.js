(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');

    const scrollY =
      document.documentElement.style.getPropertyValue('--scroll-y');

    if (!refs.modal.classList.contains('is-hidden')) {
      // Disable scroll
      refs.body.style.position = 'fixed';
      refs.body.style.top = 20;
    } else {
      // Enable scroll
      const scrollY = refs.body.style.top;
      refs.body.style.position = '';
      refs.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    window.addEventListener('scroll', () => {
      document.documentElement.style.setProperty(
        '--scroll-y',
        `${window.scrollY}px`
      );
    });
  }
})();
