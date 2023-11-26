import page from '../node_modules/page/page.mjs';

import { addRender } from './middleware/render.js';
import { addSession } from './middleware/session.js';

import { homePage } from './views/home.js';

//middlewares
page(addSession);
page(addRender);

//pages
page('/', homePage);

page.start();