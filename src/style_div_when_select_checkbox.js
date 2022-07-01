const backToDefault = (dayDiv) => {
  const bgDefault = "#F7F7F7";
  dayDiv.style.backgroundColor = bgDefault;
  dayDiv.classList.remove('bg-purple');
};

const makeItPurple = (dayDiv) => {
  const bgPurple = "rgba(180, 26, 188, 0.404)";
  dayDiv.style.backgroundColor = bgPurple;
  dayDiv.classList.add('bg-purple');
};

const changeBackgroundColor = (event) => {
  // event.currentTarget.style.backgroundColor = '#611365'
  const dayDiv = event.currentTarget.parentElement.parentElement;
  if (dayDiv.classList.contains('bg-purple')) {
    backToDefault(dayDiv);
  } else {
    makeItPurple(dayDiv);
  };
};

const changeCheckbox = (input) => {
  input.addEventListener('change', changeBackgroundColor)
};


const styleDayDivWhenSelectCheckbox = () => {
  const inputs = document.querySelectorAll('input[type="checkbox"]');
  inputs.forEach(changeCheckbox);
};

styleDayDivWhenSelectCheckbox();
