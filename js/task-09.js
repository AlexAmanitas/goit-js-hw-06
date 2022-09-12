function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector('button');
const bgrColor = document.querySelector('.color');
const body = document.querySelector('body');

changeColorButton.addEventListener('click', __ => {
  body.style.background = getRandomHexColor();
  bgrColor.textContent = getRandomHexColor();
});
