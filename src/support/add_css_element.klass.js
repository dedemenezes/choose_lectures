const addCssElementKlass = (element = null, cssKlass = null) => {
  if (element) {
    element.classList.add(cssKlass);
  }
}
addCssElementKlass();
