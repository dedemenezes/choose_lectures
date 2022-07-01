const addBorder = (event) => {
  event.currentTarget.classList.add('btn-ext--border')
}

const removeBorder = (event) => {
  event.currentTarget.classList.remove('btn-ext--border')
}

const manageHoverState = () => {
  btn = document.getElementById('message');
  btn.addEventListener('mouseenter', addBorder)
  btn.addEventListener('mouseleave', removeBorder)
}

manageHoverState();
