import { delay } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import { searchActions } from '../ducks/SearchDuck';
import { search, getArtistAlbumsList } from 'kalama-api';
import { Actions } from 'react-native-router-flux';

function* onSearchQueryRun({ payload: { q } }) {
    yield delay(600);
    if (!q || q.trim().length === 0) {
        return;
    }
    try {
        yield put(searchActions.search.query.pending());
        const res = yield call(search, q);
        yield put(searchActions.search.query.success(res));
    } catch (e) {
        yield put(searchActions.search.query.fail(e));
    }
}
function* onSearchGetAlbumsRun({ payload: { artist } }) {
    try {
        yield put(searchActions.search.clearAlbums());
        yield call(Actions.albums);
        yield put(searchActions.search.getAlbums.pending());
        const res = yield call(getArtistAlbumsList, artist);
        yield put(searchActions.search.getAlbums.success(res));
    } catch (e) {
        yield call(Actions.search);
        yield put(searchActions.search.getAlbums.fail(e));
    }
}

export default function* searchSaga() {
    yield takeLatest('Search/QUERY/RUN', onSearchQueryRun);
    yield takeLatest('Search/GET_ALBUMS/RUN', onSearchGetAlbumsRun);
}
