import { getJson } from 'utils/network';
import { networkProgress, resetNetwork } from 'actions';

export const USER_LOADED = 'USER_LOADED';

function userLoaded(data) {
    return {
        user: data,
        type: USER_LOADED
    };
}

export function loadUser() {
    return dispatch => {
        dispatch(networkProgress());
        return getJson('/user')
            .then(response => {
                dispatch(resetNetwork());
                dispatch(userLoaded(response.data));
            })
            .catch(error => {
                dispatch(resetNetwork());
                console.log('Something went wrong', error);
            });
    };
}
