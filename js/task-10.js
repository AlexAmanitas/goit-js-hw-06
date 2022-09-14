function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsPanel = document.querySelector('#controls');
const numberInput = controlsPanel.children[0];
const createButton = controlsPanel.children[1];
const destroyButton = controlsPanel.children[2];
const boxes = document.querySelector('#boxes');

console.log(controlsPanel);
console.log(boxes, numberInput, createButton, destroyButton);
let numberOfBox = 0;

const onInput = () => {
  // console.log(event.currentTarget.value);
  numberOfBox = numberInput.value;
  console.log(numberOfBox, numberInput.value);
  return numberOfBox;
};

numberInput.addEventListener('blur', onInput);

console.log('nob', numberOfBox);
let amount = 5;

function onCreateBoxes(amount) {
  const boxesArrey = [];
  for (let i = 0; i < amount; i += 1) {
    boxesArrey[i] = document.createElement('div');
    boxesArrey[i].style.width = `${30 + i * 10}px`;
    boxesArrey[i].style.height = `${30 + i * 10}px`;
    boxesArrey[i].style.backgroundColor = getRandomHexColor();
    console.log(boxesArrey[i]);
  }
  boxes.append(...boxesArrey);
}

createButton.addEventListener('click', onCreateBoxes);
console.log(boxes.children);

function destroy() {
  boxes.innerHTML = '';
}

destroyButton.addEventListener('click', destroy);
