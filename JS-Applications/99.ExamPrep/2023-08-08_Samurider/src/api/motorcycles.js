import * as api from './api.js';

const baseUrl = '/data/motorcycles';
const endpoints = {
    getAll: `${baseUrl}?sortBy=_createdOn%20desc`,
    create: `${baseUrl}`,
    byId: `${baseUrl}/`,
    deleteById: `${baseUrl}/`,
    update: `${baseUrl}/`,
};

export async function getAllMotorcycles() {
    return api.get(endpoints.getAll);
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

export async function search(searchText) {
    const query = encodeURIComponent(`model LIKE "${searchText}"`)
    return api.get(`${baseUrl}?where=${query}`);
};