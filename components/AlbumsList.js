import { Body, Left, ListItem, Text, Thumbnail, Right } from 'native-base';
import React from 'react';
import { SectionList } from 'react-native';
const defaultThumbnail = require('./default-album.png');

export default ({ items, onItemTap }) => (
    <SectionList
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
                {item.year ? (
                    <Right>
                        <Text>{item.year}</Text>
                    </Right>
                ) : null}
            </ListItem>
        )}
        renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
        )}
        sections={items}
        keyExtractor={item => item.url}
    />
);
