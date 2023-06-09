const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', onInputBlur);

function onInputBlur(e) {
  const inputValue = e.target.value.length;
  const requiredLength = validationInput.dataset.length.trim();
  const numberValue = Number(requiredLength);
  if (inputValue === numberValue) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
}
