import { html } from "../../node_modules/lit-html/lit-html.js";
import * as albumsService from "../api/albums.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (album, onSubmit) => html`
        <section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="singer" id="album-singer" .value=${album.singer} placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" .value=${album.album} placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" .value=${album.imageUrl} placeholder="Image url" />
            <input type="text" name="release" id="album-release" .value=${album.release} placeholder="Release date" />
            <input type="text" name="label" id="album-label" .value=${album.label} placeholder="Label" />
            <input type="text" name="sales" id="album-sales" .value=${album.sales} placeholder="Sales" />

            <button type="submit">post</button>
          </form>
        </div>
      </section>
`;

export async function editPage(ctx) {
    const albumId = ctx.params.id;
    const album = await albumsService.getById(albumId);

    ctx.render(editTemplate(album, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
    const albumId = ctx.params.id;

    if (Object.values(data).some((x) => x == "")) {
        alert("All fields are required!");
        return;
    }

    await albumsService.update(albumId, {
        singer: data.singer,
        album: data.album,
        imageUrl: data.imageUrl,
        release: data.release,
        label: data.label,
        sales: data.sales,
    });

    event.target.reset();
    ctx.page.redirect('/details/' + albumId);
}
