function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsPanel = document.querySelector('#controls');
const numberInput = controlsPanel.children[0];
const createButton = controlsPanel.children[1];
const destroyButton = controlsPanel.children[2];
const boxes = document.querySelector('#boxes');
let amount = 0;

numberInput.addEventListener('change', event => {
  amount = event.currentTarget.value;
  createButton.addEventListener('click', onCreateBoxes);
});

function onCreateBoxes() {
  const boxesArrey = [];
  for (let i = 0; i < amount; i += 1) {
    boxesArrey[i] = document.createElement('div');
    boxesArrey[i].style.width = `${30 + i * 10}px`;
    boxesArrey[i].style.height = `${30 + i * 10}px`;
    boxesArrey[i].style.backgroundColor = getRandomHexColor();
  }
  boxes.append(...boxesArrey);
}

function destroy() {
  boxes.innerHTML = '';
}

destroyButton.addEventListener('click', destroy);
