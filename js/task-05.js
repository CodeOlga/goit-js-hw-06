const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', e => {
  output.textContent = e.target.value.trim();
});

// input.addEventListener('input', onInputChange);

// function onInputChange(event) {
//   output.textContent = event.target.value.trim();
// }
