import { combineReducers } from 'redux';
import Immutable from 'immutable';
import { isAuthenticated } from './utils/session';
import { AUTHENTICATION, NETWORK, SUBSCRIPTION, RESET } from 'actions';


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

      case RESET:
         return state.merge({authenticated: false});

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
   userState,
   bikeState
});

export default rootReducer;
