const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

// function onInputChange(e) {
//   output.textContent = e.target.value ? e.target.value.trim() : 'Anonymous';
// }

function onInputChange(e) {
  const inputValue = e.target.value.trim();
  output.textContent = inputValue ? inputValue : 'Anonymous';
}

// input.addEventListener('input', e => {
//   output.textContent = e.target.value ? e.target.value.trim() : 'Anonymous';
// });
