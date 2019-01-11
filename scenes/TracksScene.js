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
import TracksList from '../components/TracksList';
import {
    isGetTracksPendingSelector,
    tracksListSelector
} from '../ducks/SearchDuck';

class TracksScene extends Component {
    render() {
        const {
            props: { tracksList, isGetTracksPending }
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
                    {isGetTracksPending ? <Spinner /> : null}
                    <TracksList items={tracksList} />
                </Content>
            </Container>
        );
    }
}

export default connect(
    state => ({
        tracksList: tracksListSelector(state),
        isGetTracksPending: isGetTracksPendingSelector(state)
    }),
    dispatch => bindActionCreators({}, dispatch)
)(TracksScene);
