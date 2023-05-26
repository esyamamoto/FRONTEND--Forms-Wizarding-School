const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();

  const emailInput = document.querySelector('input[name="email"]');
  const passwordInput = document.querySelector('input[name="password"]');

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const checkbox = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

checkbox.addEventListener('change', function() {
  submitButton.disabled = !this.checked;
});
