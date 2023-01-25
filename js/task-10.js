function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumberEl = document.querySelector('#controls > input');
const createButtonEl = document.querySelector('button[data-create]');
const destroyButtonEl = document.querySelector('button[data-destroy]');
const boxesContainerEl = document.querySelector('#boxes');

let elemUp = 0;

const createBoxes = amount => {
  amount = inputNumberEl.value;
  const newBoxes = [];

  
  for (let i = 1; i <= amount; i += 1) {
    newBoxes.push(`<div style="width:${30 + elemUp}px;height:${30 + elemUp}px;background-color: ${getRandomHexColor()};"></div>`);
    elemUp += 10;
  }

  boxesContainerEl.insertAdjacentHTML('beforeend', newBoxes.join(''));
};

createButtonEl.addEventListener('click', createBoxes);
destroyButtonEl.addEventListener('click', destroyBoxes)

function destroyBoxes() {
  boxesContainerEl.innerHTML = '';
  elemUp = 0;
  inputNumberEl.value = '';
}