function deleteByEmail() {

    let emailElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let emailInputElement = document.querySelector('input[name="email"]');
    let resultElement = document.getElementById('result');

    let arrEmails = Array.from(emailElements);
    
    let targetElement = arrEmails.find(x => x.textContent == emailInputElement.value)

    if (targetElement) {
        targetElement.parentElement.remove();

        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }

    emailInputElement.textContent = '';

}