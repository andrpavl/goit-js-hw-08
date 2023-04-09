import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const saveInLocal = throttle(() => {
  const inputData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
}, 500);
 
emailInput.addEventListener('input', saveInLocal);
messageInput.addEventListener('input', saveInLocal);

const loadFromLocal = localStorage.getItem('feedback-form-state');
if (loadFromLocal) {
    JSON.parse(loadFromLocal) ?? [];
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const inputData = {
        email: emailInput.value,    
        message: messageInput.value,
      };
    console.log(inputData);
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
  });
