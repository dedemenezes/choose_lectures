const displayCopyIcon = () => {
  const icon = getCopyIcon();
  icon.classList.remove('d-none')
}

const hideCopyIcon = () => {
  const icon = getCopyIcon();
  icon.classList.add('d-none')
}

const displayStartTip = () => {
  const tip = geStartTip()
  tip.classList.remove('d-none')
}

const hideStartTip = () => {
  const tip = geStartTip()
  tip.classList.add('d-none')
}

const displayCopyingTip = () => {
  const copyingTip = getCopyingTip();
  copyingTip.classList.remove('d-none');
}

const hideCopyingTip = () => {
  const copyingTip = getCopyingTip();

  copyingTip.classList.add('d-none');
}

const displayResetIcon = () => {
  getResetIcon().classList.remove('d-none')
}

const hideResetIcon = () => {
  getResetIcon().classList.add('d-none')
}

const displayResetTip = () => {
  const resetTip = document.querySelector('#reset-tip');
  resetTip.classList.remove('d-none')
}

const hideResetTip = () => {
  const resetTip = document.querySelector('#reset-tip');
  resetTip.classList.add('d-none')
}
