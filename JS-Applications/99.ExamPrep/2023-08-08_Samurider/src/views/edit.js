import { html } from "../../node_modules/lit-html/lit-html.js";
import * as motorcyclesService from "../api/motorcycles.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (motorcycle, onSubmit) => html`
        <section id="edit">
        <h2>Edit Motorcycle</h2>
        <div class="form">
          <h2>Edit Motorcycle</h2>
          <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="model" id="model" .value=${motorcycle.model} placeholder="Model" />
            <input type="text" name="imageUrl" id="moto-image" .value=${motorcycle.imageUrl} placeholder="Moto Image" />
            <input type="number" name="year" id="year" .value=${motorcycle.year} placeholder="Year" />
            <input type="number" name="mileage" id="mileage" .value=${motorcycle.mileage} placeholder="mileage" />
            <input type="number" name="contact" id="contact" .value=${motorcycle.contact} placeholder="contact" />
            <textarea id="about" name="about" .value=${motorcycle.about} placeholder="about" rows="10" cols="50"></textarea>
            <button type="submit">Edit Motorcycle</button>
          </form>
        </div>
      </section>
`;

export async function editPage(ctx) {
    const motorcycleId = ctx.params.id;
    const motorcycle = await motorcyclesService.getById(motorcycleId);

    ctx.render(editTemplate(motorcycle, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
    const motorcycleId = ctx.params.id;

    if (Object.values(data).some((x) => x == "")) {
        alert("All fields are required!");
        return;
    }

    await motorcyclesService.update(motorcycleId, {
        model: data.model,
        imageUrl: data.imageUrl,
        year: data.year,
        mileage: data.mileage,
        contact: data.contact,
        about: data.about,
    });

    event.target.reset();
    ctx.page.redirect('/details/' + motorcycleId);
}
