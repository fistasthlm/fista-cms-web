import { postJson, getJson } from 'utils/network';
import { networkProgress } from 'actions';

export const BIKE_ADDED = 'BIKE_ADDED';
export const BIKES_LOADED = 'BIKES_LOADED';
export const BIKE_LOADED = 'BIKE_LOADED';
export const CLEAR_BIKE = 'CLEAR_BIKE';

function bikeAdded(data) {
   return {
      bike: data,
      type: BIKE_ADDED
   }
}

function bikesLoaded(data) {
   return {
      bikes: data,
      type: BIKES_LOADED
   }
}

function bikeLoaded(data) {
   return {
      bike: data,
      type: BIKE_LOADED
   }
}

export function addBike(data) {
   return dispatch => {
      dispatch(networkProgress());
      return postJson('/bike', data)
         .then(response => {
            dispatch(bikeAdded(response.data));
         })
         .catch(error => {
            console.log('Something went wrong', error);
         })
   }
}

export function loadBikes(handle) {
   return dispath => {
      dispath(networkProgress());
      return getJson('/bikes/' + handle)
         .then(response => {
            dispath(bikesLoaded(response.data));
         })
         .catch(error => {
            console.log('Something went wrong', error);
         })
   }
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
         })
   }
}

export function clearBike() {
   return dispatch => {
      dispatch({
         type: CLEAR_BIKE
      });
   };
}
