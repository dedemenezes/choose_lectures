const backToDefault = (dayDiv) => {
  dayDiv.classList.remove('bg-purple');
};

const makeItPurple = (dayDiv) => {
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
  input.addEventListener('change', (event) => {
    changeBackgroundColor(event)
  })
};


const styleDayDivWhenSelectCheckbox = () => {
  const inputs = document.querySelectorAll('input[type="checkbox"]');
  inputs.forEach(changeCheckbox);
};


const checkboxState = () => {
  styleDayDivWhenSelectCheckbox();
  const inputs = document.querySelectorAll('input[type="checkbox"]');
  inputs.forEach((input) => {
    changeCheckbox(input);
  });
};
