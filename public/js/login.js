const form = document.querySelector('.form');
const nameInput = document.querySelector('.name');
const passwordInput = document.querySelector('.password');
const error = document.querySelector('.error');
const errorContainer = document.querySelector('.container__error');
const loader = document.querySelector('.container__loader');

const showError = (name, password, msg) => {
  errorContainer.classList.remove('hidden');
  if (msg) {
    return (error.textContent = msg);
  }

  if (!name && !password) {
    error.textContent = 'No name and password';
    return nameInput.focus();
  }

  if (!name) {
    error.textContent = 'Please provide a name!';
    return nameInput.focus();
  }

  if (!password) {
    error.textContent = 'Please provide a password!';
    return passwordInput.focus();
  }
};

const loginUser = async (name, password) => {
  loader.classList.remove('hidden');
  try {
    const res = await fetch({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!res.ok) throw new Error(res.statusText);
  } catch (err) {
    loader.classList.add('hidden');
    showError(null, null, err.message);
  }
};

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = nameInput.value;
  const password = passwordInput.value;

  if (!name || !password) return showError(name, password);
  errorContainer.classList.add('hidden');

  loginUser(name, password);
});
