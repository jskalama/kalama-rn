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
    CardItem
} from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class PlayerScene extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Player</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>This is Player</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Button
                        dark
                        bordered
                        style={{ alignSelf: 'center', margin: 30 }}
                        onPress={() => {
                            Actions.pop();
                        }}
                    >
                        <Text>Goto Search</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
