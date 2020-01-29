import React from 'react'
import { Card } from '../card/card.component'
import './card-list.css'

export const CardList = (props) => {
    console.log(props);
    return <div className='card-list'>
             {props.monesters.map(monester => (
                <Card key={monester.id} monster={monester}/> 
            ))}
        </div>;
};