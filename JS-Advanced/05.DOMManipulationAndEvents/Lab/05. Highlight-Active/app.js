function focused() {
    let sectionElements = document.querySelectorAll('input[type="text"]');

    let sectionsArray = Array.from(sectionElements);
    sectionsArray.forEach(e => {
        e.addEventListener('focus', focusHandler);
        e.addEventListener('blur', blurHandler)
    })

    function focusHandler(e) {
        const element = e.target;
        const parentElement = element.parentElement;
        parentElement.classList.add('focused');
    }

    function blurHandler(e) {
        e.target.parentElement.classList.remove('focused');
    }
}