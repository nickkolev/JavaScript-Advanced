function lockedProfile() {
    const baseURL = `http://localhost:3030/jsonstore/advanced/profiles`;

    const main = document.getElementById("main");

    let profileCounter = 1;

    fetch(baseURL)
        .then((res) => {
            if (res.status !== 200) {
                throw new Error("Wrong status code!");
            }

            return res.json();
        })
        .then((data) => {
            main.textContent = "";
            Object.entries(data).forEach((p) => createProfileElement(p));
        });

    function createProfileElement(p) {
        let profileDivElement = document.createElement("div");
        profileDivElement.className = "profile";

        let image = document.createElement("img");
        image.setAttribute("src", "./iconProfile2.png");
        image.classList.add("userIcon");
        profileDivElement.appendChild(image);

        let lockLabelElement = document.createElement("label");
        lockLabelElement.textContent = "Lock";
        profileDivElement.appendChild(lockLabelElement);

        let lockRadioElement = document.createElement("input");
        lockRadioElement.type = "radio";
        lockRadioElement.name = `user${profileCounter}Locked`;
        lockRadioElement.value = "lock";
        lockRadioElement.setAttribute("checked", "true");
        profileDivElement.appendChild(lockRadioElement);

        let unlockLabelElement = document.createElement("label");
        unlockLabelElement.textContent = "Unlock";
        profileDivElement.appendChild(unlockLabelElement);

        let unlockRadioElement = document.createElement("input");
        unlockRadioElement.type = "radio";
        unlockRadioElement.name = `user${profileCounter}Locked`;
        unlockRadioElement.value = "unlock";
        profileDivElement.appendChild(unlockRadioElement);

        let brElement = document.createElement("br");
        profileDivElement.appendChild(brElement);

        let hrElement = document.createElement("hr");
        profileDivElement.appendChild(hrElement);

        let usernameLabelElement = document.createElement("label");
        usernameLabelElement.textContent = "Username";
        profileDivElement.appendChild(usernameLabelElement);

        let usernameInputElement = document.createElement("input");
        usernameInputElement.type = "text";
        usernameInputElement.name = `user${profileCounter}Username`;
        usernameInputElement.value = p[1].username;
        usernameInputElement.disabled = true;
        usernameInputElement.readOnly = true;
        profileDivElement.appendChild(usernameInputElement);

        let hiddenFieldsDiv = document.createElement("div");
        hiddenFieldsDiv.id = `user${profileCounter}HiddenFields`;
        hiddenFieldsDiv.style.display = "none";

        let hrElementHidden = document.createElement("hr");
        hiddenFieldsDiv.appendChild(hrElementHidden);

        let emailLabelElement = document.createElement("label");
        emailLabelElement.textContent = "Email: ";
        hiddenFieldsDiv.appendChild(emailLabelElement);

        let emailInputElement = document.createElement("input");
        emailInputElement.type = "email";
        emailInputElement.name = `user${profileCounter}Email`;
        emailInputElement.value = p[1].email;
        emailInputElement.disabled = true;
        emailInputElement.readOnly = true;
        hiddenFieldsDiv.appendChild(emailInputElement);

        let ageLabelElement = document.createElement("label");
        ageLabelElement.textContent = "Age: ";
        hiddenFieldsDiv.appendChild(ageLabelElement);

        let ageInputElement = document.createElement("input");
        ageInputElement.type = "email";
        ageInputElement.name = `user${profileCounter}Age`;
        ageInputElement.value = p[1].age;
        ageInputElement.disabled = true;
        ageInputElement.readOnly = true;
        hiddenFieldsDiv.appendChild(ageInputElement);

        profileDivElement.appendChild(hiddenFieldsDiv);

        let buttonElement = document.createElement("button");
        buttonElement.textContent = "Show more";
        buttonElement.addEventListener("click", showMoreButtonClick);
        profileDivElement.appendChild(buttonElement);

        main.appendChild(profileDivElement);
        profileCounter++;
    }

    function showMoreButtonClick(e) {
        const profile = e.target.parentNode;

        if (profile.children[2].checked) {
            return;
        }

        if (e.target.textContent === "Show more") {
            profile.children[9].style.display = "block";
            e.target.textContent = "Hide it";
        } else {
            profile.children[9].style.display = "none";
            e.target.textContent = "Show more";
        }
    }
}
