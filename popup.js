const listenClick = () => {
  // const button = document.getElementById('display-checkboxes');
  // button.addEventListener('click', () => {
  //   chrome.tabs.executeScript({
  //     file: 'scripts/display_checkboxes.js'
  //   })
  // })
  // const createList = document.getElementById('create-list');
  // createList.addEventListener('click', () => {
  //   chrome.tabs.executeScript({
  //     file: 'scripts/create_list.js'
  //   })
  // })
  const calendarClasses = document.getElementById('calendar');
  calendarClasses.addEventListener('click', () => {
    chrome.tabs.executeScript({
      file: 'scripts/init_calendar.js'
    })
    // chrome.tabs.executeScript({
    //   file: 'scripts/create_list.js'
    // })
  })
}
listenClick();
