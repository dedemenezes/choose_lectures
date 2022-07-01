const resetIcon = () => {
  const icon = document.querySelector('#reset-icon');
  icon.addEventListener('click', () => {
    resetCopyButton();
    Array.from(getCheckboxInputs()).filter(input => input.checked).forEach((input) => {
      changeBackgroundColor(input);
      input.checked = false;
    })
  })
}

resetIcon();
