const setButtonDisableToTrue = (copyButton = null) => {
  const button = copyButton || getCopyButton()
  cssDisableKlasses.forEach(cssKlass => addCssElementKlass(button, cssKlass))
}



const setButtonText = (text) => {
  const btnText = copyButton.querySelector('#btn-copy-text');
  btnText.innerText = text;
}

const displayCopyIcon = () => {
  const icon = document.querySelector('#copy-icon')
  icon.classList.remove('d-none')
}

const hideCopyIcon = () => {
  const icon = document.querySelector('#copy-icon')
  icon.classList.add('d-none')
}

const displayStartTip = () => {
  const tip = document.querySelector('#start-tip')
  tip.classList.remove('d-none')
}

const hideStartTip = () => {
  const tip = document.querySelector('#start-tip')
  tip.classList.add('d-none')
}

const displayCopyingTip = () => {
  const copyingTip = document.querySelector('#copying-tip');
  copyingTip.classList.remove('d-none');
}

const hideCopyingTip = () => {
  const copyingTip = document.querySelector('#copying-tip');

  copyingTip.classList.add('d-none');
}

const displayResetIcon = () => {
  const resetIcon = document.querySelector('#reset-icon');
  resetIcon.classList.remove('d-none')
}

const hideResetIcon = () => {
  const resetIcon = document.querySelector('#reset-icon');
  resetIcon.classList.add('d-none')
}

const displayResetTip = () => {
  const resetTip = document.querySelector('#reset-tip');
  resetTip.classList.remove('d-none')
}

const hideResetTip = () => {
  const resetTip = document.querySelector('#reset-tip');
  resetTip.classList.add('d-none')
}

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

const backToDefault = (dayDiv) => {
  dayDiv.classList.remove('bg-purple');
};

const makeItPurple = (dayDiv) => {
  dayDiv.classList.add('bg-purple');
};

const changeBackgroundColor = (input) => {
  const dayDiv = input.parentElement.parentElement;
  if (dayDiv.classList.contains('bg-purple')) {
    backToDefault(dayDiv);
  } else {
    makeItPurple(dayDiv);
  };
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
