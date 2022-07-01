var style = document.createElement('style');
style.innerHTML = `
.choosen-klass {
  transition: all .5s ease-in-out;
}

.checkbox {
  margin: 0 24px;
}

.btn-ext--bg-purple {
    background-color: rgba(163, 45, 255, 30%) !important;
}

.btn-ext--disabled {
  opacity: .8;
}

.btn-ext--disabled-border {
  border: 0 transparent !important;
}

.btn-ext--disabled-cursor {
    cursor: default !important;
}


.bg-purple {
    background-color: rgba(163, 45, 255, 30%);
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

.btn-ext--border_important {
  border: 1px solid white !important;
}

#btn-wrapper {
  position: relative;
}

#reset-icon {
  color: white !important;
  position: absolute;
  top: 30%;
  left: 82%;
}

#reset-icon:hover {
  cursor: pointer;
}

.animated-bg {
  animation-name: bg-blink;
  animation-duration: 1s;
  animation-iteration-count: 1;
}

@keyframes bg-blink {
 0% {
    background-color: #F7F7F7;
    color: black;
  }

  50% {
    background-color: rgba(163, 45, 255, 30%);
  }

  75% {
    background-color: #F7F7F7;
    color: black;
  }

  87.5% {
    background-color: rgba(163, 45, 255, 30%);
  }

  100% {
    background-color: #F7F7F7;
    color: black;
  }
}
`;
document.head.appendChild(style);
