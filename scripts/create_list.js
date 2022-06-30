const copyMessage = () => {
  const message = localStorage.getItem('message')
  console.log(message)
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
  const klasses = chosenKlasses(inputs)

  user = document.querySelector('.menu-user');
  teacher = user.querySelector('.menu-panel-name').innerText;
  calendar = {}
  klasses.forEach(klass => calendar[klass] = teacher);
  const message = Object.entries(calendar).map(keyValue => keyValue.join(' - ')).join("\n")
  localStorage.setItem('message', message);

  navMenuSection.insertAdjacentHTML('beforeend', '<button id="message">Copy classes to clipboard</button>')
  document.getElementById('message').addEventListener('click', copyMessage)
}

createList();
