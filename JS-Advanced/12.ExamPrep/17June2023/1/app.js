window.addEventListener("load", solve);

function solve() {
    const carModelElement = document.getElementById("car-model");
    const carYearElement = document.getElementById("car-year");
    const partNameElement = document.getElementById("part-name");
    const partNumberElement = document.getElementById("part-number");
    const conditionElement = document.getElementById("condition");

    const infoList = document.querySelector(".info-list");
    const completeImg = document.getElementById("complete-img");
    const completeText = document.getElementById("complete-text");
    const confirmList = document.querySelector(".confirm-list");

    const nextBtn = document.getElementById("next-btn");

    nextBtn.addEventListener("click", handleNext);
    function handleNext(e) {
        e.preventDefault();

        let carModel = carModelElement.value;
        let carYear = carYearElement.value;
        let partName = partNameElement.value;
        let partNumber = partNumberElement.value;
        let condition = conditionElement.value;

        if (
            carModel == "" ||
            carYear == "" ||
            partName == "" ||
            partNumber == "" ||
            condition == "" ||
            carYear < 1980 ||
            carYear > 2023
        ) {
            return;
        }

        let carModelP = document.createElement("p");
        carModelP.textContent = `Car Model: ${carModel}`;
        let carYearP = document.createElement("p");
        carYearP.textContent = `Car Year: ${carYear}`;
        let partNameP = document.createElement("p");
        partNameP.textContent = `Part Name: ${partName}`;
        let partNumberP = document.createElement("p");
        partNumberP.textContent = `Part Number: ${partNumber}`;
        let conditionP = document.createElement("p");
        conditionP.textContent = `Condition: ${condition}`;

        let infoArticle = document.createElement("article");
        infoArticle.appendChild(carModelP);
        infoArticle.appendChild(carYearP);
        infoArticle.appendChild(partNameP);
        infoArticle.appendChild(partNumberP);
        infoArticle.appendChild(conditionP);

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");

        let continueBtn = document.createElement("button");
        continueBtn.textContent = "Continue";
        continueBtn.classList.add("continue-btn");

        let partContentLi = document.createElement("li");
        partContentLi.classList.add("part-content");
        partContentLi.appendChild(infoArticle);
        partContentLi.appendChild(editBtn);
        partContentLi.appendChild(continueBtn);

        infoList.appendChild(partContentLi);

        completeImg.style.visibility = "hidden";
        completeText.textContent = "";

        carModelElement.value = "";
        carYearElement.value = "";
        partNameElement.value = "";
        partNumberElement.value = "";
        conditionElement.value = "";

        nextBtn.disabled = true;

        editBtn.addEventListener("click", handleEdit);
        function handleEdit() {
            carModelElement.value = carModel;
            carYearElement.value = carYear;
            partNameElement.value = partName;
            partNumberElement.value = partNumber;
            conditionElement.value = condition;

            partContentLi.remove();
            nextBtn.disabled = false;
        }

        continueBtn.addEventListener("click", handleContinue);
        function handleContinue() {
            let confirmArticle = infoArticle;

            let confirmBtn = document.createElement("button");
            confirmBtn.classList.add("confirm-btn");
            confirmBtn.textContent = "Confirm";

            let cancelBtn = document.createElement("button");
            cancelBtn.classList.add("cancel-btn");
            cancelBtn.textContent = "Cancel";

            let confirmLi = document.createElement("li");
            confirmLi.classList.add("part-content");
            confirmLi.appendChild(confirmArticle);
            confirmLi.appendChild(confirmBtn);
            confirmLi.appendChild(cancelBtn);

            confirmList.appendChild(confirmLi);

            partContentLi.remove();

            confirmBtn.addEventListener("click", handleConfirm);
            function handleConfirm() {
                confirmLi.remove();
                nextBtn.disabled = false;

                completeImg.style.visibility = "visible";
                completeText.textContent = "Part is Ordered!";
            }

            cancelBtn.addEventListener('click', handleCancel);
            function handleCancel() {
                confirmLi.remove();
                nextBtn.disabled = false;
            }
        }
    }
}
