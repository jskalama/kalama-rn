import { createStore, applyMiddleware, compose } from 'redux';
import reduxLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import rootReducer from './reducers/rootReducer';

//TODO: check how it works in react-native!
const dev = process.env.NODE_ENV !== 'production';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
if (dev) {
    middleware.push(reduxLogger);
}

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);
export default store;
