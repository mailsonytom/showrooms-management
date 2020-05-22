import React, { Component } from "react";
import Aux from "../../Hoc/Aux";
// import Card from 'react-bootstrap/Card';
// import CardDeck from 'react-bootstrap/CardDeck';
// import Logo from '../../Assets/Images/logo.png';
import Vehicle from "./Vehicle/Vehicle";

class Vehcles extends Component {
    render() {
        return (
            <Aux>
                <h2>Vehicles</h2>
                <Vehicle />
                {/* <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={Logo} alt="cardImage1" />
                        <Card.Body>
                            <Card.Title>FIRST</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text.
                    </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Logo} alt="cardImage2" />
                        <Card.Body>
                            <Card.Title>SECOND</Card.Title>
                            <Card.Text>
                                This card has supporting text below.
                    </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Logo} alt="cardImage3" />
                        <Card.Body>
                            <Card.Title>THIRD</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text.
                    </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
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
                    <Card>
                        <Card.Img variant="top" src={Logo} alt="cardImage2" />
                        <Card.Body>
                            <Card.Title>SECOND</Card.Title>
                            <Card.Text>
                                This card has supporting text below.
                    </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Logo} alt="cardImage3" />
                        <Card.Body>
                            <Card.Title>THIRD</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text.
                    </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck> */}
            </Aux>
        );
    }
}

export default Vehcles;