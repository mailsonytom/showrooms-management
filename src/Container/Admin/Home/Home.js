import React, { Component } from 'react';
import Aux from '../../../Hoc/Aux';

class Home extends Component {
    render() {
        return (
            <Aux>
                <Navigation />
                <Cockpit />
                <Footer />
            </Aux>
        );
    }
}

export default Home;