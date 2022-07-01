// const loadExtension = () => {
//   try {
//     importScripts(
//       'src/display_checkbox.js',
//       'src/style_div_when_select_checkbox.js',
//       'src/add_copy_to_clipboard_button.js',
//       'src/copy_klasses_to_clipboard.js'
//     );
//   } catch (e) {
//     console.error(e);
//   }
// }


chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: [
      'src/display_checkbox.js',
      // 'src/checkbox_state.js',
      'src/add_copy_to_clipboard_button.js',
      'src/copy_klasses_to_clipboard.js',
      'src/manage_hover_state.js',
      'src/manage_copy_button_state.js',
      'src/extension_css.js'
    ]
    // function: loadExtension
  });
});
