import { postJson } from './utils/network';
import { saveAuthToken, removeAuthToken } from './utils/session';
import history from 'utils/history';

export const RESET = 'RESET';
export const NETWORK_PROGRESS = 'NETWORK_PROGRESS';
export const SUBSCRIPTION = 'SUBSCRIPTION';
export const AUTHENTICATION = 'AUTHENTICATION';

function authenticated(state, user) {
    return {
        type: AUTHENTICATION,
        user: user,
        state: {
            authenticated: state
        }
    };
}

export function networkProgress() {
    return {
        type: NETWORK_PROGRESS,
        state: {
            networkProgress: true,
            networkFailed: false
        }
    };
}

export function networkFailed(error) {
    if (error && error.status === 401) {
        removeAuthToken();

        return {
            type: NETWORK_PROGRESS,
            state: {
                networkProgress: false,
                subscriptionProgress: false,
                networkFailed: true,
                authenticated: false
            }
        };
    }

    return {
        type: NETWORK_PROGRESS,
        state: {
            networkProgress: false,
            subscriptionProgress: false,
            networkFailed: true
        }
    };
}

export function resetNetwork() {
    return {
        type: NETWORK_PROGRESS,
        state: {
            networkProgress: false,
            subscriptionProgress: false,
            networkFailed: false
        }
    };
}

export function logout() {
    removeAuthToken();

    return {
        type: RESET
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
                console.log('pong');
                history.push('/');
            })
            .catch(error => {
                if (error.status === 401) {
                    onUnauthorized();
                    dispatch(resetNetwork());
                }
                else {
                    dispatch(networkFailed(error));
                }
            });
    };
}
