import { detailsPage } from "./details.js";
import { showView } from "./util.js";

const editSection = document.querySelector("#edit-movie");
const form = editSection.querySelector('form');

export function editPage(id) {
    showView(editSection);
    handleEdit(id);
}

async function handleEdit(id) {
    let movie;

    await fetch("http://localhost:3030/data/movies")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            movie = data.find(m => m._id == id);
        })
        .catch((err) => {
            console.log(err);
        });

        console.log(movie);
    let movieTitle = form.querySelector('#title');
    let movieDescription = form.querySelector('textarea');
    let movieImageUrl = form.querySelector('#imageUrl');
    
    movieTitle.value = movie.title;
    movieDescription.textContent = movie.description;
    movieImageUrl.value = movie.img;
    
    let submitBtn = form.querySelector('button');
    submitBtn.addEventListener('click', async (event) => {
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        let formData = new FormData(form);
    
        let title = formData.get('title');
        let description = formData.get('description');
        let img = formData.get('img');
    
        await fetch(`http://localhost:3030/data/movies/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": user.accessToken,
            },
            body: JSON.stringify({
                title,
                description,
                img,
            }),
        });

        detailsPage(id);
    });
}
