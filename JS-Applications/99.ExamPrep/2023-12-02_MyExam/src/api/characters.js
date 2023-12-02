import * as api from './api.js';

const baseUrl = '/data/characters';
const endpoints = {
    getAllCharacters: `${baseUrl}?sortBy=_createdOn%20desc`,
    create: `${baseUrl}`,
    byId: `${baseUrl}/`,
    deleteById: `${baseUrl}/`,
    update: `${baseUrl}/`,
};

export async function getAllCharacters() {
    return api.get(endpoints.getAllCharacters);
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

export async function getLikes(characterId) {
    return api.get(`/data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`);
}

export async function hasUserLiked(userId, characterId) {
    return api.get(`/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export async function like(id) {
    return api.post(`/data/useful`, {characterId: id});
}