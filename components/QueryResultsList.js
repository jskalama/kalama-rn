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

const QueryResult = ({
    header,
    items,
    defaultThumbnail,
    noThumbnail,
    onItemTap
}) => (
    <>
        <ListItem itemHeader>{header}</ListItem>
        {items.map((item, i) => (
            <ListItem
                thumbnail={!noThumbnail}
                key={i}
                onPress={() => onItemTap(item)}
            >
                {noThumbnail ? null : (
                    <Left>
                        {item.image ? (
                            <Thumbnail small source={{ uri: item.image }} />
                        ) : (
                            <Thumbnail small source={defaultThumbnail} />
                        )}
                    </Left>
                )}

                <Body>
                    <Text>{item.label}</Text>
                </Body>
                <Right />
            </ListItem>
        ))}
    </>
);

export default ({ items: { artists, albums, songs }, onGetAlbums }) => (
    <List>
        {artists.length ? (
            <QueryResult
                header={<Text>Artists</Text>}
                items={artists}
                defaultThumbnail={require('./default-artist.png')}
                onItemTap={item => onGetAlbums(item)}
            />
        ) : null}
        {albums.length ? (
            <QueryResult
                header={<Text>Albums</Text>}
                items={albums}
                defaultThumbnail={require('./default-album.png')}
            />
        ) : null}
        {songs.length ? (
            <QueryResult
                noThumbnail
                header={<Text>Songs</Text>}
                items={songs}
            />
        ) : null}
    </List>
);
