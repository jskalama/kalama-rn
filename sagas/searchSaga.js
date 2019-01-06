import { delay } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import { searchActions } from '../ducks/SearchDuck';
import { search } from 'kalama-api';

export default function* searchSaga() {
    yield takeLatest('Search/QUERY/RUN', function* onsearchQueryRun({
        payload: { q }
    }) {
        yield delay(600);
        try {
            yield put(searchActions.search.query.pending());
            const res = yield call(search, q);
            yield put(searchActions.search.query.success(res));
        } catch (e) {
            yield put(searchActions.search.query.fail(e));
        }
    });
}
