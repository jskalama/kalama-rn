import { Body, Left, List, ListItem, Text, Thumbnail } from 'native-base';
import React from 'react';
const defaultThumbnail = require('./default-album.png');

export default ({ items, onItemTap }) => (
    <List>
        {items.map((item, i) => (
            <ListItem onPress={() => onItemTap(item)} thumbnail key={i}>
                <Left>
                    <Thumbnail
                        square
                        small
                        defaultSource={defaultThumbnail}
                        source={{ uri: item.image }}
                    />
                </Left>
                <Body>
                    <Text>{item.label}</Text>
                </Body>
            </ListItem>
        ))}
    </List>
);
