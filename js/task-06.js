const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('focus', onInputFocus);
validationInput.addEventListener('blur', onInputBlur);

function onInputFocus(event) {
    event.currentTarget.removeAttribute('class');
};

function onInputBlur(event) {
    const datasetLength = Number(event.currentTarget.dataset.length);
    const inputedValueLength = Number(event.currentTarget.value.length);
    
    if (datasetLength === inputedValueLength) {
        validationInput.classList.toggle('valid');
    } else {
        validationInput.classList.toggle('invalid');
    }
};