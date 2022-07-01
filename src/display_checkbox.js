const addCheckbox = (day) => {
  day.style.transition = "all .5s ease-in-out";
  const klass = day.querySelector('.calendar-day-name');
  const week = day.parentElement.previousElementSibling.innerText;
  const checkbox = `<input type='checkbox' data-week='${week.replace(" ", "_")}' value='${klass.innerText.trim()}' style='margin: 0 24px;'>`;
  day.insertAdjacentHTML('beforeend', checkbox);
};

const displayCheckboxes = () => {
  days = document.querySelectorAll('.calendar-day');

  days.forEach(addCheckbox);
};

displayCheckboxes();
