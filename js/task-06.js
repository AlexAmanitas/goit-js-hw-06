const inputRef = document.querySelector('input');

inputRef.addEventListener('blur', event => {
  inputRef.classList.remove('valid');
  inputRef.classList.remove('invalid');
  return event.currentTarget.value.length >= +inputRef.dataset.length
    ? inputRef.classList.toggle('valid')
    : inputRef.classList.toggle('invalid');
});
