const backToDefault = (dayDiv) => {
  dayDiv.classList.remove('bg-purple');
};

const makeItPurple = (dayDiv) => {
  dayDiv.classList.add('bg-purple');
};

const changeBackgroundColor = (event) => {
  // event.currentTarget.style.backgroundColor = '#611365'
  const dayDiv = event.currentTarget.parentElement.parentElement;
  if (dayDiv.classList.contains('bg-purple')) {
    backToDefault(dayDiv);
  } else {
    makeItPurple(dayDiv);
  };
};

// const resetCopyButton = () => {
//   copyButton = document.getElementById('message');

//   copyButton.disabled = false
//   copyButton.classList.remove('btn-ext--bg-purple')
//   copyButton.classList.remove('btn-ext--disabled')
//   btnText = document.getElementById('btn-copy-text')
//   tip = document.getElementById('start-tip')
//   icon = document.getElementById('copy-icon')
//   icon.classList.remove('d-none')
//   tip.classList.remove('d-none')
//   btnText.innerText = 'Copy list'
//   document.getElementById('copying-tip').classList.add('d-none')
// }

const changeCheckbox = (input) => {
  input.addEventListener('change', (event) => {
    // resetCopyButton()
    changeBackgroundColor(event)
  })
};


const styleDayDivWhenSelectCheckbox = () => {
  const inputs = document.querySelectorAll('input[type="checkbox"]');
  inputs.forEach(changeCheckbox);
};

styleDayDivWhenSelectCheckbox();
