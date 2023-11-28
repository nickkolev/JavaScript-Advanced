import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as shoesService from "../api/shoes.js";

const detailsTemplate = (shoe, onDelete) => html`
    <section id="details">
        <div id="details-wrapper">
            <p id="details-title">Shoe Details</p>
            <div id="img-wrapper">
                <img src="${shoe.imageUrl}" alt="example1" />
            </div>
            <div id="info-wrapper">
                <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
                <p>Model: <span id="details-model">${shoe.model}</span></p>
                <p>
                    Release date:
                    <span id="details-release">${shoe.release}</span>
                </p>
                <p>
                    Designer:
                    <span id="details-designer">${shoe.designer}</span>
                </p>
                <p>Value: <span id="details-value">${shoe.value}</span></p>
            </div>

            <!--Edit and Delete are only for creator-->
            ${shoe.isOwner
                ? html` <div id="action-buttons">
                      <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
                      <a @click=${onDelete} href="" id="delete-btn">Delete</a>
                  </div>`
                : nothing}
        </div>
    </section>
`;

export async function detailsPage(ctx) {
    const shoeId = ctx.params.id;
    const shoe = await shoesService.getById(shoeId);

    if (ctx.user) {
        shoe.isOwner = ctx.user._id == shoe._ownerId;
    }

    ctx.render(detailsTemplate(shoe, onDelete));

    async function onDelete() {
        const confirmed = confirm(
            "Are you sure you want to delete this fruit?"
        );

        if (confirmed) {
            await shoesService.deleteById(shoeId);

            ctx.page.redirect("/catalog");
        }
    }
}
