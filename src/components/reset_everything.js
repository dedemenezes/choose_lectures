const resetEverything = () => {
  const icon = getResetIcon();
  icon.addEventListener('click', () => {
    resetCopyButton(getCopyButton());
    Array.from(getCheckboxInputs()).filter(input => input.checked).forEach((input) => {
      changeBackgroundColor(input);
      input.checked = false;
      navigator.clipboard.writeText('');
    })
  })
}
