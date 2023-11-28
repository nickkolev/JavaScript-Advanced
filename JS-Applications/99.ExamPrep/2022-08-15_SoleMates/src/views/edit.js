import { html } from "../../node_modules/lit-html/lit-html.js";
import * as shoesService from "../api/shoes.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (shoe, onSubmit) => html`
      <section id="edit">
          <div class="form">
            <h2>Edit item</h2>
            <form @submit=${onSubmit} class="edit-form">
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                .value=${shoe.brand}
                placeholder="Brand"
              />
              <input
                type="text"
                name="model"
                id="shoe-model"
                .value=${shoe.model}
                placeholder="Model"
              />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                .value=${shoe.imageUrl}
                placeholder="Image url"
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                .value=${shoe.release}
                placeholder="Release date"
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                .value=${shoe.designer}
                placeholder="Designer"
              />
              <input
                type="text"
                name="value"
                id="shoe-value"
                .value=${shoe.value}
                placeholder="Value"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>
`;

export async function editPage(ctx) {
    const shoeId = ctx.params.id;
    const shoe = await shoesService.getById(shoeId);

    ctx.render(editTemplate(shoe, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
    const shoeId = ctx.params.id;

    if (Object.values(data).some((x) => x == "")) {
        alert("All fields are required!");
        return;
    }

    await shoesService.update(shoeId, {
        brand: data.brand,
        model: data.model,
        imageUrl: data.imageUrl,
        release: data.release,
        designer: data.designer,
        value: data.value,
    });

    event.target.reset();
    ctx.page.redirect('/details/' + shoeId);
}
