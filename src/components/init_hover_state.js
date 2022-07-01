const addBorder = (event) => {
  // const btn = document.getElementById('message');
  event.currentTarget.classList.add('btn-ext--border');
}

const removeBorder = (event) => {
  event.currentTarget.classList.remove('btn-ext--border');
}

const initHoverState = (id = 'message') => {
  const btn = document.getElementById(id);
  btn.addEventListener('mouseenter', addBorder)
  btn.addEventListener('mouseleave', removeBorder)
}

initHoverState();
