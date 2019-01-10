import {
    Body,
    Button,
    Container,
    Content,
    Header,
    Icon,
    Left,
    Spinner,
    Title
} from 'native-base';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AlbumsList from '../components/AlbumsList';
import {
    albumsListSelector,
    isGetAlbumsPendingSelector,
    searchActions
} from '../ducks/SearchDuck';

class AlbumsScene extends Component {
    render() {
        const {
            props: { albumsList, isGetAlbumsPending, searchGetTracksRun }
        } = this;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => Actions.pop()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Albums</Title>
                    </Body>
                </Header>
                <Content padder>
                    {isGetAlbumsPending ? <Spinner /> : null}
                    <AlbumsList
                        onItemTap={item => searchGetTracksRun(item)}
                        items={albumsList}
                    />
                </Content>
            </Container>
        );
    }
}

export default connect(
    state => ({
        albumsList: albumsListSelector(state),
        isGetAlbumsPending: isGetAlbumsPendingSelector(state)
    }),
    dispatch =>
        bindActionCreators(
            {
                searchGetTracksRun: searchActions.search.getTracks.run
            },
            dispatch
        )
)(AlbumsScene);
