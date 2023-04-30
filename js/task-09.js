const buttonChange = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

buttonChange.addEventListener('click', randomHexColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function randomHexColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
}
