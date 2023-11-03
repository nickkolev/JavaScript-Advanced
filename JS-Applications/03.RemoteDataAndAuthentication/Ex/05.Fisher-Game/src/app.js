const userData = JSON.parse(localStorage.getItem('userData'));
const logoutUrl = 'http://localhost:3030/users/logout';
console.log(userData);

document.querySelector('#catches').innerHTML = '';
document.querySelector(".load").addEventListener('click', loadCatches);
document.querySelector('#addForm').addEventListener('submit', addCatches);
document.querySelector('#main').addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON'){
        if(event.target.textContent === 'Update'){
            updateCatch(event)
        } else if(event.target.textContent === 'Delete'){
            deleteCatch(event);
        }
    }
})

if (userData !== null) {
    loggedUser();
} else {
    guestUser();
}

function loggedUser() {
    document.querySelector('#guest').style.display = 'none';
    document.querySelector('.email > span').textContent = userData.email;
    document.querySelector('.add').disabled = false;

    document.querySelector('#logout').addEventListener('click', logout);
}

function guestUser() {
    document.querySelector('#user').style.display = 'none';
    document.querySelector('.add').disabled = true;
    document.querySelector('.email > span').textContent = 'guest';
}

async function logout() {

    await fetch(logoutUrl, {
        headers: {
            "X-Authorization": userData.accessToken,
        },
    });
    localStorage.clear();
    window.location = './index.html';

}

async function loadCatches() {

    document.querySelector('#catches').innerHTML = '';
    const response = await fetch('http://localhost:3030/data/catches');
    let data = await response.json();

    if (!Array.isArray(data)) data = [data];
    for (let entry of data) {
        document.querySelector('#catches').innerHTML +=
            `<div class="catch">
                <label>Angler</label>
                <input type="text" class="angler" value="${entry.angler}">
                <label>Weight</label>
                <input type="text" class="weight" value="${entry.weight}">
                <label>Species</label>
                <input type="text" class="species" value="${entry.species}">
                <label>Location</label>
                <input type="text" class="location" value="${entry.location}">
                <label>Bait</label>
                <input type="text" class="bait" value="${entry.bait}">
                <label>Capture Time</label>
                <input type="number" class="captureTime" value="${entry.captureTime}">
                <button class="update" data-id="${entry._id}" ${userData && userData._id == entry._ownerId ? !'disabled' : 'disabled'}>Update</button>
                <button class="delete" data-id="${entry._id}" ${userData && userData._id == entry._ownerId ? !'disabled' : 'disabled'}>Delete</button>
            </div>`
    }

}

async function addCatches(event) {
    event.preventDefault();
    try {
        const formData = new FormData(event.target);
        const dataEntries = Object.fromEntries([...formData]);
        if (Object.values(dataEntries).some(x => x === '')) throw new Error('Please, fill all fields!');

        dataEntries._ownerId = userData._id;

        const response = await fetch('http://localhost:3030/data/catches', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "X-Authorization": userData.accessToken,
            },
            body: JSON.stringify(dataEntries)
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        event.target.reset();
    } catch (error) {
        return alert(error.message);
    }
}

async function updateCatch(event) {

    const ownerId = userData._id;
    const id = event.target.dataset.id;
    const inputs = Array.from(event.target.parentNode.querySelectorAll('input'));
    const inputData = {
        angler: inputs[0].value,
        weight: inputs[1].value,
        species: inputs[2].value,
        location: inputs[3].value,
        bait: inputs[4].value,
        captureTime: inputs[5].value,
        _ownerId: ownerId,
        _id: id
    }

    const response = await fetch('http://localhost:3030/data/catches/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "X-Authorization": userData.accessToken,
        },
        body: JSON.stringify(inputData)
    })

  if(response.ok) loadCatches();
}

async function deleteCatch(event) {

    
    const id = event.target.dataset.id;
    const response = await fetch('http://localhost:3030/data/catches/' + id, {
        method: 'DELETE',
        headers: {'X-Authorization': userData.accessToken}
    })
}