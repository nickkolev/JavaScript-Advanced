function addItem() {
    
    // capture elements
    const newItemTextElement = document.getElementById('newItemText');
    const newItemValueElement = document.getElementById('newItemValue');
    const menuElement = document.getElementById('menu');

    // extract the value and the text
    let newText = newItemTextElement.value;
    let newValue = newItemValueElement.value;

    // create new option element
    let optionElement = document.createElement('option');
    optionElement.value = newValue;
    optionElement.textContent = newText;

    // attach the new element to the menu
    menuElement.appendChild(optionElement);

    // clear the input fields
    newItemTextElement.value = '';
    newItemValueElement.value = '';
}