function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumberEl = document.querySelector('#controls > input');
const createButtonEl = document.querySelector('button[data-create]');
const destroyButtonEl = document.querySelector('button[data-destroy]');
const boxesContainerEl = document.querySelector('#boxes');

const createBoxes = amount => {
  amount = inputNumberEl.value;
  const newBoxes = [];

  let elemWidthUp = 0;
  for (let i = 1; i <= amount; i += 1) {
    newBoxes.push(`<div style="width:${30 + elemWidthUp}px;height:30px;background-color: ${getRandomHexColor()};"></div>`);
    elemWidthUp += 10;
  }

  boxesContainerEl.insertAdjacentHTML('beforeend', newBoxes.join(''));
};

createButtonEl.addEventListener('click', createBoxes);
destroyButtonEl.addEventListener('click', destroyBoxes)

function destroyBoxes() {
  boxesContainerEl.innerHTML = '';
}