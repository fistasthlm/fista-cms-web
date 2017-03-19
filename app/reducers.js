import { combineReducers } from 'redux';
import Immutable from 'immutable';
import { isAuthenticated } from './utils/session';
import { AUTHENTICATION, NETWORK, SUBSCRIPTION } from 'actions';


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
         return state.merge(action.state);

      default:
         return state;
   }
}

function userState (state = Immutable.Map({
   user: {}
}), action = null) {
   switch (action.type) {
      case AUTHENTICATION:
         return state.merge(action.user);
      default:
         return state;
   }
}

function bikeState(state = Immutable.Map({
   bikes: []
}), action = null) {
   switch (action.type) {
      default:
         return state;
   }
}

const rootReducer = combineReducers({
   appState,
   userState
});

export default rootReducer;
