const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
};

refs.input.addEventListener('input', onInputChange);
refs.span.style.fontSize = `${refs.input.value}px`;

function onInputChange(event) {
    refs.span.style.fontSize = `${event.currentTarget.value}px`;
};

