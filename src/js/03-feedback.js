import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(inputData, 500));
form.addEventListener('submit', handleSubmit);

function inputData(evt) {
  const data = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function handleSubmit(evt) {
  evt.preventDefault();
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(savedData);

  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
};
