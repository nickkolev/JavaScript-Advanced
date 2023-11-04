const loginURL = 'http://localhost:3030/users/login';

document.querySelector('#user').style.display = 'none';
document.querySelector('form').addEventListener('submit', login);

async function login(e) {

    e.preventDefault();

    try {
        const formData = new FormData(e.target);
        const dataEntries = Object.fromEntries([...formData.entries()]);
        
        if (Object.values(dataEntries).some(x => x === '')) throw new Error('Please, fill all fields');

        const response = await fetch(loginURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataEntries),
        })

        const data = await response.json();

        if(!response.ok) {
            throw new Error(data.message);
        }

        localStorage.setItem('userData', JSON.stringify(data));
        e.target.reset();
        window.location = './index.html';
    } catch (error) {
        return alert(error.message)
    }
}