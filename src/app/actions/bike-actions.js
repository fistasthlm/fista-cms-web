import { postJson, getJson, putJson } from 'utils/network';
import history from 'utils/history';
import { networkProgress, resetNetwork } from 'actions';

export const BIKE_ADDED = 'BIKE_ADDED';
export const BIKES_LOADED = 'BIKES_LOADED';
export const BIKE_LOADED = 'BIKE_LOADED';
export const BIKE_UPDATED = 'BIKE_UPDATED';
export const CLEAR_BIKE = 'CLEAR_BIKE';

function bikeAdded(data) {
    return {
        bike: data,
        type: BIKE_ADDED
    };
}

function bikesLoaded(data) {
    return {
        bikes: data,
        type: BIKES_LOADED
    };
}

function bikeLoaded(data) {
    return {
        bike: data,
        type: BIKE_LOADED
    };
}

function bikeUpdated(data) {
    return {
        bike: data,
        type: BIKE_UPDATED
    };
}

export function addBike(data) {
    return dispatch => {
        dispatch(networkProgress());
        return postJson('/bike', data)
            .then(response => {
                dispatch(bikeAdded(response.data));
                dispatch(loadBikes(data.instagram));
                history.push('/bikes');
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });
    };
}

export function loadBikes(handle) {
    return dispath => {
        dispath(networkProgress());
        return getJson('/bikes/' + handle)
            .then(response => {
                dispath(resetNetwork());
                dispath(bikesLoaded(response.data));
            })
            .catch(error => {
                dispath(resetNetwork());
                console.log('Something went wrong', error);
            });
    };
}

export function loadBike(id) {
    return dispatch => {
        dispatch(networkProgress());
        return getJson('/bike/' + id)
            .then(response => {
                dispatch(bikeLoaded(response.data));
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });
    };
}

export function updateBike(data) {
    return dispatch => {
        dispatch(networkProgress());
        return putJson(`/bike/${data.id}`, data)
            .then(response => {
                dispatch(bikeUpdated(response.data));
                dispatch(loadBikes(data.instagram));
                history.push('/bikes');
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });
    };
}

export function clearBike() {
    return dispatch => {
        dispatch({
            type: CLEAR_BIKE
        });
    };
}
