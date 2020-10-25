const UIElements = {
    form: document.getElementById('form'),
    username: document.getElementById('username'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    password2: document.getElementById('password2'),
    submit: document.getElementById('submit')
}

const ErrorMsg = {
    username: "Username should be atleast of length 3",
    email: "Email is invalid",
    password: "Password should be atleast of length 5",
    password2: "Passwords do not match",
}

const init = () => {
    UIElements.submit.addEventListener('click',validate);
}

const validate = () => {
    let username = UIElements.username.value;
    let password = UIElements.password.value;
    let password2 = UIElements.password2.value;

    if(username.length < 3) {
        UIElements.username.parentNode.lastElementChild.textContent = ErrorMsg.username;
        UIElements.username.parentNode.classList.remove('success');
        UIElements.username.parentNode.classList.add('error');
    }
    else {
        UIElements.username.parentNode.classList.remove('error');
        UIElements.username.parentNode.classList.add('success');
    }

    if(password.length < 5) {
        UIElements.password.parentNode.lastElementChild.textContent = ErrorMsg.password;
        UIElements.password.parentNode.classList.remove('success');
        UIElements.password.parentNode.classList.add('error');
    }
    else {
        UIElements.password.parentNode.classList.remove('error');
        UIElements.password.parentNode.classList.add('success');    }

    if(password !== password2) {
        UIElements.password2.parentNode.lastElementChild.textContent = ErrorMsg.password2;
        UIElements.password2.parentNode.classList.remove('success');
        UIElements.password2.parentNode.classList.add('error');    }
    else {
        UIElements.password2.parentNode.classList.remove('error');
        UIElements.password2.parentNode.classList.add('success');    }
}

init();