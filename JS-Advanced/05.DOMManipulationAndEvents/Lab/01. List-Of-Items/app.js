function addItem() {

    // Get the reference to the input element
    const inputElement = document.getElementById('newItemText');
    // Get the value of the input element
    const newItem = inputElement.value;

    // Create new li element and attach the value from the input to it
    let newElement = document.createElement('li');
    newElement.textContent = newItem;

    // Get the reference to the ul element (parent element)
    const ulElement = document.getElementById('items');

    if(newElement.textContent !== ''){
        // Append the new item to the list only if its not an empty string
        ulElement.appendChild(newElement);
    }

    // Clear the value of the input field
    inputElement.value = '';
}