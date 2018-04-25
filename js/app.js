var msgElem = document.getElementsByClassName('error-message')[0];

function showError(container, errorMessage) {
    for (i = 0; i < container.length; i++) {
        container[i].classList.add('error');
    }
    if (msgElem.innerHTML === '&nbsp;') {
        msgElem.innerHTML = errorMessage;
    }
}


function validate(form) {
    var elems = form.elements;

    elems.email.classList.remove('error');
    elems.password.classList.remove('error');
    msgElem.innerHTML = '&nbsp;';

    if (!elems.email.value && !elems.password.value) {
        showError([elems.email, elems.password], ' Введите email и пароль');
    } else if (!elems.email.value) {
        showError([elems.email], ' Введите почту');
    } else if (!(elems.email.value.indexOf('@')) || (/[а-яА-Я]/.test(elems.email.value))) {
        showError([elems.email], ' Неправильная почта');
    }  else if (!elems.password.value) {
        showError([elems.password], ' Введите пароль');
    } else if (elems.password.value.length < 3 || /[а-яА-Я]/.test(elems.password.value)) {
        showError([elems.password], ' Неправильный пароль');
    } else {
        elems.submit.value='Вход выполнен';
    }
}