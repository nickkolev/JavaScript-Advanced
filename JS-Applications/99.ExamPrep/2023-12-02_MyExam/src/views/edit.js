import { html } from "../../node_modules/lit-html/lit-html.js";
import * as charactersService from "../api/characters.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (character, onSubmit) => html`
      <section id="edit">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Edit Character</h2>
            <form @submit=${onSubmit} class="edit-form">
              <input
              type="text"
              name="category"
              id="category"
              .value=${character.category}
              placeholder="Character Type"
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              .value=${character.imageUrl}
              placeholder="Image URL"
            />
            <textarea
            id="description"
            .value=${character.description}
            name="description"
            placeholder="Description"
            rows="2"
            cols="10"
          ></textarea>
          <textarea
            id="additional-info"
            .value=${character.moreInfo}
            name="additional-info"
            placeholder="Additional Info"
            rows="2"
            cols="10"
          ></textarea>
              <button type="submit">Edit</button>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
        </section>
`;

export async function editPage(ctx) {
    const characterId = ctx.params.id;
    const character = await charactersService.getById(characterId);

    ctx.render(editTemplate(character, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
    const characterId = ctx.params.id;

    if (Object.values(data).some((x) => x == "")) {
        alert("All fields are required!");
        return;
    }

    await charactersService.update(characterId, {
        category: data.category,
        imageUrl: data["image-url"],
        description: data.description,
        moreInfo: data["additional-info"],
    });

    event.target.reset();
    ctx.page.redirect('/details/' + characterId);
}
