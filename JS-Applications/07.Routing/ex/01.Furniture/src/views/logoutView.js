import page from '../../node_modules/page/page.mjs';
import { logout } from '../api/users.js';
import { updateNav } from '../utils.js';

export function logoutView(){
    logout();
    updateNav();
    page.redirect('/');
}