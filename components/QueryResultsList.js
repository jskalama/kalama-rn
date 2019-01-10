import {
    Body,
    Left,
    List,
    ListItem,
    Right,
    Text,
    Thumbnail
} from 'native-base';
import React from 'react';

const QueryResult = ({
    header,
    items,
    defaultThumbnail,
    squareThumbnail = false,
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
                            <Thumbnail
                                square={squareThumbnail}
                                small
                                source={{ uri: item.image }}
                            />
                        ) : (
                            <Thumbnail
                                square={squareThumbnail}
                                small
                                source={defaultThumbnail}
                            />
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
                squareThumbnail
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
