import { Body, Left, List, ListItem, Text, Thumbnail } from 'native-base';
import React from 'react';

export default ({ items }) => (
    <List>
        {items.map((item, i) => (
            <ListItem key={i}>
                <Text>{item.title}</Text>
            </ListItem>
        ))}
    </List>
);
