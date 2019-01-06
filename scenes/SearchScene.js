import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Text,
    Header,
    Button,
    Item,
    Icon,
    Input
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { searchActions, queryResultSelector } from '../ducks/SearchDuck';
import QueryResultsList from '../components/QueryResultsList';

class SearchScene extends Component {
    render() {
        const {
            props: { searchQueryRun, queryResult }
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
                    <QueryResultsList items={queryResult} />
                    {/* <Text>{JSON.stringify(queryResult, false, 2)}</Text> */}
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
                searchQueryRun: searchActions.search.query.run
            },
            dispatch
        )
)(SearchScene);
