import React, { Component } from 'react';
import Aux from '../../Hoc/Aux';
import Slide from '../../Component/Index/Slide/Slide';
import About from '../../Component/Index/About/About';
import Collaborators from '../../Component/Index/Collaborators/Collaborators';
class Index extends Component {
    render() {
        return (
            <Aux>
                <Slide />
                <About />
                <Collaborators />
            </Aux>
        );
    }
}

export default Index;