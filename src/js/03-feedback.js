import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(inputData, 500));
form.addEventListener('submit', handlerSubmit);

function inputData(evt) {
  const data = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function handlerSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function reloadPage() {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedData) {
    email.value = savedData.email || '';
    message.value = savedData.message || '';
  };
};
reloadPage();
