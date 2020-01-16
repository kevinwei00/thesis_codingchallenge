function revealHamburger() {
  const menu = document.querySelector('.hamburger__menu');
  const icon = document.querySelector('.hamburger__icon').firstElementChild;
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    icon.className = 'fas fa-bars fa-3x';
  } else {
    menu.style.display = 'block';
    icon.className = 'fas fa-times-circle fa-3x';
  }
}

function togglePasswordView() {
  const passwordField = document.querySelector('#password');
  const icon = document.querySelector('.password-view-icon').firstElementChild;
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    icon.className = 'fas fa-eye fa-2x';
  } else {
    passwordField.type = 'password';
    icon.className = 'fas fa-eye-slash fa-2x';
  }
}
