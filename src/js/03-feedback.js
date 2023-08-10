import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('input[name="message"]');

form.addEventListener('input', throttle(inputData, 500));
form.addEventListener('submit', handlerSubmit);

// const object = {};

// function inputData(evt) {
//     object.email = email.value;
//     object.message = message.value;

//     localStorage.setItem('feedback-form-state', JSON.stringify(object));
// }

// function handlerSubmit (evt) {
//     console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
//     evt.preventDefault();
//     evt.currentTarget.resert();

//     localStorage.removeItem('feedback-form-state');
// }

