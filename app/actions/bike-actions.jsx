import { postJson, getJson } from 'utils/network';
import { networkProgress } from 'actions';

export const BIKE_ADDED = 'BIKE_ADDED';
export const BIKES_LOADED = 'BIKES_LOADED';

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
      return getJson('/bike/' + handle)
         .then(response => {
            dispath(bikesLoaded(response.data));
         })
         .catch(error => {
            console.log('Something went wrong', error);
         })
   }
}
