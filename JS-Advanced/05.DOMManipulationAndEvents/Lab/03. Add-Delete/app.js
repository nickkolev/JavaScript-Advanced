function addItem() {
    const ulElement = document.getElementById('items');
    const inputElement = document.getElementById('newItemText');

    // Get the value of the input field
    let inputText = inputElement.value;

    // Create new li element and set its value to the input value
    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputText;

    if(newLiElement.textContent !== '') {
        ulElement.appendChild(newLiElement);
    }
    inputElement.value = '';
    
    let deleteElement = document.createElement('a');
    deleteElement.textContent = '[Delete]';
    deleteElement.href = '#';
    newLiElement.appendChild(deleteElement);
    
    deleteElement.addEventListener('click', deleteHandler);
    function deleteHandler(e) {
        let linkElement = e.target;
        let liElement = linkElement.parentElement;
        liElement.remove();
    }

}