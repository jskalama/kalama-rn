import React, { Component } from 'react';
import { Card, CardItem, Body, Text } from 'native-base';

const QueryResult = ({ header, items }) => (
    <Card>
        <CardItem header bordered>
            {header}
        </CardItem>
        {items.map((item, i) => (
            <CardItem bordered key={i}>
                <Body>
                    <Text>{item.label}</Text>
                </Body>
            </CardItem>
        ))}
    </Card>
);

export default ({ items: { artists, albums, songs } }) => (
    <>
        {artists.length ? (
            <QueryResult header={<Text>Artists</Text>} items={artists} />
        ) : null}
        {albums.length ? (
            <QueryResult header={<Text>Albums</Text>} items={albums} />
        ) : null}
        {songs.length ? (
            <QueryResult header={<Text>Songs</Text>} items={songs} />
        ) : null}
    </>
);
