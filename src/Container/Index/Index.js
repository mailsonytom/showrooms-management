import React, { Component } from 'react';
import Aux from '../../Hoc/Aux';
import Navigation from '../../Component/Naviagation/Navigation';
import Cockpit from '../../Component/Index/Index-Cockpit/Cockpit';
import Detailed from '../../Component/Index/Detailed/Detailed';
import Collaborators from '../../Component/Index/Collaborators/Collaborators';
import Footer from '../../Component/Footer/Footer';

class Index extends Component {
    render() {
        return (
            <Aux>
                <Navigation />
                <Cockpit />
                <Detailed />
                <Collaborators />
                <Footer />
            </Aux>
        );
    }
}

export default Index;