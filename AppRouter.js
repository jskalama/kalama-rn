import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import PlayerScene from './scenes/PlayerScene';
import SearchScene from './scenes/SearchScene';
export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Scene hideNavBar key="root">
                    <Scene
                        key="player"
                        component={PlayerScene}
                        title="Player"
                        />
                    <Scene
                        key="search"
                        component={SearchScene}
                        title="Search"
                        initial={true}
                    />
                </Scene>
            </Router>
        );
    }
}
