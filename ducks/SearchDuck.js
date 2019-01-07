import { createActions, handleActions } from 'redux-actions';

export const searchActions = createActions({
    Search: {
        QUERY: {
            RUN: q => ({ q }),
            PENDING: () => {},
            SUCCESS: results => results,
            FAIL: error => error
        },
        GET_ALBUMS: {
            RUN: artist => ({ artist }),
            PENDING: () => {},
            SUCCESS: results => results,
            FAIL: error => error
        },
        CLEAR_ALBUMS: () => {}
    }
});

export const searchReducer = handleActions(
    new Map([
        [
            searchActions.search.query.pending,
            (state, { payload }) => ({
                ...state,
                queryPending: true
            })
        ],
        [
            searchActions.search.query.success,
            (state, { payload }) => ({
                ...state,
                queryResult: payload,
                queryPending: false
            })
        ],
        [
            (searchActions.search.query.fail,
            (state, { payload }) => ({
                ...state,
                queryPending: false
            }))
        ],
        [
            searchActions.search.getAlbums.pending,
            (state, { payload }) => ({
                ...state,
                getAlbumsPending: true
            })
        ],
        [
            searchActions.search.getAlbums.success,
            (state, { payload }) => ({
                ...state,
                albumsList: payload,
                getAlbumsPending: false
            })
        ],
        [
            searchActions.search.getAlbums.fail,
            (state, { payload }) => ({
                ...state,
                getAlbumsPending: false
            })
        ],
        [
            searchActions.search.clearAlbums,
            (state, { payload }) => ({
                ...state,
                albumsList: []
            })
        ]
    ]),
    {
        queryResult: { artists: [], albums: [], songs: [] },
        albumsList: [],
        queryPending: false,
        getAlbumsPending: false
    }
);

export const queryResultSelector = state => state.search.queryResult;
export const albumsListSelector = state => state.search.albumsList;

export const isQueryPendingSelector = state => state.search.queryPending;
export const isGetAlbumsPendingSelector = state =>
    state.search.getAlbumsPending;
