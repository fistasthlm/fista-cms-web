import { getAuthToken } from 'utils/session';
import { getJson } from 'utils/network';
import { networkProgress } from 'actions';

export const USER_LOADED = 'USER_LOADED';

function userLoaded(data) {
   return {
      user: data,
      type: USER_LOADED
   }
}

export function loadUser() {
   const token = getAuthToken();
   return dispatch => {
      dispatch(networkProgress());
      return getJson('/user/' + token)
         .then(response => {
            dispatch(userLoaded(response.data));
         })
         .catch(error => {
            console.log('Something when wrong', error);
         })
   }
}
