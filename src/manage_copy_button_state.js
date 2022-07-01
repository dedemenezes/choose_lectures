const resetCopyButton = (copyButton) => {
  console.log('hi reset')

  copyButton.disabled = false
  copyButton.classList.remove('btn-ext--bg-purple')
  copyButton.classList.remove('btn-ext--disabled')
  console.log(copyButton)
  const btnText = copyButton.querySelector('#btn-copy-text')
  btnText.innerText = 'Copy list'
  const icon = copyButton.querySelector('#copy-icon')
  icon.classList.remove('d-none')
  const tip = copyButton.querySelector('#copy-tip')
  tip.classList.remove('d-none')
  copyButton.querySelector('#ctrl-v').classList.add('d-none')
  document.querySelector('#reset-icon').classList.add('d-none')
}

const disableCopyButton = () => {
  console.log('hi disable')

  copyButton.disabled = true
  copyButton.classList.add('btn-ext--bg-purple')
  copyButton.classList.add('btn-ext--disabled')
  const btnText = copyButton.querySelector('#btn-copy-text')
  btnText.innerText = 'Copied! ✌️'
  const tip = copyButton.querySelector('#copy-tip')
  tip.classList.add('d-none')
  const icon = copyButton.querySelector('#copy-icon')
  icon.classList.add('d-none')
  copyButton.querySelector('#ctrl-v').classList.remove('d-none')
  document.querySelector('#reset-icon').classList.remove('d-none')
}

const manageState = (event) => {
  const copyButton = document.querySelector('#message');

  if (copyButton.disabled) {
    resetCopyButton(copyButton);
  } else {
    disableCopyButton(copyButton);
  }
};

const manageCopyButtonState = () => {
  const inputs = document.querySelectorAll('input[type="checkbox"]');
  const copyButton = document.querySelector('#message');
  inputs.forEach((input) => {
    input.addEventListener('change', () => {
      if (copyButton.disabled) {
        manageState();
      };
    });
  });
  copyButton.addEventListener('click', manageState)

};

manageCopyButtonState();
