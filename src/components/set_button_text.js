const setButtonText = (text = null) => {
  const btnText = getBtnText();
  if (text) {
    btnText.innerText = text;
  }
}
