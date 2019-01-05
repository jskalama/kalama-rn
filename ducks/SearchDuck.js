import { createActions } from 'redux-actions';

export const actions = createActions({
    Search: {
        SEARCH: {
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
