import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../util.js";
import * as albumsService from "../api/albums.js";

const createTemplate = (onSubmit) => html`
    <section id="create">
        <div class="form">
            <h2>Add Album</h2>
            <form @submit=${onSubmit} class="create-form">
                <input
                    type="text"
                    name="singer"
                    id="album-singer"
                    placeholder="Singer/Band"
                />
                <input
                    type="text"
                    name="album"
                    id="album-album"
                    placeholder="Album"
                />
                <input
                    type="text"
                    name="imageUrl"
                    id="album-img"
                    placeholder="Image url"
                />
                <input
                    type="text"
                    name="release"
                    id="album-release"
                    placeholder="Release date"
                />
                <input
                    type="text"
                    name="label"
                    id="album-label"
                    placeholder="Label"
                />
                <input
                    type="text"
                    name="sales"
                    id="album-sales"
                    placeholder="Sales"
                />

                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;

export function createPage(ctx) {
    ctx.render(createTemplate(createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
    console.log(data);
    if (Object.values(data).some((x) => x == "")) {
        alert("All fields are required!");
        return;
    }

    await albumsService.create({
        singer: data.singer,
        album: data.album,
        imageUrl: data.imageUrl,
        release: data.release,
        label: data.label,
        sales: data.sales,
    });

    event.target.reset();
    ctx.page.redirect("/catalog");
}
