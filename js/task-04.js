let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');

const incrementButton = document.querySelector('button[data-action="increment"]');

function decrementButtonClickHandler() {
    counterValue -= 1;
    value.textContent = counterValue;
}

function incrementButtonClickHandler() {
    counterValue += 1;
    value.textContent = counterValue;
}

decrementButton.addEventListener('click', decrementButtonClickHandler);
incrementButton.addEventListener('click', incrementButtonClickHandler);
