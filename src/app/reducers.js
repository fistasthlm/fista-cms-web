import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import { isAuthenticated } from './utils/session';
import { AUTHENTICATION, NETWORK, SUBSCRIPTION, RESET } from 'actions';
import { USER_LOADED } from './actions/user-actions';
import * as BikeActions from './actions/bike-actions';


function appState(state = fromJS({
    networkFailed: false,
    networkProgress: false,
    subscriptionProgress: false,
    authenticated: isAuthenticated(),
    showNavigation: true
}), action = null) {
    switch (action.type) {
        case NETWORK:
        case SUBSCRIPTION:
        case AUTHENTICATION:
            return state.merge({authenticated: true});

        case RESET:
            return state.merge({authenticated: false});

        default:
            return state;
    }
}

function userState(state = fromJS({
    user: {}
}), action = null) {
    switch (action.type) {
        case AUTHENTICATION:
        case USER_LOADED:
            return state.merge({user: action.user});
        default:
            return state;
    }
}

function bikeState(state = fromJS({}), action = null) {
    switch (action.type) {
        case BikeActions.BIKES_LOADED:
            return state.merge({bikes: action.bikes});
        case BikeActions.BIKE_LOADED:
            return state.merge({bike: action.bike});
        case BikeActions.CLEAR_BIKE:
            return state.merge({bike: {}});
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
