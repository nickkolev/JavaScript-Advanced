const registerURL = 'http://localhost:3030/users/register';

document.querySelector('#user').style.display = 'none';
document.querySelector('form').addEventListener('submit', register);

async function register(e) {
    e.preventDefault();

    try {
        const formData = new FormData(e.target);
        const dataEntries = Object.fromEntries([...formData.entries()]);
        if(Object.values(dataEntries).some(x => x === '')) throw new Error('Please, fill all the fields');

        const response = await fetch(registerURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dataEntries)
        })

        const data = await response.json();

        if(!response.ok) {
            throw new Error(data.message);
        }

        localStorage.setItem('userData', JSON.stringify(data));
        e.target.reset();
        window.location = './index.html'
    } catch (error) {
        return alert(error.message);
    }
}