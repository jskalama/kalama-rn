import { albumsSectionsSelector } from '../ducks/SearchDuck';

describe('SearchDuck', () => {
    describe('albumsSectionsSelector', () => {
        it('should group albums by type and order by year', () => {
            const state = {
                search: {
                    albumsList: [
                        {
                            albumCategory: 2,
                            label: 'One',
                            year: 1997
                        },
                        {
                            albumCategory: 11,
                            label: 'The Best Of',
                            year: 2000
                        },
                        {
                            albumCategory: 2,
                            label: 'Two',
                            year: 1998
                        }
                    ]
                }
            };

            expect(albumsSectionsSelector(state)).toEqual([
                {
                    title: 'StudioAlbum',
                    items: [
                        {
                            albumCategory: 2,
                            label: 'Two',
                            year: 1998
                        },
                        {
                            albumCategory: 2,
                            label: 'One',
                            year: 1997
                        }
                    ]
                },
                {
                    title: 'ArtistCollection',
                    items: [
                        {
                            albumCategory: 11,
                            label: 'The Best Of',
                            year: 2000
                        }
                    ]
                }
            ]);
        });
    });
});
