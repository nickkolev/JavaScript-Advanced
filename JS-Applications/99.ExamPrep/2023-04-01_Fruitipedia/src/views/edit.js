import { html } from "../../node_modules/lit-html/lit-html.js";
import * as fruitsService from "../api/fruits.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (fruit, onSubmit) => html`
      <section id="edit">
        <div class="form">
          <h2>Edit Fruit</h2>
          <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="name" id="name" .value=${fruit.name} placeholder="Fruit Name" />
            <input type="text" name="imageUrl" id="Fruit-image" .value=${fruit.imageUrl} placeholder="Fruit Image URL" />
            <textarea id="fruit-description" name="description" .value=${fruit.description} placeholder="Description" rows="10"
              cols="50"></textarea>
            <textarea id="fruit-nutrition" name="nutrition" .value=${fruit.nutrition} placeholder="Nutrition" rows="10" cols="50"></textarea>
            <button type="submit">post</button>
          </form>
        </div>
      </section>
`;

export async function editPage(ctx) {
    const fruitId = ctx.params.id;
    const fruit = await fruitsService.getById(fruitId);

    ctx.render(editTemplate(fruit, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
    const fruitId = ctx.params.id;

    if (Object.values(data).some((x) => x == "")) {
        alert("All fields are required!");
        return;
    }

    await fruitsService.update(fruitId, {
        name: data.name,
        imageUrl: data.imageUrl,
        description: data.description,
        nutrition: data.nutrition,
    });

    event.target.reset();
    ctx.page.redirect('/details/' + fruitId);
}
