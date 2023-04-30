const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControl.addEventListener('input', e => {
  const fontSize = e.target.value;
  text.style.fontSize = `${fontSize}px`;
});
