const inputNumber = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

inputNumber.addEventListener('input', onInputEvent);
createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);

//задаємо змінну, далі вона буде змінюватись

let amount = 0;

//отримуемо число,що ввів користувач, і прирівнюємо до amount

function onInputEvent(e) {
  amount = e.target.value;
}

//в залежності від amount створюємо відповідну кількість боксів
//додаємо властивості, збільшуємо на 10px кожен бокс

function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    size += 10;

    boxes.append(box);
  }
}

//очищуємо бокси

function destroyBoxes() {
  boxes.innerHTML = '';
}

//отримуємо рандомні кольори

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//при кліку на кнопку Create - викликати функцію createBoxes та створити бокси

function onCreateBtnClick() {
  createBoxes(amount);
}

//при кліку на кнопку Create - викликати функцію destroyBoxes та видалити бокси

function onDestroyBtnClick() {
  destroyBoxes(amount);
}
