const setButtonDisableToTrue = (copyButton = null) => {
  const button = copyButton || getCopyButton()
  getCssDisableKlasses().forEach(cssKlass => addCssElementKlass(button, cssKlass))
}

setButtonDisableToTrue();
