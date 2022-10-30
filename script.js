const pwd1 = document.getElementById('pwd1');
const pwd2 = document.getElementById('pwd2');
const pwdError = document.getElementById('pwd-error');

pwd2.oninput = () => checkPwd(pwd2.value);

function addWarning() {
    pwdError.textContent = '* Passwords do not match';
}

function checkPwd() {
    // pwd2 is nesting pwd1 to not show error after user delete pwd1
    if (pwd1.value === pwd2.value || (pwd1.value === '' && pwd2.value)) {
        pwd1.classList.remove('error-border');
        pwd2.classList.remove("error-border");
    }
    if (pwd2.value === '') {
        pwdError.textContent = '';
    } else if (pwd2.value !== '') {
        if (pwd1.value === '') {
            pwdError.textContent = 'Please enter password first';
            pwd1.classList.add('error-border');
            pwd2.classList.add("error-border");
        } else if (pwd1.value !== '') {
            if (pwd1.value !== pwd2.value) {
                pwdError.textContent = "Passwords do not match";
                pwd1.classList.add('error-border');
                pwd2.classList.add("error-border");
            } else {
                pwdError.textContent = '';
            }
        }
    }
}

pwd1.oninput = () => checkPwd(pwd1.value);