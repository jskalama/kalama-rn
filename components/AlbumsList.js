import { Body, Left, ListItem, Text, Thumbnail } from 'native-base';
import React from 'react';
import { FlatList } from 'react-native';
const defaultThumbnail = require('./default-album.png');

export default ({ items, onItemTap }) => (
    <FlatList
        data={items}
        keyExtractor={item => item.url}
        renderItem={({ item }) => (
            <ListItem thumbnail onPress={() => onItemTap(item)}>
                <Left>
                    <Thumbnail
                        square
                        small
                        defaultSource={defaultThumbnail}
                        source={{ uri: item.image }}
                        resizeMethod="resize"
                    />
                </Left>
                <Body>
                    <Text>{item.label}</Text>
                </Body>
            </ListItem>
        )}
    />
);
