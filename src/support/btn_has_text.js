const btnHasText = (text = '') => {
  const btn = getCopyButton();
  const btnText = btn.querySelector('#btn-copy-text');
  return btnText.innerText.includes(text);
}
