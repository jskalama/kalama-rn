import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Header, Item, Icon, Input } from 'native-base';
import { bindActionCreators } from 'redux';
import { searchActions, queryResultSelector } from '../ducks/SearchDuck';
import QueryResultsList from '../components/QueryResultsList';

class SearchScene extends Component {
    render() {
        const {
            props: { searchGetAlbumsRun, searchQueryRun, queryResult }
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
                    <QueryResultsList
                        items={queryResult}
                        onGetAlbums={searchGetAlbumsRun}
                    />
                </Content>
            </Container>
        );
    }
}

export default connect(
    state => ({
        queryResult: queryResultSelector(state)
    }),
    dispatch =>
        bindActionCreators(
            {
                searchQueryRun: searchActions.search.query.run,
                searchGetAlbumsRun: searchActions.search.getAlbums.run
            },
            dispatch
        )
)(SearchScene);
