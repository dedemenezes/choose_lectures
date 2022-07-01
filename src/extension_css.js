var style = document.createElement('style');
style.innerHTML = `
.choosen-klass {
  transition: all .5s ease-in-out;
}

.checkbox {
  margin: 0 24px;
}

.bg-purple {
  background-color: #61136567;
}

.bg-default {
  background-color: #F7F7F7;
}

.btn-ext {
  background-color: #23262b;
  color: white;
  font-weight: bold;
  width: 200px;
}

.btn-ext--border {
  border: 1px solid white;
}

.animated-bg {
  animation-name: bg-blink;
  animation-duration: .75s;
  animation-iteration-count: 1;
}

@keyframes bg-blink {
  0% {
    background-color: #F7F7F7;
    color: black;
  }

  50% {
    background-color: rgb(180, 26, 188);
    color: white;
  }

  75% {
    background-color: #F7F7F7;
    color: black;
  }

  87.5% {
    background-color: rgb(180, 26, 188);
    color: white;
  }

  100% {
    background-color: #F7F7F7;
    color: black;
  }
}


`;
document.head.appendChild(style);