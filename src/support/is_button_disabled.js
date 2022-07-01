const isButtonDisabled = () => {
  const button = getCopyButton();
  if (button) {
    return button.classList.contains('btn-ext--disabled')
  }
}

// isButtonDisabled();
