function toggle() {
    const buttonElement = document.getElementsByClassName('button')[0];
    const extraInfoElement = document.getElementById('extra');

    buttonElement.textContent = buttonElement.textContent === 'More' ? 'Less' : 'More';
    extraInfoElement.style.display = extraInfoElement.style.display === 'block' ? 'none' : 'block';
}