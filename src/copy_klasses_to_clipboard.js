const chosenKlasses = () => {
  const inputs = document.querySelectorAll('input[type="checkbox"]');
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

// const manageState = (event) => {
//   // const purple = "rgb(180, 26, 188)";
//   event.currentTarget.disabled = true
//   event.currentTarget.classList.add('btn-ext--bg-purple')
//   event.currentTarget.classList.add('btn-ext--disabled')
//   btnText = document.getElementById('btn-copy-text')
//   tip = document.getElementById('start-tip')
//   icon = document.getElementById('copy-icon')
//   btnText.innerText = 'Copied! ✌️'
//   document.getElementById('copying-tip').classList.remove('d-none')
//   icon.classList.add('d-none')
//   tip.classList.add('d-none')
// }

const createList = (event) => {
  localStorage.setItem('message', buildMessage(buildCalendar()));
  copyMessage()
  // manageState(event)
  // event.currentTarget.disabled = true
  // event.currentTarget.classList.add('btn-ext--bg-purple')
  // event.currentTarget.classList.add('btn-ext--disabled')
  // btnText = document.getElementById('btn-copy-text')
  // tip = document.getElementById('start-tip')
  // icon = document.getElementById('copy-icon')
  // btnText.innerText = 'Copied! ✌️'
  // document.getElementById('copying-tip').classList.remove('d-none')
  // icon.classList.add('d-none')
  // tip.classList.add('d-none')
};


const copyKlassesToClipboard = () => {
  copyButton = document.getElementById('message');
  copyButton.addEventListener('click', createList)
}

copyKlassesToClipboard();
