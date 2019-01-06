import { all } from 'redux-saga/effects';
import searchSaga from './searchSaga';

const rootSaga = function*() {
    yield all([searchSaga()]);
};
export default rootSaga;
