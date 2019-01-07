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
    Right
} from 'native-base';
import { bindActionCreators } from 'redux';
import { searchActions, albumsListSelector } from '../ducks/SearchDuck';
import { Actions } from 'react-native-router-flux';
import AlbumsList from '../components/AlbumsList';

class AlbumsScene extends Component {
    render() {
        const {
            props: { albumsList }
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
                    <AlbumsList items={albumsList} />
                </Content>
            </Container>
        );
    }
}

export default connect(
    state => ({
        albumsList: albumsListSelector(state)
    }),
    dispatch => bindActionCreators({}, dispatch)
)(AlbumsScene);
