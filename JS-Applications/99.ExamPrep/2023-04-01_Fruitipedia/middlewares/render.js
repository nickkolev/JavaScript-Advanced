import { render, html } from "../../node_modules/lit-html/lit-html.js";

const navTemplate = (user) => html`
    
`;

const header = document.querySelector("header");
const main = document.querySelector("main");

function ctxRender(content) {
    render(content, main);
}

export function addRender(ctx, next) {
    render(navTemplate(ctx.user), header);
    ctx.render = ctxRender;

    next();
}
