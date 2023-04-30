const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

// decrementBtn.addEventListener('click', onDecrementBtnClick);

// function onDecrementBtnClick() {
//   counterValue -= 1;
//   value.textContent = counterValue;

// }

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});

// incrementBtn.addEventListener('click', onIncrementBtnClick);

// function onIncrementBtnClick() {
//   counterValue += 1;
//   value.textContent = counterValue;
// }
