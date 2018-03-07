import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension({ serialize: true })
)(createStore);

export default function configureStore() {
    return createStoreWithMiddleware(rootReducer);
}
