const form = document.querySelector('.form');
const body = document.querySelector('body');
const nameInput = document.querySelector('.name');
const passwordInput = document.querySelector('.password');
const error = document.querySelector('.error');
const errorContainer = document.querySelector('.container__error');
const loader = document.querySelector('.container__loader');
const notificationAudio = new Audio('/audio/notification.mp3');

const notify = (type, message) => {
  notificationAudio.play();
  const errorEl = document.createElement('div');
  errorEl.classList.add(type === 'success' ? 'notification__success' : 'notification__error');
  errorEl.textContent = message;
  body.appendChild(errorEl);
  setTimeout(() => {
    errorEl.parentElement.removeChild(errorEl);
  }, 5000);
};

const validationError = (name, password, msg) => {
  if (msg) {
    return (error.textContent = msg);
  }

  if (!name && !password) {
    notify('error', 'No name and password');
    return nameInput.focus();
  }

  if (!name) {
    notify('error', 'Please provide a name!');
    return nameInput.focus();
  }

  if (!password) {
    notify('error', 'Please provide a password!');
    return passwordInput.focus();
  }
};

const loginUser = async (name, password) => {
  loader.classList.remove('hidden');
  console.log(JSON.stringify({ name, password }));
  try {
    const res = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, password })
    });
    const data = await res.json();
    console.log(data);
    if (!res.ok) throw new Error(data.message);
    notify('success', 'Welcome back!');
  } catch (err) {
    loader.classList.add('hidden');
    notify('error', err.message);
  }
};

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = nameInput.value;
  const password = passwordInput.value;

  if (!name || !password) return validationError(name, password);
  errorContainer.classList.add('hidden');

  loginUser(name, password);
});
