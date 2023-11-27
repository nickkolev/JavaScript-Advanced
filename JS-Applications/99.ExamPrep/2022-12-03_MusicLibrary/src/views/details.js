import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as albumsService from "../api/albums.js";

const detailsTemplate = (
    album,
    onDelete,
    likes,
    hasUserLiked,
    handleLike,
    ctx
) => html`
    <section id="details">
        <div id="details-wrapper">
            <p id="details-title">Album Details</p>
            <div id="img-wrapper">
                <img src="${album.imageUrl}" alt="example1" />
            </div>
            <div id="info-wrapper">
                <p>
                    <strong>Band:</strong
                    ><span id="details-singer">${album.singer}</span>
                </p>
                <p>
                    <strong>Album name:</strong
                    ><span id="details-album">${album.album}</span>
                </p>
                <p>
                    <strong>Release date:</strong
                    ><span id="details-release">${album.release}</span>
                </p>
                <p>
                    <strong>Label:</strong
                    ><span id="details-label">${album.label}</span>
                </p>
                <p>
                    <strong>Sales:</strong
                    ><span id="details-sales">${album.sales}</span>
                </p>
            </div>
            <div id="likes">Likes: <span id="likes-count">${likes}</span></div>

            ${album.isOwner
                ? html` <div id="action-buttons">
                      <a href="/edit/${album._id}" id="edit-btn">Edit</a>
                      <a
                          @click=${onDelete}
                          href="javascript:void(0)"
                          id="delete-btn"
                          >Delete</a
                      >
                  </div>`
                : nothing}
            ${!album.isOwner && ctx.user && !hasUserLiked
                ? html` <div id="action-buttons">
                      <a href="" id="like-btn" @click=${handleLike}>Like</a>
                  </div>`
                : nothing}
        </div>
    </section>
`;

export async function detailsPage(ctx) {
    const albumId = ctx.params.id;
    const album = await albumsService.getById(albumId);

    const likes = await albumsService.getLikes(albumId);
    let isUserGoing = false;

    if (ctx.user) {
        isUserGoing = Boolean(
            await albumsService.hasUserLiked(ctx.user._id, albumId)
        );
        album.isOwner = ctx.user._id == album._ownerId;
    }

    console.log(isUserGoing);
    ctx.render(
        detailsTemplate(album, onDelete, likes, isUserGoing, handleLike, ctx)
    );

    async function onDelete() {
        const confirmed = confirm(
            "Are you sure you want to delete this album?"
        );

        if (confirmed) {
            await albumsService.deleteById(albumId);

            ctx.page.redirect("/catalog");
        }
    }

    async function handleLike(event) {
        event.preventDefault();
        await albumsService.like(albumId);

        ctx.page.redirect(`/details/${albumId}`);
    }
}
