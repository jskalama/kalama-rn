import {
    Body,
    Button,
    Container,
    Content,
    Header,
    Icon,
    Left,
    Spinner,
    Text,
    Title,
    View
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
import { downloadActions } from '../ducks/DownloadDuck';

class TracksScene extends Component {
    handleDownloadPress = () => {
        const {
            props: { tracksList, downloadBatchRun }
        } = this;
        downloadBatchRun(tracksList);
    };

    render() {
        const {
            handleDownloadPress,
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

                    <View>
                        <Button
                            onPress={handleDownloadPress}
                            style={{ alignSelf: 'flex-end' }}
                        >
                            <Text>Download</Text>
                        </Button>
                    </View>

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
    dispatch =>
        bindActionCreators(
            {
                downloadBatchRun: downloadActions.download.batch.run
            },
            dispatch
        )
)(TracksScene);
