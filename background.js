chrome.action.onClicked.addListener(function(tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: [
      'src/support/css_disable_klasses.js',
      'src/support/remove_css_element_klass.js',
      'src/support/add_css_element.klass.js',
      'src/support/getCopyButton.js',
      'src/support/getCheckboxInputs.js',
      'src/support/set_button_disable_to_false.js',
      'src/display_checkbox.js',
      // 'src/checkbox_state.js',
      'src/add_copy_to_clipboard_button.js',
      'src/support/btn_has_text.js',
      'src/copy_klasses_to_clipboard.js',
      'src/manage_hover_state.js',
      'src/manage_copy_button_state.js',
      'src/components/reset_icon.js',
      'src/extension_css.js'
    ]
  });
});
