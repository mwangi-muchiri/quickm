const authTabs = document.querySelectorAll('[data-auth-mode]');
const signupPanel = document.getElementById('signupPanel');
const loginPanel = document.getElementById('loginPanel');
const authMessage = document.getElementById('authMessage');
const signupPassword = document.getElementById('signupPassword');
const confirmPassword = document.getElementById('confirmPassword');

function setAuthMode(mode) {
  const isSignup = mode === 'signup';
  signupPanel.hidden = !isSignup;
  loginPanel.hidden = isSignup;
  authTabs.forEach((tab) => {
    const isActive = tab.dataset.authMode === mode;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });
  authMessage.textContent = '';
}

function validatePasswordMatch() {
  confirmPassword.setCustomValidity(
    confirmPassword.value && confirmPassword.value !== signupPassword.value
      ? 'Passwords do not match.'
      : ''
  );
}

authTabs.forEach((tab) => {
  tab.addEventListener('click', () => setAuthMode(tab.dataset.authMode));
});

signupPassword.addEventListener('input', validatePasswordMatch);
confirmPassword.addEventListener('input', validatePasswordMatch);

signupPanel.addEventListener('submit', (event) => {
  event.preventDefault();
  validatePasswordMatch();
  if (!signupPanel.reportValidity()) return;

  authMessage.textContent = 'Your details look good, but account creation is not connected yet. Nothing was sent or saved.';
  signupPanel.reset();
  confirmPassword.setCustomValidity('');
});

loginPanel.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!loginPanel.reportValidity()) return;

  authMessage.textContent = 'Login is not connected yet. Your details were not sent or saved.';
  loginPanel.reset();
});

setAuthMode(window.location.hash === '#login' ? 'login' : 'signup');
