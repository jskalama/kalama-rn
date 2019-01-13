import { createActions, handleActions } from 'redux-actions';

export const downloadActions = createActions({
    Download: {
        BATCH: {
            RUN: tracks => ({ tracks })
        }
    }
});
