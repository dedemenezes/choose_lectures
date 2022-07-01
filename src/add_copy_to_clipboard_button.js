const addCopyToClipboardButton = () => {
  const styling = "background-color: #23262b; color: white; font-weight: bold; padding: 0 12px;transition: all .5s ease;"
  const navMenuSection = document.querySelector('.navbar-collection.d-flex.flex-row-reverse.align-items-center')
  const btn = `<button id="message" style="${styling}">Copy classes to clipboard</button>`
  navMenuSection.insertAdjacentHTML('beforeend', btn)
};

addCopyToClipboardButton();
