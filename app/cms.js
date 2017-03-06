import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import configureStore from './configure-store';
import Root from 'containers/root';

document.addEventListener('DOMContentLoaded', () => {
   ReactDOM.render(
      <Provider store={configureStore()}>
         <Router history={hashHistory}>
            <Route path="/" component={Root}>

            </Route>
         </Router>
      </Provider>,
      document.getElementById('app')
   );
});
