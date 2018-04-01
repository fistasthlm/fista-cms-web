import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import { isAuthenticated } from './utils/session';
import * as AppActions from 'actions';
import * as UserActions from './actions/user-actions';
import * as BikeActions from './actions/bike-actions';


function appState(state = fromJS({
    networkFailed: false,
    networkProgress: false,
    subscriptionProgress: false,
    authenticated: isAuthenticated(),
    showNavigation: true
}), action = null) {
    switch (action.type) {
        case AppActions.NETWORK_PROGRESS:
            return state.merge(action.state);

        case AppActions.AUTHENTICATION:
            return state.merge({ authenticated: true });

        case AppActions.RESET:
            return state.merge({ authenticated: false });

        default:
            return state;
    }
}

function userState(state = fromJS({
    user: {}
}), action = null) {
    switch (action.type) {
        case AppActions.AUTHENTICATION:
        case UserActions.USER_LOADED:
            return state.merge({ user: action.user });
        default:
            return state;
    }
}

function bikeState(state = fromJS({
    bikes: {},
    bike: {}
}), action = null) {
    switch (action.type) {
        case BikeActions.BIKES_LOADED:
            return state.merge({ bikes: action.bikes });
        case BikeActions.BIKE_LOADED:
            return state.merge({ bike: action.bike });
        case BikeActions.CLEAR_BIKE:
            return state.merge({ bike: {} });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    appState,
    userState,
    bikeState
});

export default rootReducer;
