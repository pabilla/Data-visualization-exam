const counterElement = document.getElementById('counter');
const decreaseButton = document.getElementById('decrease-btn');
const resetButton = document.getElementById('reset-btn');
const increaseButton = document.getElementById('increase-btn');

let counterValue = 0;

function updateCounter() {
  counterElement.textContent = counterValue;
}

function decrease() {
  counterValue--;
  updateCounter();
}

function reset() {
  counterValue = 0;
  updateCounter();
}

function increase() {
  counterValue++;
  updateCounter();
}

decreaseButton.addEventListener('click', decrease);
resetButton.addEventListener('click', reset);
increaseButton.addEventListener('click', increase);