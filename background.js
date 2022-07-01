chrome.action.onClicked.addListener(function(tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: [
      'src/support/css_disable_klasses.js',
      'src/support/remove_css_element_klass.js',
      'src/support/add_css_element.klass.js',
      'src/support/get_copying_tip.js',
      'src/support/get_start_tip.js',
      'src/support/get_copy_icon.js',
      'src/support/getCopyButton.js',
      'src/support/getCheckboxInputs.js',
      'src/support/get_btn_text.js',
      'src/components/set_button_text.js',
      'src/components/set_button_disable_to_true.js',
      'src/components/set_button_disable_to_false.js',
      'src/components/hide_and_seek.js',
      'src/display_checkbox.js',
      'src/components/change_background.js',
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
