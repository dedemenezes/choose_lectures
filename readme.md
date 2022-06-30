// create list
const copyMessage = () => {
  const message = localStorage.getItem('message')
  navigator.clipboard.writeText(message)
}

const chosenKlasses = (inputs) => {
  return Array.from(inputs)
              .filter(input => input.checked)
              .map(input => input.value);
}

const createList = () => {
  const navMenuSection = document.querySelector('.navbar-collection.d-flex.flex-row-reverse.align-items-center')
  const inputs  = document.querySelectorAll('input[type="checkbox"]');
  const teacher = document.querySelector('.menu-user .menu-panel-name').innerText;

  const klasses = chosenKlasses(inputs)

  calendar = {}

  weeks = document.querySelectorAll('.calendar-module-header').map(div => div.innerText);
  weeks.forEach(week => calendar[week] = []);

  klasses.forEach(klass => calendar[klass] = teacher);
  console.log(calendar);
  const message = Object.entries(calendar).map(keyValue => keyValue.join(' - ')).join("\n")
  localStorage.setItem('message', message);

  navMenuSection.insertAdjacentHTML('beforeend', '<button id="message">Copy classes to clipboard</button>')
  document.getElementById('message').addEventListener('click', copyMessage)
}

createList();


// displayCheckboxes

const displayCheckboxes = () => {
  days = document.querySelectorAll('.calendar-day')

  days.forEach((day) => {
    id = day.dataset.id
    klass = day.querySelector('.calendar-day-name')
    week = day.parentElement.previousElementSibling.innerText
    value = klass.innerText.trim();
    checkbox = `<input type='checkbox' data-week='${week.replace(" ", "_")}' value='${value}'>`
    day.insertAdjacentHTML('beforeend', checkbox)
  })
}

displayCheckboxes();
