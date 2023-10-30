function loadCommits() {
    
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    let commitList = document.getElementById('commits');

    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
        .then((res) => {
            if(res.status === 404) {
                throw new Error(
                    `Username ${username} cannot be found. Error: ${response.status}!`
                );
            }

            return res.json();
        })
        .then((data) => {
            
            commitList.innerHTML = '';

            data.forEach(commit => {
                let liElement = document.createElement('li');
                liElement.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;

                commitList.appendChild(liElement);
            });
        })
        .catch((err) => {
            commitList.innerHTML = '';
            
            let liElement = document.createElement('li');
            liElement.textContent = `Error: ${err.status} (Not Found)`;

            commitList.appendChild(liElement);
        })
}





// function loadCommits() {
    
//     // get the input values of Username and Repo as well as the list for showing the commits
//     let username = document.getElementById('username').value;
//     let repo = document.getElementById('repo').value
//     let commitsList = document.getElementById('commits');

//     // base url
//     const baseUrl = `https://api.github.com/repos/${username}/${repo}/commits`;

//     fetch(baseUrl)
//         .then((response) => {
//             // throw error if status is 404 (Not Found)
//             if (response.status == 404) {
//                 throw new Error(
//                     `Username ${username} cannot be found. Error: ${response.status}!`
//                 );
//             }

//             // .json returns another promise
//             return response.json();
//         })
//         .then((response) => {
//             // clear the current list
//             commitsList.innerHTML = '';

//             response.forEach(commit => {
//                 // create li element and append the corresponding author name and commit name to it
//                 let liElement = document.createElement('li');
//                 liElement.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;

//                 // append the li item to the main list of commits
//                 commitsList.appendChild(liElement);
//             });
//         })
//         .catch(error => {
//             // clear the current list
//             commitsList.innerHTML = '';
            
//             // create li element and append the error message to it
//             let liElement = document.createElement('li');
//             liElement.textContent = error.message;

//             // append the li element to the main list
//             commitsList.appendChild(liElement);
//         })
// }