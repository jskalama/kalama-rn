import React, { Component } from 'react';
import { List, ListItem, Left, Thumbnail, Body, Text } from 'native-base';

export default ({ items }) => (
    <List>
        {items.map((item, i) => (
            <ListItem thumbnail key={i}>
                <Left>
                    {item.image ? (
                        <Thumbnail small source={{ uri: item.image }} />
                    ) : (
                        <Thumbnail
                            small
                            source={require('./default-album.png')}
                        />
                    )}
                </Left>
                <Body>
                    <Text>{item.label}</Text>
                </Body>
            </ListItem>
        ))}
    </List>
);
