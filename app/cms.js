import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import configureStore from './configure-store';
import Root from 'containers/root';
import Home from 'containers/home';
import AddNewBike from 'containers/add-new-bike';

function requireAuth(nextState, replace) {
   if (!getAuthToken()) {
      replace({ pathname: '/login' })
   }
}

function noAuth(nextState, replace) {
   if (getAuthToken()) {
      replace({ pathname: '/' })
   }
}

document.addEventListener('DOMContentLoaded', () => {
   ReactDOM.render(
      <Provider store={configureStore()}>
         <Router history={hashHistory}>
            <Route path="/" component={Root}>
               <IndexRedirect to="/home" />
               <Route path="/home" component={Home} onEnter={requireAuth} />
               <Route path="/bike" component={AddNewBike} />
            </Route>
         </Router>
      </Provider>,
      document.getElementById('app')
   );
});
