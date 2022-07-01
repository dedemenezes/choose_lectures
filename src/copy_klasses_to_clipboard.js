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

const createList = (event) => {
  localStorage.setItem('message', buildMessage(buildCalendar()));
  copyMessage()
  const purple = "rgb(180, 26, 188)";
  event.currentTarget.style.backgroundColor = purple
  event.currentTarget.innerText = 'Copied! ✌️'
};

const addBorder = (event) => {
  event.currentTarget.style.border = '1px solid white'
}

const removeBorder = (event) => {
  event.currentTarget.style.border = ''
}

const manageHoverState = (btn) => {
  btn.addEventListener('mouseenter', addBorder)
  btn.addEventListener('mouseleave', removeBorder)
}

const copyKlassesToClipboard = () => {
  copyButton = document.getElementById('message');
  manageHoverState(copyButton);
  copyButton.addEventListener('click', createList)
}

copyKlassesToClipboard();
