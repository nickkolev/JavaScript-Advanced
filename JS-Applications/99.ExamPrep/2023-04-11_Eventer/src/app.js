import page from '../node_modules/page/page.mjs';

import { addRender } from './middleware/render.js';
import { addSession } from './middleware/session.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';

import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { logoutPage } from './views/logout.js';
import { registerPage } from './views/register.js';


//middlewares
page(addSession);
page(addRender);

//pages
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutPage);
page('/catalog', catalogPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);

page.start();