function solve() {
    const addButton = document.getElementById("add");
    addButton.addEventListener("click", handleAdd);

    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', handleReset);

    const listOfMails = document.getElementById('list');
    listOfMails.addEventListener('change', handleSend);

    // handle functions
    function handleAdd(e) {
        e.preventDefault();

        const titleValue = 'Title: ' + document.getElementById("title").value;
        const recipientNameValue = 'Recipient Name: ' + document.getElementById("recipientName").value;
        const messageValue = document.getElementById("message").value;

        if(recipientNameValue === '' || titleValue === '' || messageValue === '') {
            return;
        }

        const sendButton = document.createElement("button");
        sendButton.setAttribute("id", "send");
        sendButton.textContent = "Send";
        sendButton.addEventListener('click', handleSend);

        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", "delete");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener('click', handleDeleteFromList);

        const listActionDiv = document.createElement("div");
        listActionDiv.setAttribute("id", "list-action");

        listActionDiv.appendChild(sendButton);
        listActionDiv.appendChild(deleteButton);

        const messageElement = document.createElement("span");
        messageElement.textContent = messageValue;

        const recipientElement = document.createElement("h4");
        recipientElement.textContent = recipientNameValue;

        const titleElement = document.createElement("h4");
        titleElement.textContent = titleValue;

        const listElement = document.createElement("li");
        listElement.appendChild(titleElement);
        listElement.appendChild(recipientElement);
        listElement.appendChild(messageElement);
        listElement.appendChild(listActionDiv);

        const mainList = document.getElementById("list");
        mainList.appendChild(listElement);

        //clear inputs
        clearInputs();
    }

    function handleReset(e) {
        e.preventDefault();
        clearInputs();
    }

    function handleSend(e) {

        let delButton = document.createElement('button');
        delButton.classList.add('delete');
        delButton.textContent = 'Delete';
        delButton.addEventListener('click', handleDeleteFromSent);

        let delButtonDiv = document.createElement('div');
        delButtonDiv.classList.add('btn');
        delButtonDiv.appendChild(delButton);

        let titleSpan = document.createElement('span');
        titleSpan.textContent = e.target.parentElement.parentElement.querySelector('h4').textContent;

        let toSpan = document.createElement('span');
        toSpan.textContent = e.target.parentElement.parentElement.querySelectorAll('h4')[1].textContent;

        const finalLi = document.createElement('li');
        finalLi.appendChild(toSpan);
        finalLi.appendChild(titleSpan);
        finalLi.appendChild(delButtonDiv);

        const sentList = document.querySelector('.sent-list');
        sentList.appendChild(finalLi);

        //remove the element
        e.target.parentElement.parentElement.remove();
    }

    function handleDeleteFromList(e) {

        let titleSpan = document.createElement('span');
        titleSpan.textContent = e.target.parentElement.parentElement.querySelector('h4').textContent;

        let toSpan = document.createElement('span');
        toSpan.textContent = e.target.parentElement.parentElement.querySelectorAll('h4')[1].textContent;

        const liElement = document.createElement('li');
        liElement.appendChild(toSpan);
        liElement.appendChild(titleSpan);

        const deletedMails = document.querySelector('.delete-list');
        deletedMails.appendChild(liElement);

        //remove the element
        e.target.parentElement.parentElement.remove();
    }

    function handleDeleteFromSent(e) {
        let toSpan = document.createElement('span');
        toSpan.textContent = e.target.parentElement.parentElement.querySelector('span').textContent;

        let titleSpan = document.createElement('span');
        titleSpan.textContent = e.target.parentElement.parentElement.querySelectorAll('span')[1].textContent;

        const liElement = document.createElement('li');
        liElement.appendChild(toSpan);
        liElement.appendChild(titleSpan);

        const deletedMails = document.querySelector('.delete-list');
        deletedMails.appendChild(liElement);

        //remove the element
        e.target.parentElement.parentElement.remove();
    }

    // helper functions
    // clear input field
    function clearInputs() {
        document.getElementById("recipientName").value = "";
        document.getElementById("title").value = "";
        document.getElementById("message").value = "";
    }
}
solve();
