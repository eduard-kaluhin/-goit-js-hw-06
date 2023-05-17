const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputChange);

function onInputChange(event) {
  const inputValue = event.target.value;
  const dataLength = event.target.getAttribute('data-length');
  const isValid = inputValue.length === Number(dataLength);

  if (isValid) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
}