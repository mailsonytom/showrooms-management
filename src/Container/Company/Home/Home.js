import React, { Component } from 'react';
import Aux from '../../../Hoc/Aux';

class Home extends Component {
    render() {
        return (
            <Aux>
                <p>Navigation</p>
                <div>
                    <p>Company cover image
                    <p>Display Number of vehicles sold</p>
                    </p>
                </div>
                <p> Display different vehicles of this company
                    <p>Sort vehicles</p>
                    <p>When clicked goto individual vehicle page</p>
                </p>
                <p>Footer</p>
            </Aux>
        );
    }
};

export default Home;