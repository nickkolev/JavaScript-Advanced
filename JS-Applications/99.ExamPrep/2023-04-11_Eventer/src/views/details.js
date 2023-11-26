import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as eventsService from "../api/events.js";

const detailsTemplate = (event, onDelete, going, isUserGoing, handleGoing, ctx) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${event.imageUrl}" alt="example1" />
            <p id="details-title">${event.name}</p>
            <p id="details-category">
              Category: <span id="categories">${event.category}</span>
            </p>
            <p id="details-date">
              Date:<span id="date">${event.date}</span></p>
            <div id="info-wrapper">
              <div id="details-description">
                <span>${event.description}</span>
              </div>

            </div>

            <h3>Going: <span id="go">${going}</span> times.</h3>

            <!--Edit and Delete are only for creator-->
              ${
                  event.isOwner
                      ? html` <div id="action-buttons">
                            <a href="/edit/${event._id}" id="edit-btn">Edit</a>
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
                  !event.isOwner && ctx.user && !isUserGoing
                      ? html`<a href="/going" id="go-btn" @click=${handleGoing}>Going</a>`
                      : nothing
              }
              
            </div>
          </div>
        </section>
`;

export async function detailsPage(ctx) {
    const eventId = ctx.params.id;
    const event = await eventsService.getById(eventId);
    const going = await eventsService.getGoing(eventId);
    let isUserGoing = false;

    if (ctx.user) {
        isUserGoing = Boolean(await eventsService.isUserGoing(
            ctx.user._id,
            eventId
        ));
        event.isOwner = ctx.user._id == event._ownerId;
    }

    ctx.render(detailsTemplate(event, onDelete, going, isUserGoing, handleGoing, ctx));

    async function onDelete() {
        const confirmed = confirm(
            "Are you sure you want to delete this motorcycle?"
        );

        if (confirmed) {
            await eventsService.deleteById(eventId);

            ctx.page.redirect("/catalog");
        }
    }

    async function handleGoing(event) {
      event.preventDefault();
      await eventsService.goToEvent(eventId);

      ctx.page.redirect(`/details/${eventId}`);
    }
}
