// Form Blur Event Listeners 
document.getElementById('name').addEventListener('blur',checkName);
document.getElementById('email').addEventListener('blur',checkEmail);
document.getElementById('zip').addEventListener('blur',checkZip);
document.getElementById('phone').addEventListener('blur',checkPhone);

function checkName() {
    // input with class name
    const name = document.getElementById('name');
    const re = /^[A-Za-z]{2,10}$/;

    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
        // name.appendChild()
    } else {
        name.classList.remove('is-invalid');
    }
}
function checkZip() {
    // input with class name
    const zip = document.getElementById('zip');
    const re = /^([A-Za-z][0-9][A-Za-z]){1} ([0-9][A-Za-z][0-9]){1}$/;

    if (!re.test(zip.value)) {
        zip.classList.add('is-invalid');
        // name.appendChild()
    } else {
        zip.classList.remove('is-invalid');
    }
}
function checkPhone() {
    // input with class name
    const phone = document.getElementById('phone');
    const re = /^\(?\d{3}\)?[ .-]?\d{3}[ .-]?\d{4}$/;

    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');
        // name.appendChild()
    } else {
        phone.classList.remove('is-invalid');
    }
}

function checkEmail() {
    // input with class email
    const email = document.getElementById('email');
    const re = /([a-zA-Z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([a-zA-Z]){2,5}$/; 

    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}