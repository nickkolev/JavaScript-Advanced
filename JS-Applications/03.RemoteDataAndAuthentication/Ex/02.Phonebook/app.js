function attachEvents() {
    const url = `http://localhost:3030/jsonstore/phonebook`;

    const loadBtn = document.getElementById("btnLoad");
    const createBtn = document.getElementById("btnCreate");
    const phonebookUl = document.getElementById("phonebook");

    const personElement = document.getElementById('person');
    const phoneElement = document.getElementById('phone');

    loadBtn.addEventListener("click", handleLoad);
    createBtn.addEventListener('click', handleCreate);

    function handleCreate() {

        const person = {
            person: personElement.value,
            phone: phoneElement.value,
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(person),
        }

        fetch(url, options)
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error("Wrong status code!");
                }

                personElement.value = '';
                phoneElement.value = '';
                handleLoad();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleLoad() {
        fetch(url)
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error("Wrong status code!");
                }

                return res.json();
            })
            .then((data) => {
                phonebookUl.textContent = "";
                console.log(data);

                Object.values(data).map(({ person, phone, _id }) => {
                    const liEntry = document.createElement("li");
                    liEntry.textContent = `${person}: ${phone}`;

                    const deleteBtn = document.createElement("button");
                    deleteBtn.textContent = "Delete";
                    deleteBtn.id = _id;
                    deleteBtn.addEventListener('click', deleteHandler);

                    liEntry.appendChild(deleteBtn);

                    phonebookUl.appendChild(liEntry);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function deleteHandler(e) {

        fetch(`${url}/${e.target.id}`, {
            method: 'DELETE',

        })
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error("Wrong status code!");
                }

                return res.json();
            })
            .then(() => {
                e.target.parentNode.remove();
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

attachEvents();
