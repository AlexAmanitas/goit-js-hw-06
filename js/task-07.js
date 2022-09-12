const rangeInput = document.querySelector('#font-size-control');

const textOutput = document.querySelector('#text');

rangeInput.addEventListener('change', event => {
  textOutput.style.fontSize = `${event.currentTarget.value}px`;
});
