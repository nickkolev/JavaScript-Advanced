import * as userService from '../api/user.js';

export const logoutPage = (ctx) => {
    userService.logout();
    ctx.page.redirect("/");
};
