import { createActions, handleActions } from 'redux-actions';
import _ from 'lodash';
import { AlbumCategory, getArtistAlbumsList } from 'kalama-api';

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
        CLEAR_ALBUMS: () => {},
        GET_TRACKS: {
            RUN: resource => ({ resource }),
            PENDING: () => {},
            SUCCESS: results => results,
            FAIL: error => error
        },
        CLEAR_TRACKS: () => {}
    }
});

export const searchReducer = handleActions(
    {
        //Query:
        'Search/QUERY/PENDING': (state, { payload }) => ({
            ...state,
            queryPending: true
        }),
        'Search/QUERY/SUCCESS': (state, { payload }) => ({
            ...state,
            queryResult: payload,
            queryPending: false
        }),
        'Search/QUERY/FAIL': (state, { payload }) => ({
            ...state,
            queryPending: false
        }),

        //Albums list:
        'Search/GET_ALBUMS/PENDING': (state, { payload }) => ({
            ...state,
            getAlbumsPending: true
        }),
        'Search/GET_ALBUMS/SUCCESS': (state, { payload }) => ({
            ...state,
            albumsList: payload,
            getAlbumsPending: false
        }),
        'Search/GET_ALBUMS/FAIL': (state, { payload }) => ({
            ...state,
            getAlbumsPending: false
        }),
        'Search/CLEAR_ALBUMS': (state, { payload }) => ({
            ...state,
            albumsList: []
        }),

        //Tracks list:
        'Search/GET_TRACKS/PENDING': (state, { payload }) => ({
            ...state,
            getTracksPending: true
        }),
        'Search/GET_TRACKS/SUCCESS': (state, { payload }) => ({
            ...state,
            tracksList: payload,
            getTracksPending: false
        }),
        'Search/GET_TRACKS/FAIL': (state, { payload }) => ({
            ...state,
            getTracksPending: false
        }),
        'Search/CLEAR_TRACKS': (state, { payload }) => ({
            ...state,
            tracksList: []
        })
    },
    {
        queryResult: { artists: [], albums: [], songs: [] },
        albumsList: [],
        tracksList: [],
        queryPending: false,
        getAlbumsPending: false
    }
);

export const queryResultSelector = state => state.search.queryResult;
export const albumsListSelector = state => state.search.albumsList;
export const tracksListSelector = state => state.search.tracksList;

export const isQueryPendingSelector = state => state.search.queryPending;
export const isGetAlbumsPendingSelector = state =>
    state.search.getAlbumsPending;
export const isGetTracksPendingSelector = state =>
    state.search.getTracksPending;

const categoryOrder = [
    AlbumCategory.StudioAlbum,
    AlbumCategory.EP,
    AlbumCategory.Single,
    AlbumCategory.ArtistCollection,
    AlbumCategory.Demo,
    AlbumCategory.Live,
    AlbumCategory.Bootleg,
    AlbumCategory.SoundTrack,
    AlbumCategory.Mixtape,
    AlbumCategory.DJMix,
    AlbumCategory.VariousCollection,
    AlbumCategory.FanCollection,
    AlbumCategory.Other
];

export const albumsSectionsSelector = state => {
    const categoriesDict = AlbumCategory;
    const albums = albumsListSelector(state);
    const byCat = _(albums)
        .orderBy(['year'], ['desc'])
        .groupBy('albumCategory')
        .value();

    return _(categoryOrder)
        .map(catId => [AlbumCategory[catId], byCat[catId]])
        .map(([category, items]) => ({ title: category, items }))
        .filter('items')
        .map()
        .value();
};
