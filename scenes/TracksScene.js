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
    isGetAlbumsPendingSelector
} from '../ducks/SearchDuck';

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
                        <Title>Tracks</Title>
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
