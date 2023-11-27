import * as api from './api.js';

const baseUrl = '/data/albums';
const endpoints = {
    getAllAlbums: `${baseUrl}?sortBy=_createdOn%20desc`,
    create: `${baseUrl}`,
    byId: `${baseUrl}/`,
    deleteById: `${baseUrl}/`,
    update: `${baseUrl}/`,
};

export async function getAllAlbums() {
    return api.get(endpoints.getAllAlbums);
}

export async function getById(id) {
    return api.get(endpoints.byId + id);
}

export async function create(data) {
    return api.post(endpoints.create, data)
}

export async function update(id, data) {
    return api.put(endpoints.update + id, data);
} 

export async function deleteById(id) {
    return api.del(endpoints.deleteById + id);
}

export async function getLikes(id) {
    return api.get(`/data/likes?where=albumId%3D%22${id}%22&distinct=_ownerId&count`);
}

export async function hasUserLiked(userId, albumId) {
    return api.get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export async function like(id) {
    return api.post(`/data/likes`, {albumId: id});
}