const addCheckbox = (day) => {
  day.style.transition = "all .5s ease-in-out";
  console.log(day)
  const klass = day.querySelector('.calendar-day-name')
  const week = day.parentElement.previousElementSibling.innerText
  const value = klass.innerText.trim();
  const checkbox = `<input type='checkbox' data-week='${week.replace(" ", "_")}' value='${value}' style='margin: 0 24px;'>`
  day.insertAdjacentHTML('beforeend', checkbox)
}

const displayCheckboxes = () => {
  days = document.querySelectorAll('.calendar-day')
  days.forEach(addCheckbox)
}

const changeBackgroundColor = (event) => {
  // event.currentTarget.style.backgroundColor = '#611365'
  dayDiv = event.currentTarget.parentElement;
  const bgPurple = "rgba(180, 26, 188, 0.404)";
  const bgDefault = "#F7F7F7";
  if (dayDiv.classList.contains('bg-purple')) {
    dayDiv.style.backgroundColor = bgDefault
    dayDiv.classList.remove('bg-purple')
  } else {
    dayDiv.style.backgroundColor = bgPurple
    dayDiv.classList.add('bg-purple')
  };
  // console.log(event.currentTarget.parentElement.style.backgroundColor)
  // event.currentTarget.parentElement.style.backgroundColor = '#F7F7F7'
}

const changeCheckbox = (input) => {
  input.addEventListener('change', changeBackgroundColor)
}


const styleDayDivWhenSelectCheckbox = () => {
  const inputs = document.querySelectorAll('input[type="checkbox"]');
  inputs.forEach(changeCheckbox);
};

const addCopyToClipboardButton = () => {
  const navMenuSection = document.querySelector('.navbar-collection.d-flex.flex-row-reverse.align-items-center')
  navMenuSection.insertAdjacentHTML('beforeend', '<button id="message">Copy classes to clipboard</button>')
  return document.getElementById('message');
}

const chosenKlasses = () => {
  const inputs = document.querySelectorAll('input[type="checkbox"]');
  return Array.from(inputs)
    .filter(input => input.checked)
    .map(input => input.value);
}

const buildCalendar = () => {
  const user = document.querySelector('.menu-user .menu-panel-name').innerText;
  const klasses = chosenKlasses()
  calendar = {}
  klasses.forEach(klass => calendar[klass] = user);
  return calendar
}

const buildMessage = (calendar) => {
  return Object.entries(calendar).map(keyValue => keyValue.join(' - ')).join("\n")
}


const copyMessage = () => {
  const message = localStorage.getItem('message')
  navigator.clipboard.writeText(message)
}

const createList = () => {
  localStorage.setItem('message', buildMessage(buildCalendar()));
  copyMessage()
}


const initCalendar = () => {
  displayCheckboxes();
  styleDayDivWhenSelectCheckbox()
  copyButton = addCopyToClipboardButton()
  // cada input
  copyButton.addEventListener('click', createList)
}

initCalendar()
