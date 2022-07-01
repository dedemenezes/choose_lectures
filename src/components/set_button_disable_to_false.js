const setButtonDisableToFalse = (copyButton = null) => {
  const button = copyButton || getCopyButton()
  cssDisableKlasses.forEach(cssKlass => removeCssElementKlass(button, cssKlass))
}
setButtonDisableToFalse();
