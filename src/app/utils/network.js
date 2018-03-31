import axios, { xhr, dispatchRequest } from 'axios';
import { getAuthToken } from './session';

const instance = axios.create({
    baseURL: getApiUrl()
});


export function getApiUrl() {

    return process.env.NODE_ENV !== 'production' ?
            'http://localhost:3000/'
        :
            'https://fista-cms-api.herokuapp.com/';
}

function getJsonHeaders() {
    return {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-fista-authenticate': getAuthToken()
        }
    };
}

export function getJson(url) {
    return instance.get(url, getJsonHeaders());
}

export function putJson(url, data) {
    return instance.put(url, JSON.stringify(data), getJsonHeaders());
}

export function postJson(url, data) {
    return instance.post(url, JSON.stringify(data), getJsonHeaders());
}
