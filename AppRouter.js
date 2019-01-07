import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import PlayerScene from './scenes/PlayerScene';
import SearchScene from './scenes/SearchScene';
import AlbumsScene from './scenes/AlbumsScene';
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
                        key="player"
                        component={PlayerScene}
                        title="Player"
                    />
                </Scene>
            </Router>
        );
    }
}
