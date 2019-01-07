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
        }
    }
});

export const searchReducer = handleActions(
    new Map([
        [
            searchActions.search.query.success,
            (state, { payload }) => ({
                ...state,
                queryResult: payload
            })
        ],
        [
            searchActions.search.getAlbums.success,
            (state, { payload }) => ({
                ...state,
                albumsList: payload
            })
        ]
    ]),
    {
        queryResult: { artists: [], albums: [], songs: [] },
        albumsList: []
    }
);

export const queryResultSelector = state => state.search.queryResult;
export const albumsListSelector = state => state.search.albumsList;
