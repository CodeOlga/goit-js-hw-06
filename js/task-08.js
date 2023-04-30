const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const formElements = e.target.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (!email || !password) {
    alert('Всі поля повинні бути заповнені!');
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);

    loginForm.reset();
  }
}
