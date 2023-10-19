window.addEventListener("load", solve);

function solve() {
    let firstNameElement = document.getElementById("first-name");
    let lastNameElement = document.getElementById("last-name");
    let dateInElement = document.getElementById("date-in");
    let dateOutElement = document.getElementById("date-out");
    let guestsCountElement = document.getElementById("people-count");
    let nextBtn = document.getElementById("next-btn");

    let infoListElement = document.querySelector(".info-list");
    let confirmListElement = document.querySelector('.confirm-list');
    let verificationElement = document.getElementById('verification');

    nextBtn.addEventListener("click", handleNext);
    function handleNext(e) {
        e.preventDefault();
        if (
            firstNameElement.value == "" ||
            lastNameElement.value == "" ||
            dateInElement.value == "" ||
            dateOutElement.value == "" ||
            guestsCountElement.value == "" ||
            new Date(dateInElement) >= new Date(dateOutElement)
        ) {
            return;
        }

        let name = `Name: ${firstNameElement.value} ${lastNameElement.value}`;
        let fromDate = `From date: ${dateInElement.value}`;
        let toDate = `To date: ${dateOutElement.value}`;
        let numGuests = `For ${guestsCountElement.value} people`;

        let nameEl = document.createElement("h3");
        nameEl.textContent = name;
        let fromDateEl = document.createElement("p");
        fromDateEl.textContent = fromDate;
        let toDateEl = document.createElement("p");
        toDateEl.textContent = toDate;
        let numGuestsEl = document.createElement("p");
        numGuestsEl.textContent = numGuests;

        let article = document.createElement("article");
        article.appendChild(nameEl);
        article.appendChild(fromDateEl);
        article.appendChild(toDateEl);
        article.appendChild(numGuestsEl);

        // buttons
        let editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit";

        let continueBtn = document.createElement("button");
        continueBtn.classList.add("continue-btn");
        continueBtn.textContent = "Continue";

        let liElement = document.createElement("li");
        liElement.classList.add("info-list");
        liElement.appendChild(article);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        infoListElement.appendChild(liElement);

        // variables for easier edit
        let editFirstName = firstNameElement.value;
        let editLastName = lastNameElement.value;
        let editDateIn = dateInElement.value;
        let editDateOut = dateOutElement.value;
        let editGuestsCount = guestsCountElement.value;

        // clear input fields
        firstNameElement.value = "";
        lastNameElement.value = "";
        dateInElement.value = "";
        dateOutElement.value = "";
        guestsCountElement.value = "";

        // disable next button
        nextBtn.disabled = true;

        editBtn.addEventListener("click", handleEdit);
        function handleEdit() {
            // restore input fields 
            firstNameElement.value = editFirstName;
            lastNameElement.value = editLastName;
            dateInElement.value = editDateIn;
            dateOutElement.value = editDateOut;
            guestsCountElement.value = editGuestsCount;

            // make next button enabled again
            nextBtn.disabled = false;

            // remove li element from Reservation info
            liElement.remove();
        }

        continueBtn.addEventListener('click', handleContinue);
        function handleContinue() {

            let articleConfirmElement = article;

            let confirmBtn = document.createElement('button');
            confirmBtn.classList.add('confirm-btn');
            confirmBtn.textContent = 'Confirm';

            let cancelBtn = document.createElement('button');
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.textContent = 'Cancel';

            let liConfirmElement = document.createElement('li');
            liConfirmElement.classList.add('reservation-content');
            liConfirmElement.appendChild(articleConfirmElement);
            liConfirmElement.appendChild(confirmBtn);
            liConfirmElement.appendChild(cancelBtn);

            confirmListElement.appendChild(liConfirmElement);
            liElement.remove();

            confirmBtn.addEventListener('click', handleConfirm);
            function handleConfirm() {

                liConfirmElement.remove();
                nextBtn.disabled = false;

                verificationElement.classList.add('reservation-confirmed');
                verificationElement.textContent = 'Confirmed.';
            }

            cancelBtn.addEventListener('click', handleCancel);
            function handleCancel() {
                
                liConfirmElement.remove();
                nextBtn.disabled = false;

                verificationElement.classList.add('reservation-cancelled');
                verificationElement.textContent = 'Cancelled.';
            }
        }
    }
}
