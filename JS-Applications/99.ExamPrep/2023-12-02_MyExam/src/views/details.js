import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as charactersService from "../api/characters.js";

const detailsTemplate = (
    character,
    onDelete,
    likes,
    hasUserLiked,
    handleLike,
    ctx
) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src="${character.imageUrl}" alt="example1" />
            <div>
                <p id="details-category">${character.category}</p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p id="description">${character.description}</p>
                        <p id="more-info">${character.moreInfo}</p>
                    </div>
                </div>

                <h3>Is This Useful:<span id="likes">${likes}</span></h3>

                ${character.isOwner
                    ? html` <div id="action-buttons">
                          <a href="/edit/${character._id}" id="edit-btn"
                              >Edit</a
                          >
                          <a
                              @click=${onDelete}
                              href="javascript:void(0)"
                              id="delete-btn"
                              >Delete</a
                          >
                      </div>`
                    : nothing}
                ${!character.isOwner && ctx.user && !hasUserLiked
                    ? html` <div id="action-buttons">
                          <a href="" id="like-btn" @click=${handleLike}>Like</a>
                      </div>`
                    : nothing}
            </div>
        </div>
    </section>
`;

export async function detailsPage(ctx) {
    const characterId = ctx.params.id;
    const character = await charactersService.getById(characterId);

    const likes = await charactersService.getLikes(characterId);
    let isUserGoing = false;

    if (ctx.user) {
        isUserGoing = Boolean(
            await charactersService.hasUserLiked(ctx.user._id, characterId)
        );
        character.isOwner = ctx.user._id == character._ownerId;
    }

    ctx.render(
        detailsTemplate(character, onDelete, likes, isUserGoing, handleLike, ctx)
    );

    async function onDelete() {
        const confirmed = confirm(
            "Are you sure you want to delete this Hero?"
        );

        if (confirmed) {
            await charactersService.deleteById(characterId);

            ctx.page.redirect("/catalog");
        }
    }

    async function handleLike(event) {
        event.preventDefault();
        await charactersService.like(characterId);

        ctx.page.redirect(`/details/${characterId}`);
    }
}
