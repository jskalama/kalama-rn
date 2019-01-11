import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import AlbumsScene from './scenes/AlbumsScene';
import SearchScene from './scenes/SearchScene';
import TracksScene from './scenes/TracksScene';
export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Scene hideNavBar key="root">
                    <Scene
                        initial
                        key="search"
                        component={SearchScene}
                        title="Search"
                    />
                    <Scene
                        key="albums"
                        component={AlbumsScene}
                        title="Albums"
                    />
                    <Scene
                        key="tracks"
                        component={TracksScene}
                        title="Tracks"
                    />
                </Scene>
            </Router>
        );
    }
}
