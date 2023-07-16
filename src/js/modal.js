export function modal(event) {
  console.log('modal -> event:', (event = true));
  const refs = {
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };

  if (event) {
    toggleModal();
    refs.closeModalBtn.addEventListener('click', toggleModal);
  }

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');

    if (!refs.modal.classList.contains('is-hidden')) {
      // Disable scroll
      refs.body.style.position = 'fixed';
      refs.body.style.top = 0;
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
}
