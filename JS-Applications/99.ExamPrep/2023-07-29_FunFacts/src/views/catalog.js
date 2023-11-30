import { html } from "../../node_modules/lit-html/lit-html.js";

import * as factsService from "../api/facts.js";

const catalogTemplate = (facts) => html`
    <h2>Fun Facts</h2>
    ${facts.length > 0
        ? html` <section id="dashboard">${facts.map(cardTemplate)}</section>`
        : html`<h2>No Fun Facts yet.</h2>`}
`;

const cardTemplate = (fact) => html`
    <div class="fact">
        <img src="${fact.imageUrl}" alt="example3" />
        <h3 class="category">${fact.category}</h3>
        <p class="description">${fact.description}</p>
        <a class="details-btn" href="/details/${fact._id}">More Info</a>
    </div>
`;

export async function catalogPage(ctx) {
    const facts = await factsService.getAllFacts();

    ctx.render(catalogTemplate(facts));
}
