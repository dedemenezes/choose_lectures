const setButtonText = (text) => {
  const btnText = copyButton.querySelector('#btn-copy-text');
  btnText.innerText = text;
}

const setButtonDisableToTrue = (copyButton) => {
  copyButton.disabled = true
  copyButton.classList.add('btn-ext--bg-purple')
  copyButton.classList.add('btn-ext--disabled')
  copyButton.classList.add('btn-ext--disabled-border')
}

const setButtonDisableToFalse = (copyButton) => {
  copyButton.disabled = false
  copyButton.classList.remove('btn-ext--bg-purple')
  copyButton.classList.remove('btn-ext--disabled')
  copyButton.classList.remove('btn-ext--disabled-border')
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
  const ctrlV = copyButton.querySelector('#copying-tip');
  ctrlV.classList.add('d-none');
}

const displayResetIcon = () => {
  const resetIcon = document.querySelector('#reset-icon');
  resetIcon.classList.remove('d-none')
}

const hideResetIcon = () => {
  const resetIcon = document.querySelector('#reset-icon');
  resetIcon.classList.add('d-none')
}

const resetCopyButton = (copyButton) => {
  // console.log('RESETTTTTTTTT')
  setButtonDisableToFalse(copyButton);
  setButtonText('Copy list');
  displayCopyIcon();
  displayStartTip();
  hideCopyingTip();
  hideResetIcon();
}


const disableCopyButton = (copyButton) => {
  // console.log('hi disable')
  setButtonDisableToTrue(copyButton);
  setButtonText('Copied! ✌️');
  hideCopyIcon();
  hideStartTip();
  displayCopyingTip();
  displayResetIcon();
}

const manageState = (event) => {
  const copyButton = document.querySelector('#message');

  if (copyButton.disabled) {
    resetCopyButton(copyButton);
  } else {
    disableCopyButton(copyButton);
  }
};

const resetButtonIfChangeCheckbox = (input) => {
  input.addEventListener('change', () => {
    if (copyButton.disabled) {
      manageState();
    };
  });
}

const manageCopyButtonState = () => {
  const copyButton = document.querySelector('#message');
  copyButton.addEventListener('click', manageState)

  const inputs = document.querySelectorAll('input[type="checkbox"]');
  inputs.forEach(resetButtonIfChangeCheckbox);


  document.querySelector('#reset-icon').addEventListener('mouseover', (event) => {
    const btnText = copyButton.querySelector('#btn-copy-text');
    btnText.innerText = 'Reset';
    const ctrlV = copyButton.querySelector('#copying-tip')
    ctrlV.classList.add('d-none')
    const resetTip = copyButton.querySelector('#reset-tip')
    resetTip.classList.remove('d-none')
  })
  document.querySelector('#reset-icon').addEventListener('mouseleave', (event) => {
    const btnText = copyButton.querySelector('#btn-copy-text')
    btnText.innerText = 'Copied! ✌️'
    const ctrlV = copyButton.querySelector('#copying-tip')
    ctrlV.classList.remove('d-none')
    const resetTip = copyButton.querySelector('#reset-tip')
    resetTip.classList.add('d-none')
  })
};

manageCopyButtonState();
