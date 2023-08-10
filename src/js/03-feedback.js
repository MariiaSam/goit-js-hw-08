import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(inputData, 500));
form.addEventListener('submit', handlerSubmit);

const object = {};

function inputData(evt) {
    object.email = email.value;
    object.message = message.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(object));
}

function handlerSubmit (evt) {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    evt.preventDefault();
    evt.currentTarget.resert();

    localStorage.removeItem('feedback-form-state');
}

