import * as api from './api.js';

const endpoints = {
    getAllProducts: "/data/products?sortBy=_createdOn%20desc",
    create: `/data/products`,
    byId: `/data/products/`,
    deleteById: `/data/products/`,
    update: `/data/products/`,
};

export async function getAllProducts() {
    return api.get(endpoints.getAllProducts);
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

export async function getBoughtCount(id) {
    return api.get(`/data/bought?where=productId%3D%22${id}%22&distinct=_ownerId&count`);
}

export async function hasUserBought(userId, productId) {
    return api.get(`/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export async function buyProduct(id) {
    return api.post(`/data/bought`, {productId: id});
}