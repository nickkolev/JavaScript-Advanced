import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as factsService from "../api/facts.js";

const detailsTemplate = (
    fact,
    onDelete,
    likes,
    hasUserLiked,
    handleLike,
    ctx
) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src="${fact.imageUrl}" alt="example1" />
            <p id="details-category">${fact.category}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p id="description">${fact.description}</p>
                    <p id="more-info">${fact.moreInfo}</p>
                </div>

                <h3>Likes:<span id="likes">${likes}</span></h3>

                <!--Edit and Delete are only for creator-->
                <div id="action-buttons">
                    ${fact.isOwner
                        ? html` <a href="/edit/${fact._id}" id="edit-btn"
                                  >Edit</a
                              >
                              <a
                                  @click=${onDelete}
                                  href="javascript:void(0)"
                                  id="delete-btn"
                                  >Delete</a
                              >`
                        : nothing}

                    <!--Bonus - Only for logged-in users ( not authors )-->
                    ${!fact.isOwner && ctx.user && !hasUserLiked
                        ? html` <div id="action-buttons">
                              <a href="" id="like-btn" @click=${handleLike}
                                  >Like</a
                              >
                          </div>`
                        : nothing}
                </div>
            </div>
        </div>
    </section>
`;

export async function detailsPage(ctx) {
    const factId = ctx.params.id;
    const fact = await factsService.getById(factId);

    const likes = await factsService.getLikes(factId);
    let isUserGoing = false;

    if (ctx.user) {
        isUserGoing = Boolean(
            await factsService.hasUserLiked(ctx.user._id, factId)
        );
        fact.isOwner = ctx.user._id == fact._ownerId;
    }

    ctx.render(
        detailsTemplate(fact, onDelete, likes, isUserGoing, handleLike, ctx)
    );

    async function onDelete() {
        const confirmed = confirm(
            "Are you sure you want to delete this album?"
        );

        if (confirmed) {
            await factsService.deleteById(factId);

            ctx.page.redirect("/catalog");
        }
    }

    async function handleLike(event) {
        event.preventDefault();
        await factsService.like(factId);

        ctx.page.redirect(`/details/${factId}`);
    }
}
