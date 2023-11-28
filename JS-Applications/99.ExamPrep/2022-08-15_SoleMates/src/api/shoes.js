import * as api from './api.js';

const endpoints = {
    getAllShoes: `/data/shoes?sortBy=_createdOn%20desc`,
    create: `/data/shoes`,
    byId: `/data/shoes/`,
    deleteById: `/data/shoes/`,
    edit: `/data/shoes/`,
};

export async function getAllShoes() {
    return api.get(endpoints.getAllShoes);
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
    return api.get(`/data/shoes?where=name%20LIKE%20%22${searchText}%22`);
};