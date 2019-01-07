import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Header,
    Item,
    Icon,
    Input,
    Text,
    Button,
    Left,
    Body,
    Title,
    Right,
    Spinner
} from 'native-base';
import { bindActionCreators } from 'redux';
import {
    searchActions,
    albumsListSelector,
    isGetAlbumsPendingSelector
} from '../ducks/SearchDuck';
import { Actions } from 'react-native-router-flux';
import AlbumsList from '../components/AlbumsList';

class AlbumsScene extends Component {
    render() {
        const {
            props: { albumsList, isGetAlbumsPending }
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
                    <AlbumsList items={albumsList} />
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
    dispatch => bindActionCreators({}, dispatch)
)(AlbumsScene);
