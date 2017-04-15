import { postJson } from 'utils/network';
import { networkProgress } from 'actions';

export const BIKE_ADDED = 'BIKE_ADDED';

function bikeAdded(data) {
   return {
      bike: data,
      type: BIKE_ADDED
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
