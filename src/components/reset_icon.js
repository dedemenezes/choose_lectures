const resetIcon = () => {
  const icon = getResetIcon();
  icon.addEventListener('click', () => {
    // resetCopyButton(getCopyButton());
    Array.from(getCheckboxInputs()).filter(input => input.checked).forEach((input) => {
      changeBackgroundColor(input);
      console.log(copyButton.classList);


      resetCopyButton(getCopyButton());
      input.checked = false;
    })
  })
}

resetIcon();
