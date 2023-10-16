function loadRepos() {
    let username = document.querySelector("#username").value;
    let listSection = document.querySelector("#repos");
    const baseUrl = `https://api.github.com/users/${username}/repos`;

    fetch(baseUrl)
        .then((response) => {
            // This opens up the Response interface of the Fetch API
            if (response.status == 404) {
                throw new Error(
                    `Username ${username} cannot be found. Error: ${response.status}!`
                );
            }

            return response.json(); // Returns another Promise
        })
        .then((data) => {
            listSection.innerHTML = ''; // Clear the list of repos

            for (let repo of data) {
                let anchorElement = document.createElement("a");
                let liElement = document.createElement("li");

                anchorElement.setAttribute("href", repo.html_url); // The parsed data has lots of properties
                anchorElement.textContent = repo.full_name; // full_name -> the full name of the repo, html_orl -> the url to the repo

                liElement.append(anchorElement); // Append the anchor element to the list element
                listSection.append(liElement);
            }
        })
        .catch((error) => {
            listSection.textContent = `${error.message}`; // Catches the thrown error
        });
}
