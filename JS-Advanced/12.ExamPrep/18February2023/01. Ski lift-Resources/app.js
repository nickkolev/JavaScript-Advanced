window.addEventListener("load", solve);

function solve() {
    let firstNameElement = document.getElementById("first-name");
    let lastNameElement = document.getElementById("last-name");
    let peopleCountElement = document.getElementById("people-count");
    let fromDateElement = document.getElementById("from-date");
    let daysCountElement = document.getElementById("days-count");
    let nextButton = document.getElementById("next-btn");

    let ticketInfoList = document.querySelector(".ticket-info-list");
    let confirmTicketList = document.querySelector('.confirm-ticket');
    let main = document.getElementById('main');
    let body = document.getElementById('body');

    nextButton.addEventListener("click", handleNext);
    function handleNext(e) {
        e.preventDefault();

        if (
            firstNameElement.value == "" ||
            lastNameElement.value == "" ||
            peopleCountElement.value == "" ||
            fromDateElement.value == "" ||
            daysCountElement.value == ""
        ) {
            return;
        }

        let name = `Name: ${firstNameElement.value} ${lastNameElement.value}`;
        let fromDate = `From date: ${fromDateElement.value}`;
        let daysC = `For ${daysCountElement.value} days`;
        let peopleC = `For ${peopleCountElement.value} people`;

        let nameElement = document.createElement("h3");
        nameElement.textContent = name;
        let dateElement = document.createElement("p");
        dateElement.textContent = fromDate;
        let daysElement = document.createElement("p");
        daysElement.textContent = daysC;
        let peopleElement = document.createElement("p");
        peopleElement.textContent = peopleC;

        let ticketInfoArticle = document.createElement("article");
        ticketInfoArticle.appendChild(nameElement);
        ticketInfoArticle.appendChild(dateElement);
        ticketInfoArticle.appendChild(daysElement);
        ticketInfoArticle.appendChild(peopleElement);

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");

        let continueBtn = document.createElement("button");
        continueBtn.textContent = "Continue";
        continueBtn.classList.add("continue-btn");

        let listElement = document.createElement("li");
        listElement.appendChild(ticketInfoArticle);
        listElement.appendChild(editBtn);
        listElement.appendChild(continueBtn);

        listElement.classList.add('ticket');

        ticketInfoList.appendChild(listElement);

        let firstName = firstNameElement.value;
        let lastName = lastNameElement.value;
        let people = peopleCountElement.value;
        let date = fromDateElement.value;
        let days = daysCountElement.value;

        //clear inputs
        firstNameElement.value = "";
        lastNameElement.value = "";
        peopleCountElement.value = "";
        fromDateElement.value = "";
        daysCountElement.value = "";

        nextButton.disabled = true;

        editBtn.addEventListener("click", handleEdit);
        function handleEdit() {
            firstNameElement.value = firstName;
            lastNameElement.value = lastName;
            peopleCountElement.value = people;
            fromDateElement.value = date;
            daysCountElement.value = days;

            nextButton.disabled = false;
            listElement.remove();
        }

        continueBtn.addEventListener("click", handleContinue);
        function handleContinue() {
            let continueArticle = ticketInfoArticle;
            listElement.remove();

            let confirmBtn = document.createElement('button');
            confirmBtn.classList.add('confirm-btn');
            confirmBtn.textContent = 'Confirm';

            let cancelBtn = document.createElement('button');
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.textContent = 'Cancel';

            let liTicketContent = document.createElement('li');
            liTicketContent.classList.add('ticket-content');
            liTicketContent.appendChild(continueArticle);
            liTicketContent.appendChild(confirmBtn);
            liTicketContent.appendChild(cancelBtn);

            confirmTicketList.appendChild(liTicketContent);

            cancelBtn.addEventListener('click', handleCancel);
            function handleCancel() {

                liTicketContent.remove();
                nextButton.disabled = false;
            }

            confirmBtn.addEventListener('click', handleConfirm);
            function handleConfirm() {

                main.remove();

                let h1 = document.createElement('h1');
                h1.setAttribute('id', 'thank-you');
                h1.textContent = 'Thank you, have a nice day!';

                let backBtn = document.createElement('button');
                backBtn.setAttribute('id', 'back-btn');
                backBtn.textContent = 'Back';

                body.appendChild(h1);
                body.appendChild(backBtn);

                backBtn.addEventListener('click', handleBack);
                function handleBack() {
                    window.location.reload();
                }
            }
        }
    }
}
