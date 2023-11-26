import { html } from "../../node_modules/lit-html/lit-html.js";
import * as eventsService from "../api/events.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (event, onSubmit) => html`
      <section id="edit">
          <div class="form">
            <h2>Edit Event</h2>
            <form @submit=${onSubmit} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                .value=${event.name}
                placeholder="Event"
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                .value=${event.imageUrl}
                placeholder="Event Image"
              />
              <input
                type="text"
                name="category"
                id="event-category"
                .value=${event.category}
                placeholder="Category"
              />


              <textarea
                id="event-description"
                name="description"
                .value=${event.description}
                placeholder="Description"
                rows="5"
                cols="50"
              ></textarea>
              
              <label for="date-and-time">Event Time:</label>
              <input
              type="text"
              name="date"
              id="date"
              .value=${event.date}
              placeholder="When?"
            />

              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`;

export async function editPage(ctx) {
    const eventId = ctx.params.id;
    const event = await eventsService.getById(eventId);

    ctx.render(editTemplate(event, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
    const eventId = ctx.params.id;

    if (Object.values(data).some((x) => x == "")) {
        alert("All fields are required!");
        return;
    }

    await eventsService.update(eventId, {
        name: data.name,
        imageUrl: data.imageUrl,
        category: data.category,
        description: data.description,
        date: data.date,
    });

    event.target.reset();
    ctx.page.redirect('/details/' + eventId);
}
