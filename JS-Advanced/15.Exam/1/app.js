window.addEventListener("load", solution);

function solution() {
    // capture input elements
    const employeeElement = document.getElementById("employee");
    const categoryElement = document.getElementById("category");
    const urgencyElement = document.getElementById("urgency");
    const assignedTeamElement = document.getElementById("team");
    const descriptionElement = document.getElementById("description");

    const addBtn = document.getElementById("add-btn");

    const previewList = document.querySelector(".preview-list");
    const pendingList = document.querySelector(".pending-list");
    const resolvedList = document.querySelector(".resolved-list");

    // add button functionality
    addBtn.addEventListener("click", handleAdd);
    function handleAdd(e) {
        // prevent page reload
        e.preventDefault();

        // get the input data
        let employeeInput = employeeElement.value;
        let categoryInput = categoryElement.value;
        let urgencyInput = urgencyElement.value;
        let assignedTeamInput = assignedTeamElement.value;
        let descriptionInput = descriptionElement.value;

        // input data is not empty
        if (
            employeeInput === "" ||
            categoryInput === "" ||
            urgencyInput === "" ||
            assignedTeamInput === "" ||
            descriptionInput === ""
        ) {
            return;
        }

        // create elements for Preview list
        let employeePreview = document.createElement("p");
        employeePreview.textContent = `From: ${employeeInput}`;
        let categoryPreview = document.createElement("p");
        categoryPreview.textContent = `Category: ${categoryInput}`;
        let urgencyPreview = document.createElement("p");
        urgencyPreview.textContent = `Urgency: ${urgencyInput}`;
        let assignedTeamPreview = document.createElement("p");
        assignedTeamPreview.textContent = `Assigned to: ${assignedTeamInput}`;
        let descriptionPreview = document.createElement("p");
        descriptionPreview.textContent = `Description: ${descriptionInput}`;

        let articlePreview = document.createElement("article");
        articlePreview.appendChild(employeePreview);
        articlePreview.appendChild(categoryPreview);
        articlePreview.appendChild(urgencyPreview);
        articlePreview.appendChild(assignedTeamPreview);
        articlePreview.appendChild(descriptionPreview);

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");

        let continueBtn = document.createElement("button");
        continueBtn.textContent = "Continue";
        continueBtn.classList.add("continue-btn");

        let liPreview = document.createElement("li");
        liPreview.classList.add("problem-content");
        liPreview.appendChild(articlePreview);
        liPreview.appendChild(editBtn);
        liPreview.appendChild(continueBtn);

        // append the right structure of element to the preview list
        previewList.appendChild(liPreview);

        // clear input fields
        employeeElement.value = "";
        categoryElement.value = "";
        urgencyElement.value = "";
        assignedTeamElement.value = "";
        descriptionElement.value = "";

        // disable the add button
        addBtn.disabled = true;

        // edit button functionality
        editBtn.addEventListener("click", handleEdit);
        function handleEdit() {
            // return data to the input fields
            employeeElement.value = employeeInput;
            categoryElement.value = categoryInput;
            urgencyElement.value = urgencyInput;
            assignedTeamElement.value = assignedTeamInput;
            descriptionElement.value = descriptionInput;

            // remove the data from preview section
            liPreview.remove();

            //enable add button again
            addBtn.disabled = false;
        }

        // continue button functionality
        continueBtn.addEventListener("click", handleContinue);
        function handleContinue() {
            
            let liPending = document.createElement('li');
            liPending.classList.add('problem-content');
            let articlePending = articlePreview.cloneNode(true);
            liPending.appendChild(articlePending);

            let resolveBtn = document.createElement('button');
            resolveBtn.textContent = 'Resolved';
            resolveBtn.classList.add('resolve-btn');
            liPending.appendChild(resolveBtn);

            // put the data in the Pending list
            pendingList.appendChild(liPending);

            // remove the data from preview section
            liPreview.remove();
            addBtn.disabled = false;

            // resolve button functionality
            resolveBtn.addEventListener("click", handleResolve);
            function handleResolve() {
                
                let liResolved = document.createElement('li');
                liResolved.classList.add('problem-content');
                let articleResolved = articlePending.cloneNode(true);
                liResolved.appendChild(articleResolved);

                let clearBtn = document.createElement('button');
                clearBtn.textContent = 'Clear';
                clearBtn.classList.add("clear-btn");
                liResolved.appendChild(clearBtn);
                
                // append the info to the resolved list
                resolvedList.appendChild(liResolved);

                // remove the information from the Pending section
                liPending.remove();
                addBtn.disabled = false;

                // clear button functionality
                clearBtn.addEventListener('click', handleClear);
                function handleClear() {
                  liResolved.remove();
                  addBtn.disabled = false;
                }
            }
        }
    }
}
