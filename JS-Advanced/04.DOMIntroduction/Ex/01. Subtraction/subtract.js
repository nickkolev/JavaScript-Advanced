function subtract() {
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;

    const result = Number(firstNumber) - Number(secondNumber);

    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
}