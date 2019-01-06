import React, { Component } from 'react';
import {
    Card,
    ListItem,
    Body,
    Text,
    List,
    Left,
    Right,
    Thumbnail
} from 'native-base';

const QueryResult = ({ header, items }) => (
    <>
        <ListItem itemHeader>{header}</ListItem>
        {items.map((item, i) => (
            <ListItem thumbnail key={i}>
                <Left>
                    {item.image ? (
                        <Thumbnail source={{ uri: item.image }} />
                    ) : null}
                </Left>

                <Body>
                    <Text>{item.label}</Text>
                </Body>
                <Right />
            </ListItem>
        ))}
    </>
);

export default ({ items: { artists, albums, songs } }) => (
    <List>
        {artists.length ? (
            <QueryResult header={<Text>Artists</Text>} items={artists} />
        ) : null}
        {albums.length ? (
            <QueryResult header={<Text>Albums</Text>} items={albums} />
        ) : null}
        {songs.length ? (
            <QueryResult header={<Text>Songs</Text>} items={songs} />
        ) : null}
    </List>
);
