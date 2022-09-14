const buttonDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);
let counterValue = 0;

const counterRef = document.querySelector('#value');

buttonDecrementRef.addEventListener('click', () => {
  counterValue -= 1;
  counterRef.textContent = `${counterValue}`;
});
buttonIncrementRef.addEventListener('click', () => {
  counterValue += 1;
  counterRef.textContent = `${counterValue}`;
});
