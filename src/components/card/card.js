import React from 'react';
import { Card } from 'react-bootstrap';
import Classes from './cards.module.css';

const Cards = (props) => {

    let displayData;
    if (props.data) {
        displayData = [props.data].map(ele => {
            return (
                <Card className={Classes.cards} key={ele.id} onClick={props.clicked}>
                    <Card.Body>
                        <Card.Title style={{ display: 'flex' }}>
                            <p style={{ marginTop: '10px', width: '80%' }}>{ele.real_name}</p>
                            <img src="https://img.icons8.com/cute-clipart/50/000000/circled-right.png" style={{ float: 'right', }} />
                        </Card.Title>
                    </Card.Body>
                </Card>
            )
        })
    }
    return (
        <div>
            {displayData}
        </div>

    )
}

export default Cards;