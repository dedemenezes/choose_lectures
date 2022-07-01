const initResetIcon = () => {
  getResetIcon().addEventListener('mouseover', (event) => {
    setButtonText('Reset');
    hideCopyingTip();
    displayResetTip();
    const copyButton = getCopyButton()
    removeCssElementKlass(copyButton, 'btn-ext--disabled');
    addCssElementKlass(copyButton, 'btn-ext--border_important');
  })

  getResetIcon().addEventListener('mouseleave', (event) => {
    if (btnHasText('Reset')) {
      setButtonText('Copied! ✌️');
      displayCopyingTip();
      hideResetTip();
      addCssElementKlass(copyButton, 'btn-ext--disabled')
      removeCssElementKlass(copyButton, 'btn-ext--border_important');
    }
  })
  
  resetEverything()
}
