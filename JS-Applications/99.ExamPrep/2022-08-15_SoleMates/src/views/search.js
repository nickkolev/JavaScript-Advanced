import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as shoesService from "../api/shoes.js";

const searchTemplate = (onSubmit, shoes, isResult, ctx) => html`
    <section id="search">
        <h2>Search by Brand</h2>

        <form class="search-wrapper cf">
            <input
                id="#search-input"
                type="text"
                name="search"
                placeholder="Search here..."
                required
            />
            <button @click=${onSubmit} type="submit">Search</button>
        </form>

        <h3>Results:</h3>
        ${isResult
            ? html` 
            <div id="search-container">
                  <ul class="card-wrapper">
                      ${shoes.length > 0
                          ? shoes.map((x) => cardTemplate(x, ctx.user))
                          : html`<h2>There are no results found.</h2>`}
                  </ul>
            </div>`
            : nothing}
    </section>
`;

const cardTemplate = (shoe, user) => html`
    <li class="card">
        <img src="${shoe.imageUrl}" alt="travis" />
        <p><strong>Brand: </strong><span class="brand">${shoe.brand}</span></p>
        <p><strong>Model: </strong><span class="model">${shoe.model}</span></p>
        <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
        ${user
            ? html`<a class="details-btn" href="/details/${shoe._id}"
                  >Details</a
              >`
            : nothing}
    </li>
`;

export async function searchPage(ctx) {
    async function onSubmit(e) {
        e.preventDefault();
        let searchText = document.getElementById("#search-input").value;

        if (searchText == "") {
            alert("You can not search by empty string!");
            return;
        }
        const shoes = await shoesService.search(searchText);

        ctx.render(searchTemplate(onSubmit, shoes, true, ctx));
    }

    ctx.render(searchTemplate(onSubmit, [], false, ctx));
}
