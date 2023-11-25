import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as fruitsService from "../api/fruits.js";
import { cardTemplate } from "./catalog.js";

const searchTemplate = (onSubmit, fruits, isResult) => html`
    <section id="search">
        <div class="form">
            <h2>Search</h2>
            <form class="search-form">
                <input type="text" name="search" id="search-input" />
                <button @click=${onSubmit} class="button-list">Search</button>
            </form>
        </div>
        <h4>Results:</h4>
        ${isResult
            ? html` <div class="search-result">
                  ${fruits.length > 0
                      ? fruits.map((x) => cardTemplate(x))
                      : html`<p class="no-result">No result.</p>`}
              </div>`
            : nothing}
    </section>
`;

export async function searchPage(ctx) {
    async function onSubmit(e) {
        e.preventDefault();
        let searchText = document.getElementById("search-input").value;

        if (searchText == "") {
            alert("You can not search by empty string!");
            return;
        }
        const fruits = await fruitsService.search(searchText);

        ctx.render(searchTemplate(onSubmit, fruits, true));
    }

    ctx.render(searchTemplate(onSubmit, [], false));
}
