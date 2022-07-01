const addCheckbox = (day) => {
  // day.style.transition = "all .5s ease-in-out";
  day.classList.add('choosen-klass')
  const klass = day.querySelector('.calendar-day-name');
  const week = day.parentElement.previousElementSibling.innerText;
  const checkbox = `
    <i class='animated-bg--checkbox'>
      <input type='checkbox' class='checkbox border-animation' data-week='${week.replace(" ", "_")}' value='${klass.innerText.trim()}'>
    </i>
  `;

  day.insertAdjacentHTML('beforeend', checkbox);
};

const initCheckbox = () => {
  days = getDays();

  days.forEach(addCheckbox);
};

initCheckbox();
