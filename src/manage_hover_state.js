const addBorder = (event) => {
  // event.currentTarget.style.border = '1px solid white'
  event.currentTarget.classList.add('btn-ext--border')
  if (event.currentTarget.innerText.includes('!')) {
    event.currentTarget.innerText = "Reset";
  }
}

const removeBorder = (event) => {
  // event.currentTarget.style.border = ''
  event.currentTarget.classList.remove('btn-ext--border')
  if (event.currentTarget.innerText.includes('Reset')) {
    event.currentTarget.innerText = "Clicked! ✌️";
  }
}

const addResetButton = (event) => {
  copyIcon = document.querySelector('#copy-icon');
  if (copyIcon.classList.contains('d-none')) {
    document.querySelector('#reset-icon').classList.remove('d-none')
  }
};

const removeResetButton = (event) => {
  if (copyIcon.classList.contains('d-none')) {
    document.querySelector('#reset-icon').classList.add('d-none')
  }
};
const manageHoverState = () => {
  btn = document.getElementById('message');
  btn.addEventListener('mouseenter', addBorder)
  btn.addEventListener('mouseleave', removeBorder)

  // btnWraper = document.querySelector('#btn-wrapper');
  // btnWraper.addEventListener('mouseover', addResetButton)
  // btnWraper.addEventListener('mouseleave', removeResetButton)
}

manageHoverState();
