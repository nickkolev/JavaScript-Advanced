function loadRepos() {

    const username = document.getElementById('username').value;
    const url = `https://api.github.com/users/${username}/repos`;
    let reposList = document.getElementById('repos');

    fetch(url)
        .then((res) => {
            // check the status of the response
            if(res.status === 404) {
                throw new Error(
                    `Username ${username} cannot be found. Error: ${response.status}!`
                );
            }

            return res.json(); // return another Promise
        })
        .then((data) => {
            reposList.innerHTML = ''; // Clear the list of repos

            for (const repo of data) {
                let anchorEl = document.createElement('a');
                anchorEl.href = repo.html_url;
                anchorEl.textContent = repo.full_name;

                let liEl = document.createElement('li');
                liEl.appendChild(anchorEl);

                reposList.appendChild(liEl);
            }
        })
        .catch((error) => {
            reposList.textContent = `${error.message}`; // Catches the thrown error
        })

}
