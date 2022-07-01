const chosenKlasses = () => {
  const inputs = getCheckboxInputs();
  return Array.from(inputs)
    .filter(input => input.checked)
    .map(input => input.value);
};

const buildCalendar = () => {
  const user = document.querySelector('.menu-user .menu-panel-name').innerText;
  const klasses = chosenKlasses()
  calendar = {}
  klasses.forEach(klass => calendar[klass] = user);
  return calendar
};

const buildMessage = (calendar) => {
  return Object.entries(calendar).map(keyValue => keyValue.join(' - ')).join("\n")
};


const copyMessage = () => {
  const message = localStorage.getItem('message')
  navigator.clipboard.writeText(message)
};

const createList = () => {
  localStorage.setItem('message', buildMessage(buildCalendar()));
  copyMessage()
};


const copyKlassesToClipboard = () => {
  copyButton = getCopyButton()
  copyButton.addEventListener('click', () => {
    createList();
    manageState();
  })
}

copyKlassesToClipboard();
