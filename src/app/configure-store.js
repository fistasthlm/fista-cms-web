import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
    hasDevtools() ? window.devToolsExtension({ serialize: true }) : f => f
)(createStore);

export default function configureStore() {
    return createStoreWithMiddleware(rootReducer);
}

function hasDevtools() {
    return (process.env.NODE_ENV !== 'production' && (typeof window.devToolsExtension !== 'undefined'));
}
