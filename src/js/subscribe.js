const form = document.querySelector('.sub-form');

function submitForm(event) {
  console.log(event.currentTarget.email.value);
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', submitForm);
