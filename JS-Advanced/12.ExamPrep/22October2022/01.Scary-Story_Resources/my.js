window.addEventListener("load", solve);

function solve() {
    const publishBtn = document.getElementById("form-btn");
    publishBtn.addEventListener("click", handlePublish);

    function handlePublish(e) {
        e.preventDefault();
        const firstNameInput = document.getElementById("first-name");
        let firstName = firstNameInput.value;

        const lastNameInput = document.getElementById("last-name");
        let lastName = lastNameInput.value;

        const ageInput = document.getElementById("age");
        let age = ageInput.value;

        const storyTitleInput = document.getElementById("story-title");
        let storyTitle = storyTitleInput.value;

        const genreInput = document.getElementById("genre");
        let genre = genreInput.value;

        const storyTextarea = document.getElementById("story");
        let story = storyTextarea.value;

        if (
            firstName === "" ||
            lastName === "" ||
            age === "" ||
            story === "" ||
            genre === "" ||
            storyTitle === ""
        ) {
            return;
        }

        // clear inputs
        firstNameInput.value = "";
        lastNameInput.value = "";
        ageInput.value = "";
        storyTitleInput.value = "";
        storyTextarea.value = "";

        // create the elements and the structure
        let articleEl = document.createElement("article");
        let nameEl = document.createElement("h4");
        nameEl.textContent = `Name: ${firstName} ${lastName}`;
        let ageEl = document.createElement("p");
        ageEl.textContent = `Age: ${age}`;
        let titleEl = document.createElement("p");
        titleEl.textContent = `Title: ${storyTitle}`;
        let genreEl = document.createElement("p");
        genreEl.textContent = `Genre: ${genre}`;
        let storyTitleEl = document.createElement("p");
        storyTitleEl.textContent = `${storyTitle}`;

        articleEl.appendChild(nameEl);
        articleEl.appendChild(ageEl);
        articleEl.appendChild(titleEl);
        articleEl.appendChild(genreEl);
        articleEl.appendChild(storyTitleEl);

        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Save Story";
        saveBtn.classList.add("save-btn");
        saveBtn.addEventListener("click", handleSave);
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit Story";
        editBtn.classList.add("edit-btn");
        editBtn.addEventListener("click", handleEdit);
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete Story";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", handleDelete);

        let listEl = document.createElement("li");
        listEl.classList.add("story-info");
        listEl.appendChild(articleEl);
        listEl.appendChild(saveBtn);
        listEl.appendChild(editBtn);
        listEl.appendChild(deleteBtn);

        let ulElement = document.getElementById("preview-list");
        ulElement.appendChild(listEl);

        publishBtn.disabled = true;

        function handleEdit(e) {
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            ageInput.value = age;
            storyTitleInput.value = storyTitle;
            storyTextarea.value = story;

            listEl.remove();

            publishBtn.disabled = false;
        }

        function handleSave() {
            let bodyElement = document.querySelector(".body");

            mainElement.remove();
            let h1Saved = document.createElement("h1");
            h1Saved.textContent = "Your scary story is saved!";
            let bodyElement2 = document.createElement("div");
            bodyElement2.setAttribute("id", "main");
            bodyElement.appendChild(bodyElement2);

            bodyElement2.appendChild(h1Saved);
        }

        function handleDelete() {
            listEl.remove();

            publishBtn.disabled = false;
        }
    }
}
