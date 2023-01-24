function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const pageBody = document.querySelector('body');
const textOfBodyColor = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', onChangeColorButtonHandler);

function onChangeColorButtonHandler(event) {
  pageBody.style.backgroundColor = getRandomHexColor();
  textOfBodyColor.textContent = pageBody.style.backgroundColor;
  console.log('f');
}