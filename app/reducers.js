import { combineReducers } from 'redux';
import Immutable from 'immutable';
import { isAuthenticated } from './utils/session';
import { AUTHENTICATION, NETWORK, SUBSCRIPTION, RESET } from 'actions';
import { USER_LOADED } from 'actions/user-actions';
import { BIKES_LOADED } from 'actions/bike-actions';


function appState(state = Immutable.Map({
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
         return state.merge({ authenticated: true });

      case RESET:
         return state.merge({ authenticated: false });

      default:
         return state;
   }
}

function userState (state = Immutable.Map({
}), action = null) {
   switch (action.type) {
      case AUTHENTICATION:
      case USER_LOADED:
         return state.merge({ user: action.user });
      default:
         return state;
   }
}

function bikeState(state = Immutable.Map({
}), action = null) {
   switch (action.type) {
      case BIKES_LOADED:
         return state.merge({ bikes: action.bikes});
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
