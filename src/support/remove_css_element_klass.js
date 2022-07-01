const removeCssElementKlass = (element = null, cssKlass = null) => {
  if(element) {
    element.classList.remove(cssKlass);
  }
}
removeCssElementKlass();
