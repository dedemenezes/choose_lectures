const backToDefault = (dayDiv) => {
  dayDiv.classList.remove('bg-purple');
};

const makeItPurple = (dayDiv) => {
  dayDiv.classList.add('bg-purple');
};

const changeBackgroundColor = (input) => {
  // event.currentTarget.style.backgroundColor = '#611365'
  const dayDiv = input.parentElement.parentElement;
  if (dayDiv.classList.contains('bg-purple')) {
    backToDefault(dayDiv);
  } else {
    makeItPurple(dayDiv);
  };
};

const changeCheckbox = (input) => {
  input.addEventListener('change', (event) => {
    changeBackgroundColor(event.currentTarget)
  })
};
// inputs.forEach(changeCheckbox);



// const styleDayDivWhenSelectCheckbox = () => {
//   const inputs = document.querySelectorAll('input[type="checkbox"]');
//   inputs.forEach(changeCheckbox);
// };


const checkboxState = () => {
  // styleDayDivWhenSelectCheckbox();
  const inputs = document.querySelectorAll('input[type="checkbox"]');
  inputs.forEach(changeCheckbox);

};

checkboxState();
