import {
    Container,
    Content,
    Header,
    Icon,
    Input,
    Item,
    Spinner
} from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import QueryResultsList from '../components/QueryResultsList';
import {
    isQueryPendingSelector,
    queryResultSelector,
    searchActions
} from '../ducks/SearchDuck';

class SearchScene extends Component {
    render() {
        const {
            props: {
                searchGetAlbumsRun,
                searchGetTracksRun,
                searchQueryRun,
                queryResult,
                isQueryPending
            }
        } = this;
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input
                            placeholder="Search"
                            onChange={event =>
                                searchQueryRun(event.nativeEvent.text)
                            }
                        />
                    </Item>
                </Header>
                <Content padder>
                    {isQueryPending ? <Spinner /> : null}
                    <QueryResultsList
                        items={queryResult}
                        onGetAlbums={searchGetAlbumsRun}
                        onGetTracks={searchGetTracksRun}
                    />
                </Content>
            </Container>
        );
    }
}

export default connect(
    state => ({
        queryResult: queryResultSelector(state),
        isQueryPending: isQueryPendingSelector(state)
    }),
    dispatch =>
        bindActionCreators(
            {
                searchQueryRun: searchActions.search.query.run,
                searchGetAlbumsRun: searchActions.search.getAlbums.run,
                searchGetTracksRun: searchActions.search.getTracks.run
            },
            dispatch
        )
)(SearchScene);
