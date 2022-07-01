

const resetCopyButton = (copyButton) => {
  setButtonDisableToFalse();
  setButtonText('Copy list');
  displayCopyIcon();
  displayStartTip();
  hideCopyingTip();
  hideResetIcon();
  hideResetTip();
  removeCssElementKlass(getCopyButton(), 'btn-ext--border_important');
}


const disableCopyButton = (copyButton) => {
  setButtonDisableToTrue();
  setButtonText('Copied! ✌️');
  hideCopyIcon();
  hideStartTip();
  displayCopyingTip();
  displayResetIcon();
}

const isButtonDisabled = (copyButton = null) => {
  const button = copyButton || getCopyButton()
  return button.classList.contains('btn-ext--disabled')
}

const manageState = () => {
  const copyButton = getCopyButton()
  if (btnHasText('Copy')) {
    if (!isButtonDisabled(copyButton)) {
      disableCopyButton(copyButton);
    }
  }
};

const manageCopyButtonState = () => {
  const copyButton = getCopyButton()

  copyButton.addEventListener('click', manageState)

  const inputs = getCheckboxInputs();


  inputs.forEach((input) => {
    input.addEventListener('change', (event) => {
      changeBackgroundColor(event.currentTarget)
      if (isButtonDisabled()) {
        resetCopyButton();
      };
    });
  });


  document.querySelector('#reset-icon').addEventListener('mouseover', (event) => {
    setButtonText('Reset');
    hideCopyingTip();
    displayResetTip();
    const copyButton = getCopyButton()
    removeCssElementKlass(copyButton, 'btn-ext--disabled');
    addCssElementKlass(copyButton, 'btn-ext--border_important');
  })

  document.querySelector('#reset-icon').addEventListener('mouseleave', (event) => {
    if(btnHasText('Reset')) {
      setButtonText('Copied! ✌️');
      displayCopyingTip();
      hideResetTip();
      addCssElementKlass(copyButton, 'btn-ext--disabled')
      removeCssElementKlass(copyButton, 'btn-ext--border_important');


    }
  })

  const icon = document.querySelector('#reset-icon');
  icon.addEventListener('click', () => {
    resetCopyButton();
    Array.from(inputs).filter(input => input.checked).forEach((input) => {
      changeBackgroundColor(input);
      input.checked = false;
    })
  })
};

manageCopyButtonState();
