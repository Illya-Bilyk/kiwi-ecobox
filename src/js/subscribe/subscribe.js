import { modal } from '../modal';

const form = document.querySelector('#sub-form');

function submitForm(event) {
  form.validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
    },
  });
  modal(event.currentTarget.email.value);

  event.preventDefault();

  form.reset();
}

form.addEventListener('submit', submitForm);
