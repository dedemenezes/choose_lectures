const disableCopyButton = (copyButton = null) => {
  if(copyButton) {
    setButtonDisableToTrue();
    setButtonText('Copied! ✌️');
    hideCopyIcon();
    hideStartTip();
    displayCopyingTip();
    displayResetIcon();
  }
}

disableCopyButton();
