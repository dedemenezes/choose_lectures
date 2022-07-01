const setButtonDisableToTrue = (copyButton = null) => {
  const button = copyButton || getCopyButton()
  cssDisableKlasses.forEach(cssKlass => addCssElementKlass(button, cssKlass))
}

setButtonDisableToTrue();
