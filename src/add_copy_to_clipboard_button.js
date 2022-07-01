const addCopyToClipboardButton = () => {
  const navMenuSection = document.querySelector('.navbar-collection.d-flex.flex-row-reverse.align-items-center')
  const btn = `<button id="message" class="btn-ext animated-bg">Copy classes to clipboard</button>`
  navMenuSection.insertAdjacentHTML('beforeend', btn)
};

addCopyToClipboardButton();
