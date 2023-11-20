import * as albumService from "../services/albumService.js";

export const deleteView = async (ctx) => {
    try {
        const album = await albumService.getOne(ctx.params.albumId);
    
        let confirmed = confirm(`Do you want to delete th album: ${album.name}`);
    
        if(confirmed) {
            await albumService.remove(album._id);
            ctx.page.redirect('/catalog');
        }
    } catch (error) {
        alert(error);
    }
};
