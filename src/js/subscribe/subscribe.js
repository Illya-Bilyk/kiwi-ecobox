import { modal } from '../modal';

const form = document.querySelector('#sub-form');

function submitForm(event) {
  modal(event.currentTarget.email.value);
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', submitForm);
