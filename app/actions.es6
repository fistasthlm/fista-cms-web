import { hashHistory } from 'react-router';
import { postJson } from './utils/network';
import { saveAuthToken, updateAuthToken, removeAuthToken } from './utils/session';

export const RESET = 'RESET';
export const NETWORK = 'NETWORK';
export const SUBSCRIPTION = 'SUBSCRIPTION';
export const AUTHENTICATION = 'AUTHENTICATION';

export function networkProgress() {
   return {
      type: NETWORK,
      state: {
         networkProgress: true,
         networkFailed: false
      }
   };
}

export function networkFailed(error) {
   if (error && error.status === 401) {
      removeAuthToken();
      hashHistory.push('/login');

      return {
         type: NETWORK,
         state: {
            networkProgress: false,
            subscriptionProgress: false,
            networkFailed: true,
            authenticated: false
         }
      };
   }

   return {
      type: NETWORK,
      state: {
         networkProgress: false,
         subscriptionProgress: false,
         networkFailed: true
      }
   };
}

export function resetNetwork() {
   return {
      type: NETWORK,
      state: {
         networkProgress: false,
         subscriptionProgress: false,
         networkFailed: false
      }
   };
}

function authenticated(state, customer) {
   return {
      type: AUTHENTICATION,
      customer: customer,
      state: {
         authenticated: state
      }
   };
}

export function authenticate(data, onUnauthorized) {
   return dispatch => {
      dispatch(networkProgress());
      return postJson('/login', data)
         .then(response => {
            saveAuthToken(data.password);
            dispatch(authenticated(true, response.data));
            dispatch(resetNetwork());
            hashHistory.push('/');
         })
         .catch(error => {
            if(error.status === 401) {
               onUnauthorized();
               dispatch(resetNetwork());
            }
            else {
               dispatch(networkFailed(error));
            }
         });
   }
}
