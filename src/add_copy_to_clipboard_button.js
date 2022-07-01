const addCopyToClipboardButton = () => {
  const navMenuSection = document.querySelector('.navbar-collection.d-flex.flex-row-reverse.align-items-center')
  const content = `
    <div class='menu-trigger-content'>
      <span class='menu-trigger-content-label' id='btn-copy-text'>Copy list</span>
      <span class='menu-trigger-content-city d-none' id='copying-tip'>Now, ctrl + v =)</span>
      <span class='menu-trigger-content-city d-none' id='reset-tip'>lose everything</span>
      <span class='menu-trigger-content-city' id='start-tip'>to clipboard</span>
    </div>
    <i class="fas fa-copy text-white" id='copy-icon'></i>
  `
  const btnHTML = `
    <div id='btn-wrapper'>
      <button id="message" class="menu-trigger animated-bg">
        ${content}
      </button>
      <i class="fas fa-undo text-dark d-none" id='reset-icon'></i>
    </div>
  `
  navMenuSection.insertAdjacentHTML('beforeend', btnHTML)
};

addCopyToClipboardButton();
