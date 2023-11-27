import { html } from "../../node_modules/lit-html/lit-html.js";
import * as productService from "../api/products.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (product, onSubmit) => html`
        <section id="edit">
          <div class="form">
            <h2>Edit Product</h2>
            <form @submit=${onSubmit} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                .value=${product.name}
                placeholder="Product Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="product-image"
                .value=${product.imageUrl}
                placeholder="Product Image"
              />
              <input
                type="text"
                name="category"
                id="product-category"
                .value=${product.category}
                placeholder="Category"
              />
              <textarea
                id="product-description"
                .value=${product.description}
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              ></textarea>
              
              <input
                type="text"
                name="price"
                id="product-price"
                .value=${product.price}
                placeholder="Price"
              />
              <button type="submit">post</button>
            </form>
          </div>
        </section>
`;

export async function editPage(ctx) {
    const productId = ctx.params.id;
    const product = await productService.getById(productId);

    ctx.render(editTemplate(product, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, product) {
    const productId = ctx.params.id;

    if (Object.values(data).some((x) => x == "")) {
        alert("All fields are required!");
        return;
    }

    await productService.update(productId, {
        name: data.name,
        imageUrl: data.imageUrl,
        category: data.category,
        description: data.description,
        price: data.price,
    });

    product.target.reset();
    ctx.page.redirect('/details/' + productId);
}
