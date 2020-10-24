import * as React from 'react';
import { useState, useEffect } from 'react';
import { getItems } from '../../utils/helpers';
import Loading from '../layouts/loading';
import ListItem from './list-item';

import { ListProps, ItemStructure } from '../interfaces/interfaces';

const List = ({ location }: ListProps) => {
    const [ list, setList ] = useState([]);
    const { pathname } = location;
    const type = pathname.replace('/', '');

    useEffect( () => {
        getItems(setList, type);
    }, []);

    if(!list.length) {
        return <Loading/>;
    }

    return (
        <ul className="list-container">
        { list.length ? (
            list.map((item : ItemStructure) => {
                    return <ListItem key={item.id} item={item}/>;
            })) : null
        }
        </ul>
    );
};

export default List;