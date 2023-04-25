import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInputEl = form.querySelector('input[name="email"]');
const messageInputEl = form.querySelector('textarea[name="message"]');

const storageKey = 'feedback-form-state';
const localStorageThrottle = throttle(saveLocalStorage, 500);

function saveLocalStorage () {
    const state = {
    email: emailInputEl.value,
    message: messageInputEl.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(state));
};


function onFormSubmit(e) {
    e.preventDefault();
    console.log({ email: emailInputEl.value, message: messageInputEl.value });
      if (emailInputEl.value === '' || messageInputEl.value === '') {
      return alert('Введите данные');
    }  
    e.currentTarget.reset();
  }

  const onPageReload = () => {
    const state = JSON.parse(localStorage.getItem(storageKey));
    // console.log(state)
    if (state) {
        emailInputEl.value = state.email;
        messageInputEl.value = state.message ;
    };
};

form.addEventListener('input', localStorageThrottle);
form.addEventListener('submit', onFormSubmit)
onPageReload();



