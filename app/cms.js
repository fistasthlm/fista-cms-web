import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import configureStore from './configure-store';
import { getAuthToken, saveAuthTokenFromQueryString } from './utils/session';
import Root from 'containers/root';
import Home from 'containers/home';
import Login from 'containers/login';
import AddBike from 'containers/add-bike';
import Bikes from 'containers/bikes';
import Bike from 'containers/bike';
import EditBike from 'containers/edit-bike';
function requireAuth(nextState, replace) {
   if (!getAuthToken()) {
      replace({ pathname: '/login' });
   }
}

function noAuth(nextState, replace) {
   if (getAuthToken()) {
      replace({ pathname: '/' });
   }
}

function getTokenValue() {
   const reg = new RegExp('[?&]authToken=([^&#]*)', 'i');
   const string = reg.exec(window.location.href);
   return string ? string[1] : null;
}

document.addEventListener('DOMContentLoaded', () => {
   ReactDOM.render(
      <Provider store={configureStore()}>
         <Router history={hashHistory}>
            <Route path="/" component={Root}>
               <IndexRedirect to="/home" />
               <Route path="/home" component={Home} onEnter={requireAuth} />
               <Route path="/add" component={AddBike} onEnter={requireAuth} />
               <Route path="/bikes" component={Bikes} onEnter={requireAuth} />
               <Route path="/bike/:id" component={Bike} onEnter={requireAuth} />
               <Route path="/edit/:id" component={EditBike} onEnter={requireAuth} />
               <Route path="/login" component={Login} onEnter={noAuth} />
            </Route>
         </Router>
      </Provider>,
      document.getElementById('app')
   );
});
