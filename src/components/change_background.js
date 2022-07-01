const backToDefault = (dayDiv) => {
  dayDiv.classList.remove('bg-purple');
};

const makeItPurple = (dayDiv) => {
  dayDiv.classList.add('bg-purple');
};

const changeBackgroundColor = (input = null) => {
  if (input) {
    const dayDiv = input.parentElement.parentElement;
    if (dayDiv.classList.contains('bg-purple')) {
      backToDefault(dayDiv);
    } else {
      makeItPurple(dayDiv);
    };
  }
};

changeBackgroundColor();
