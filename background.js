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
      'src/style_div_when_select_checkbox.js',
      'src/add_copy_to_clipboard_button.js',
      'src/copy_klasses_to_clipboard.js'
    ]
    // function: loadExtension
  });
});
