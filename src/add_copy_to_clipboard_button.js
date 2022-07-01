const mainButton = (state) => {
  // const copyingTip = document.querySelector('#copying-tip');
  // const isVisible = copyingTip.dataset.isVisible === 'true';
  // console.log(isVisible);
  // const options = ['copying', 'reset', 'start']
  // const option = options.filter(option => state === option)
  const content = `
    <div class='menu-trigger-content'>
      <span class='menu-trigger-content-label' id='btn-copy-text'>Copy list</span>
      <span data-is-visible='false' class='menu-trigger-content-city ${state['copyingTip']}' id='copying-tip'>Now, ctrl + v =)</span>
      <span data-is-visible='false' class='menu-trigger-content-city ${state['resetTip']}' id='reset-tip'>lose everything</span>
      <span data-is-visible='true' class='menu-trigger-content-city ${state['startTip']}' id='start-tip'>to clipboard</span>
    </div>
    <i class="fas fa-copy text-white" id='copy-icon'></i>
  `
  const btnHTML = `
    <div id='btn-wrapper'>
      <button id="message" class="menu-trigger animated-bg">
        ${content}
      </button>
      <i class="fas fa-undo text-dark ${state['resetIcon']}" id='reset-icon'></i>
    </div>
  `
  return btnHTML
}


const addCopyToClipboardButton = () => {
  const navMenuSection = document.querySelector('.navbar-collection.d-flex.flex-row-reverse.align-items-center')
  const start = {
    'startTip': '',
    'copyingTip': 'd-none',
    'resetTip': 'd-none',
    'resetIcon': 'd-none'
  }
  navMenuSection.insertAdjacentHTML('beforeend', mainButton(start))
};

addCopyToClipboardButton();
