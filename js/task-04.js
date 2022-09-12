let counterValue = 0;
const buttonsRef = document.querySelectorAll('#counter button');

const counterRef = document.querySelector('#value');

buttonsRef[1].addEventListener('click', () => {
  counterValue += 1;
  counterRef.textContent = `${counterValue}`;
});

buttonsRef[0].addEventListener('click', () => {
  counterValue -= 1;
  counterRef.textContent = `${counterValue}`;
});
