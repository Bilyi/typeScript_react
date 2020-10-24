import * as React from 'react';

import { ItemProps } from '../interfaces/interfaces';

const ListItem = ({ item }: ItemProps) => {
    if(!item) {
        return null;
    }

    const { title, images } = item;
    const poster = images["Poster Art"];
    console.log(poster);
    return (
        <li className="list-item">
            <img src={poster.url}/>
            <div className="hover-container">
                <h6>{title}</h6>
            </div>
        </li>
    );
};

export default ListItem;