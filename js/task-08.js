const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormsubmit);

function onFormsubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail,
        password,
    }

    if (mail === '' | password === '') {
        alert('Будь ласка заповінть всі необхідні поля форми!');
    } else {
        console.log(formData);
        event.currentTarget.reset();
    }
};