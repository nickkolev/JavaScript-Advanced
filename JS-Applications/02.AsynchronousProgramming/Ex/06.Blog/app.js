const postsURL = `http://localhost:3030/jsonstore/blog/posts`;
const commentsURL = `http://localhost:3030/jsonstore/blog/comments`;

function attachEvents() {
    document.getElementById("btnLoadPosts").addEventListener("click", getPosts);
    document.getElementById("btnViewPost").addEventListener("click", showPosts);
}

function getPosts() {
    fetch(postsURL)
        .then((res) => {
            if (res.status !== 200) {
                throw new Error("Wrong status code!");
            }

            return res.json();
        })
        .then((data) => {
            let selectField = document.getElementById("posts");
            selectField.innerHTML = '';

            Object.values(data).forEach(post => {
                let newOption = document.createElement('option');
                newOption.setAttribute('value', post.id);
                newOption.textContent = post.title;

                selectField.appendChild(newOption);
            });
        });
}

function showPosts() {
    let selectedPost = document.getElementById('posts');
    let selectedPostId = selectedPost.value;
    let selectedPostName = selectedPost.options[selectedPost.selectedIndex].textContent;
    let selectedPostBody = '';

    fetch(postsURL)
        .then((res) => {
            if (res.status !== 200) {
                throw new Error("Wrong status code!");
            }

            return res.json();
        })
        .then((data) => {
            Object.values(data).filter(p => p.id == selectedPostId).forEach(p => {
                selectedPostBody = p.body;
            })
        });

    fetch(commentsURL)
        .then((res) => {
            if (res.status !== 200) {
                throw new Error("Wrong status code!");
            }

            return res.json();
        })
        .then((data) => {
            let h1 = document.getElementById('post-title');
            h1.textContent = selectedPostName.toUpperCase();

            let postBodyP = document.getElementById('post-body');
            postBodyP.textContent = selectedPostBody;

            let ul = document.getElementById('post-comments');
            ul.textContent = '';
            
            Object.values(data).filter(post => post.postId == selectedPostId).forEach(p => {

                let li = document.createElement('li');
                li.id = p.id;
                li.textContent = p.text;

                ul.appendChild(li);
            })
        })
}

attachEvents();
