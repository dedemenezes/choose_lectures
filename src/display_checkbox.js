const addCheckbox = (day) => {
  // day.style.transition = "all .5s ease-in-out";
  day.classList.add('choosen-klass')
  const klass = day.querySelector('.calendar-day-name');
  const week = day.parentElement.previousElementSibling.innerText;
  const checkbox = `
    <i class='animated-bg'>
      <input type='checkbox' class='checkbox border-animation' data-week='${week.replace(" ", "_")}' value='${klass.innerText.trim()}'>
    </i>
  `;

  day.insertAdjacentHTML('beforeend', checkbox);
};

const displayCheckboxes = () => {
  days = document.querySelectorAll('.calendar-day');

  days.forEach(addCheckbox);
};

displayCheckboxes();
