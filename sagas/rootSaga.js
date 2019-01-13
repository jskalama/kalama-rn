import { all } from 'redux-saga/effects';
import searchSaga from './searchSaga';
import downloadSaga from './downloadSaga';

const rootSaga = function*() {
    yield all([searchSaga(), downloadSaga()]);
};
export default rootSaga;
