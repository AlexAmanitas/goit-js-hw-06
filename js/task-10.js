function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  numberInput: document.querySelector('input'),
  createButton: document.querySelector('button[data-create]'),
  destroyButton: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};
let amount = 0;

refs.numberInput.addEventListener('change', event => {
  amount = event.currentTarget.value;
  refs.createButton.addEventListener('click', onCreateBoxes);
});

function onCreateBoxes() {
  const boxesArrey = [];
  for (let i = 0; i < amount; i += 1) {
    boxesArrey[i] = document.createElement('div');
    boxesArrey[i].style.width = `${30 + i * 10}px`;
    boxesArrey[i].style.height = `${30 + i * 10}px`;
    boxesArrey[i].style.backgroundColor = getRandomHexColor();
  }
  refs.boxes.append(...boxesArrey);
}

function destroy() {
  boxes.innerHTML = '';
}

refs.destroyButton.addEventListener('click', destroy);
