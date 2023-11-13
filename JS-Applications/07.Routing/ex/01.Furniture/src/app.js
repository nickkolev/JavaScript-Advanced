import page from '../node_modules/page/page.mjs';
import { updateNav } from './utils.js';
import { catalogView } from './views/catalogView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { loginView } from './views/loginView.js';
import { myFurnitureView } from './views/myFurnitureView.js';
import { registerView } from './views/registerView.js';
import { logoutView } from './views/logoutView.js';

// This is the entry point for the whole app.

updateNav();

page('/', catalogView);
page('/create', createView);
page('/register', registerView);
page('/login', loginView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/my-furniture', myFurnitureView);
page('*', catalogView);
page.start();

document.getElementById('logoutBtn').addEventListener('click', logoutView);