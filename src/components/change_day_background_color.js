const changeDayBackgroundColor = () => {
  const inputs = getCheckboxInputs();
  inputs.forEach((input) => {
    input.addEventListener('change', (event) => {
      changeBackgroundColor(event.currentTarget)
      if (isButtonDisabled()) {
        resetCopyButton(getCopyButton());
      };
    });
  });

}
