import { html } from "../../node_modules/lit-html/lit-html.js";
import * as motorcyclesService from "../api/motorcycles.js";

const searchTemplate = (onSubmit, motorcycles) => html`
    <section id="search">
        <div class="form">
            <h4>Search</h4>
            <form class="search-form">
                <input type="text" name="search" id="search-input" />
                <button @click=${onSubmit} class="button-list">Search</button>
            </form>
        </div>
        <h4 id="result-heading">Results:</h4>
        <div class="search-result">
            ${motorcycles.length > 0
                ? motorcycles.map((x) => motorcycleTemplate(x))
                : html`<h2 class="no-avaliable">No result.</h2>`}
        </div>
    </section>
`;

const motorcycleTemplate = (motorcycle) => html`
    <div class="motorcycle">
        <img src="${motorcycle.imageUrl}" alt="example1" />
        <h3 class="model">${motorcycle.model}</h3>
        <a class="details-btn" href="/details/${motorcycle._id}">More Info</a>
    </div>
`;

export async function searchPage(ctx) {
    async function onSubmit(e) {
        e.preventDefault();
        let searchText = document.getElementById("search-input").value;

        if (searchText == "") {
            alert("You can not search by empty string!");
            return;
        }
        const motorcycles = await motorcyclesService.search(searchText);

        ctx.render(searchTemplate(onSubmit, motorcycles));
    }

    ctx.render(searchTemplate(onSubmit, []));
}
