const addBorder = (event) => {
  event.currentTarget.style.border = '1px solid white'
  if (event.currentTarget.innerText.includes('!')) {
    event.currentTarget.innerText = "Reset";
  }
}

const removeBorder = (event) => {
  event.currentTarget.style.border = ''
}

const manageHoverState = () => {
  btn = document.getElementById('message');
  btn.addEventListener('mouseenter', addBorder)
  btn.addEventListener('mouseleave', removeBorder)
}

manageHoverState();
