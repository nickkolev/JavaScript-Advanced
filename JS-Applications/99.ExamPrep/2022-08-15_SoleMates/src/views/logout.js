import * as userService from '../api/users.js';

export const logoutPage = (ctx) => {
    userService.logout();
    ctx.page.redirect("/");
};
