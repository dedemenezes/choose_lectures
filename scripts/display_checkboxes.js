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
