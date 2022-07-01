const resetCopyButton = (copyButton = null) => {
  if(copyButton){
    setButtonDisableToFalse();
    setButtonText('Copy list');
    displayCopyIcon();
    displayStartTip();
    hideCopyingTip();
    hideResetIcon();
    hideResetTip();
    removeCssElementKlass(getCopyButton(), 'btn-ext--border_important');
  }
}


// resetCopyButton(getCopyButton());
