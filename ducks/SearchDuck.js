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
                queryResult: payload
            })
        ]
    ]),
    {
        queryResult: { artists: [], albums: [], songs: [] }
    }
);

export const queryResultSelector = state => state.search.queryResult;
