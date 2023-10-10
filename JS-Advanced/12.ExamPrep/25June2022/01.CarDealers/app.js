window.addEventListener("load", solve);

function solve() {
    const makeInputElement = document.getElementById("make");
    const modelInputElement = document.getElementById("model");
    const yearInputElement = document.getElementById("year");
    const fuelInputElement = document.getElementById("fuel");

    const originalCostInputElement = document.getElementById("original-cost");
    const sellingPriceInputElement = document.getElementById("selling-price");

    const publishButton = document.getElementById("publish");
    publishButton.addEventListener("click", handlePublish);

    let profit = document.getElementById('profit');

    function handlePublish(e) {
        e.preventDefault();
        // get the inputs
        let make = makeInputElement.value;
        let model = modelInputElement.value;
        let yearProduced = yearInputElement.value;
        let fuel = fuelInputElement.value;
        let originalCost = originalCostInputElement.value;
        let sellingPrice = sellingPriceInputElement.value;

        // validate input data
        if (
            typeof make !== "string" ||
            make === "" ||
            typeof model !== "string" ||
            model === "" ||
            typeof yearProduced !== "string" ||
            yearProduced === "" ||
            typeof fuel !== "string" ||
            fuel === "" ||
            typeof originalCost !== "string" ||
            originalCost === "" ||
            typeof sellingPrice !== "string" ||
            sellingPrice === "" ||
            originalCost > sellingPrice ||
            Number(yearProduced) < 1990
        ) {
            return;
        }

        let makeElement = document.createElement("td");
        makeElement.textContent = make;
        let modelElement = document.createElement("td");
        modelElement.textContent = model;
        let yearElement = document.createElement("td");
        yearElement.textContent = yearProduced;
        let fuelElement = document.createElement("td");
        fuelElement.textContent = fuel;
        let originalCostElement = document.createElement("td");
        originalCostElement.textContent = originalCost;
        let sellingPriceElement = document.createElement("td");
        sellingPriceElement.textContent = sellingPrice;

        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("action-btn", "edit");
        editButton.addEventListener("click", handleEdit);

        let sellButton = document.createElement("button");
        sellButton.textContent = "Sell";
        sellButton.classList.add("action-btn", "sell");
        sellButton.addEventListener("click", handleSell);

        let buttonsTd = document.createElement("td");
        buttonsTd.appendChild(editButton);
        buttonsTd.appendChild(sellButton);

        let rowElement = document.createElement("tr");
        rowElement.classList.add("row");
        rowElement.appendChild(makeElement);
        rowElement.appendChild(modelElement);
        rowElement.appendChild(yearElement);
        rowElement.appendChild(fuelElement);
        rowElement.appendChild(originalCostElement);
        rowElement.appendChild(sellingPriceElement);
        rowElement.appendChild(buttonsTd);

        let tableBodyElement = document.getElementById("table-body");
        tableBodyElement.appendChild(rowElement);

        // clear inputs
        makeInputElement.value = "";
        modelInputElement.value = "";
        yearInputElement.value = "";
        fuelInputElement.value = "";
        originalCostInputElement.value = "";
        sellingPriceInputElement.value = "";
    }

    function handleEdit(e) {
        let rows = Array.from(
            e.target.parentElement.parentElement.querySelectorAll("td")
        );

        makeInputElement.value = rows[0].textContent;
        modelInputElement.value = rows[1].textContent;
        yearInputElement.value = rows[2].textContent;
        fuelInputElement.value = rows[3].textContent;
        originalCostInputElement.value = Number(rows[4].textContent);
        sellingPriceInputElement.value = Number(rows[5].textContent);

        // remove the element from the table
        e.target.parentElement.parentElement.remove();
    }

    function handleSell(e) {
        let rows = Array.from(
            e.target.parentElement.parentElement.querySelectorAll("td")
        );

        let makeAndModelElement = document.createElement('span');
        makeAndModelElement.textContent = rows[0].textContent + ' ' + rows[1].textContent;

        let yearEl = document.createElement('span');
        yearEl.textContent = rows[2].textContent;

        let profitElement = document.createElement('span');
        profitElement.textContent = Number(rows[5].textContent) - Number(rows[4].textContent);

        let liElement = document.createElement('li');
        liElement.classList.add('each-list');
        liElement.appendChild(makeAndModelElement);
        liElement.appendChild(yearEl);
        liElement.appendChild(profitElement);

        let carsListElement = document.getElementById('cars-list');
        carsListElement.appendChild(liElement);

        profit.textContent = (Number(profit.textContent) + Number(profitElement.textContent)).toFixed(2);

        e.target.parentElement.parentElement.remove();
    }
}
