import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { createPage } from "./create.js";
import { updateNav } from "./util.js";
import { editPage } from "./edit.js";

// [x] improve HTML structure
// [x] create app.js module
// [x] create util.js containing hide and display of view
// [x] placeholders for all views

// implement views
// - create request logic
// - DOM manipulation logic
// [x] catalog
// [x] login
// [x] register
// [x] create
// [x] details
// [x] like
// [ ] edit
// [ ] delete

//showView('#home-page');

const routes = {
    "/": homePage,
    "/login": loginPage,
    "/logout": logout,
    "/register": registerPage,
    "/create": createPage,
    "/edit": editPage,
};

document.querySelector("nav").addEventListener("click", onNavigate);
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate);

function onNavigate(event) {
    if (event.target.tagName === "A" && event.target.href) {
        event.preventDefault();
        const url = new URL(event.target.href);

        const view = routes[url.pathname];
        if (typeof view == "function") {
            view();
        }
    }
}

function logout() {
    localStorage.removeItem('user');
    updateNav();
    homePage();
}

// Start application in catalog view
updateNav();
homePage();