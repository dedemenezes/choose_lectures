const setButtonDisableToFalse = (copyButton = null) => {
  const button = copyButton || getCopyButton()
  getCssDisableKlasses().forEach(cssKlass => removeCssElementKlass(button, cssKlass))
}
setButtonDisableToFalse();
