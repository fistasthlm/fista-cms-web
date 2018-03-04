import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import configureStore from './configure-store';
import Root from 'containers/root';
import './styles/main.scss';

const store = configureStore();
const history = createBrowserHistory();

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Root />
        </ConnectedRouter>
    </Provider>
);

export default App;
