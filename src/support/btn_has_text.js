const btnHasText = (text = '') => {
  const btnText = getCopyButton().querySelector('#btn-copy-text');
  return btnText.innerText.includes(text);
}

btnHasText();
