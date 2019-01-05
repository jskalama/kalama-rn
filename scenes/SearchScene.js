import React, { Component } from 'react';
import {
    Container,
    Content,
    Text,
    Card,
    Header,
    Body,
    Button,
    Title,
    CardItem,
    Item,
    Icon,
    Input
} from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class SearchScene extends Component {
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content padder>
                    <Text>Hello world!</Text>
                </Content>
            </Container>
        );
    }
}
