const manageState = () => {
  const copyButton = getCopyButton()
  if (btnHasText('Copy')) {
    if (!isButtonDisabled()) {
      disableCopyButton(copyButton);
    }
  }
};
