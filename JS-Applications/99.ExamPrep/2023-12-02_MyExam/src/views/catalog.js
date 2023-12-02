import { html } from "../../node_modules/lit-html/lit-html.js";

import * as charactersService from "../api/characters.js";

const catalogTemplate = (characters) => html`
    <h2>Characters</h2>
    <section id="characters">
        <!-- Display a div with information about every post (if any)-->
        ${characters.length > 0
            ? characters.map(cardTemplate)
            : html`<h2>No added Heroes yet.</h2>`}
    </section>
`;

const cardTemplate = (character) => html`
    <div class="character">
        <img src="${character.imageUrl}" alt="example1" />
        <div class="hero-info">
            <h3 class="category">${character.category}</h3>
            <p class="description">${character.description}</p>
            <a class="details-btn" href="/details/${character._id}">More Info</a>
        </div>
    </div>
`;

export async function catalogPage(ctx) {
    const characters = await charactersService.getAllCharacters();

    ctx.render(catalogTemplate(characters));
}
