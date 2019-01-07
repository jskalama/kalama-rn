import React, { Component } from 'react';
import { List, ListItem, Left, Thumbnail, Body, Text } from 'native-base';

export default ({ items }) => (
    <List>
        {items.map((item, i) => (
            <ListItem thumbnail key={i}>
                <Left>
                    <Thumbnail square small source={{ uri: item.image }} />
                </Left>
                <Body>
                    <Text>{item.label}</Text>
                </Body>
            </ListItem>
        ))}
    </List>
);
