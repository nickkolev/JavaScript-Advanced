import * as api from './api.js';

const baseUrl = '/data/events';
const endpoints = {
    getAllEvents: `${baseUrl}?sortBy=_createdOn%20desc`,
    create: `${baseUrl}`,
    byId: `${baseUrl}/`,
    deleteById: `${baseUrl}/`,
    update: `${baseUrl}/`,
};

export async function getAllEvents() {
    return api.get(endpoints.getAllEvents);
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

export async function getGoing(id) {
    return api.get(`/data/going?where=eventId%3D%22${id}%22&distinct=_ownerId&count`);
}

export async function isUserGoing(userId, eventId) {
    return api.get(`/data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export async function goToEvent(id) {
    return api.post(`/data/going`, {eventId: id});
}