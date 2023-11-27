import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as productsService from "../api/products.js";

const detailsTemplate = (product, onDelete, bought, hasUserBought, handleBuying, ctx) => 
html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${product.imageUrl}" alt="example1" />
            <p id="details-title">${product.name}</p>
            <p id="details-category">
              Category: <span id="categories">${product.category}</span>
            </p>
            <p id="details-price">
              Price: <span id="price-number">${product.price}</span>$</p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Bought: <span id="buys">${bought}</span> times.</h4>
                <span>${product.description}</span>
              </div>
            </div>

            <!--Edit and Delete are only for creator-->
              ${
                  product.isOwner
                      ? html` <div id="action-buttons">
                            <a href="/edit/${product._id}" id="edit-btn"
                                >Edit</a
                            >
                            <a
                                @click=${onDelete}
                                href="javascript:void(0)"
                                id="delete-btn"
                                >Delete</a
                            >
                        </div>`
                      : nothing
              }

              <!--Bonus - Only for logged-in users ( not authors )-->
              ${
                  !product.isOwner && ctx.user && !hasUserBought
                      ? html`<a href="/buy" id="buy-btn" @click=${handleBuying}
                            >Buy</a
                        >`
                      : nothing
              }
            </div>
          </div>
        </section>
`;

export async function detailsPage(ctx) {
    const productId = ctx.params.id;
    const product = await productsService.getById(productId);
    const going = await productsService.getBoughtCount(productId);
    let hasUserBought = false;

    if (ctx.user) {
      hasUserBought = Boolean(
            await productsService.hasUserBought(ctx.user._id, productId)
        );
        product.isOwner = ctx.user._id == product._ownerId;
    }

    ctx.render(
        detailsTemplate(product, onDelete, going, hasUserBought, handleBuying, ctx)
    );

    async function onDelete() {
        const confirmed = confirm(
            "Are you sure you want to delete this motorcycle?"
        );

        if (confirmed) {
            await productsService.deleteById(productId);

            ctx.page.redirect("/catalog");
        }
    }

    async function handleBuying(event) {
        event.preventDefault();
        await productsService.buyProduct(productId);

        ctx.page.redirect(`/details/${productId}`);
    }
}
