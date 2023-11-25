import * as api from './api.js';

const endpoints = {
    getAll: `/data/fruits?sortBy=_createdOn%20desc`,
    create: `/data/fruits`,
    byId: `/data/fruits/`,
    deleteById: `/data/fruits/`,
    edit: `/data/fruits/`,
};

export async function getAllFruits() {
    return api.get(endpoints.getAll);
}

export async function getById(id) {
    return api.get(endpoints.byId + id);
}

export async function create(data) {
    return api.post(endpoints.create, data)
}

export async function update(id, data) {
    return api.put(endpoints.edit + id, data);
} 

export async function deleteById(id) {
    return api.del(endpoints.deleteById + id);
}

export async function search(searchText) {
    return api.get(`/data/fruits?where=name%20LIKE%20%22${searchText}%22`);
};