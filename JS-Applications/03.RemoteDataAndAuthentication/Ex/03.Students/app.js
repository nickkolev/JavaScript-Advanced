window.addEventListener('load', loadStudents);

const url = 'http://localhost:3030/jsonstore/collections/students';
const tableBody = document.querySelector('#results > tbody');

const form = document.getElementById('form');
form.addEventListener('submit', onFormSubmit);

//get data for student records and render them in the tbody element
async function loadStudents() {

    const res = await fetch(url);
    const data = await res.json();

    tableBody.textContent = '';

    Object.values(data).map(({ firstName, lastName, facultyNumber, grade }) => {
        
        let fNameTd = document.createElement('td');
        fNameTd.textContent = firstName;
        let lNameTd = document.createElement('td');
        lNameTd.textContent = lastName;
        let fNumberTd = document.createElement('td');
        fNumberTd.textContent = facultyNumber;
        let gradeTd = document.createElement('td');
        gradeTd.textContent = grade;
        
        let tr = document.createElement('tr');
        tr.appendChild(fNameTd);
        tr.appendChild(lNameTd);
        tr.appendChild(fNumberTd);
        tr.appendChild(gradeTd);

        tableBody.appendChild(tr);
    });
}

// add new student record
async function onFormSubmit(e) {

    e.preventDefault();
    const formData = new FormData(form);

    let firstName = formData.get('firstName');
    let lastName = formData.get('lastName');
    let facultyNumber = formData.get('facultyNumber');
    let grade = formData.get('grade');

    if(!firstName || !lastName || !Number(facultyNumber) || !Number(grade)){
        return alert('invalid input.')
    }

    const studentObj = {
        firstName,
        lastName,
        facultyNumber,
        grade,
    }

    await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(studentObj),
    })

    loadStudents();
}