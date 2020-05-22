import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Logo from '../../../Assets/Images/logo.png';

const Vehicle = (props) => {
    return (
        <div>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={Logo} alt="cardImage1" />
                    <Card.Body>
                        <Card.Title>FIRST</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
}

export default Vehicle;