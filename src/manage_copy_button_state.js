const setButtonText = (text) => {
  const btnText = copyButton.querySelector('#btn-copy-text');
  btnText.innerText = text;
}

const setButtonDisableToTrue = (copyButton = null) => {
  const button = copyButton || document.querySelector('#message');
  button.classList.add('btn-ext--bg-purple')
  button.classList.add('btn-ext--disabled')
  button.classList.add('btn-ext--disabled-border')
  button.classList.add('btn-ext--disabled-cursor')
}

const setButtonDisableToFalse = (copyButton = null) => {
  const button = copyButton || document.querySelector('#message');
  button.classList.remove('btn-ext--bg-purple')
  button.classList.remove('btn-ext--disabled')
  button.classList.remove('btn-ext--disabled-border')
  button.classList.remove('btn-ext--disabled-cursor')
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
  const copyingTip = copyButton.querySelector('#copying-tip');
  copyingTip.classList.remove('d-none');
}

const hideCopyingTip = () => {
  const copyingTip = copyButton.querySelector('#copying-tip');
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
  // console.log('RESETTTTTTTTT')
  setButtonDisableToFalse();
  setButtonText('Copy list');
  displayCopyIcon();
  displayStartTip();
  hideCopyingTip();
  hideResetIcon();
}


const disableCopyButton = (copyButton) => {
  // console.log('hi disable')
  setButtonDisableToTrue();
  setButtonText('Copied! ✌️');
  hideCopyIcon();
  hideStartTip();
  displayCopyingTip();
  displayResetIcon();
}

const isButtonDisabled = (copyButton = null) => {
  const button = copyButton || document.querySelector('#message');
  return button.classList.contains('btn-ext--disabled')
}

const manageState = () => {
  const copyButton = document.querySelector('#message');
  if (isButtonDisabled(copyButton)) {
    resetCopyButton(copyButton);
  } else {
    disableCopyButton(copyButton);
  }
};

const resetButtonIfChangeCheckbox = (input) => {
  input.addEventListener('change', () => {
    if (isButtonDisabled()) {
      resetCopyButton();
    };
  });
}

const manageCopyButtonState = () => {
  const copyButton = document.querySelector('#message');
  copyButton.addEventListener('click', manageState)

  const inputs = document.querySelectorAll('input[type="checkbox"]');
  inputs.forEach(resetButtonIfChangeCheckbox);


  document.querySelector('#reset-icon').addEventListener('mouseover', (event) => {
    setButtonText('Reset');
    hideCopyingTip()
    displayResetTip()
  })
  document.querySelector('#reset-icon').addEventListener('mouseleave', (event) => {
    setButtonText('Copied! ✌️');
    displayCopyingTip()
    hideResetTip()
  })
};

manageCopyButtonState();
