import { homePage } from "./home.js";
import { showView, updateNav } from "./util.js";

const registerSection = document.querySelector("#form-sign-up");
const form = registerSection.querySelector("form");
form.addEventListener("submit", onSubmit);

export function registerPage() {
    showView(registerSection);
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const email = formData.get("email");
    const password = formData.get("password");
    const repeatPassword = formData.get("repeatPassword");

    if (email !== "" && password.length >= 6 && password === repeatPassword) {
        await register(email, password);

        form.reset();
        updateNav();
        homePage();
    } else {
        alert("Invalid username or password. Try again.");
    }
}

async function register(email, password) {
    try {
        const res = await fetch("http://localhost:3030/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const user = await res.json();
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user));
    } catch (err) {
        alert(err.message);
        throw err;
    }
}
