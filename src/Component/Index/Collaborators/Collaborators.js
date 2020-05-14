import React from 'react';
import Aux from "../../../Hoc/Aux";
import { SocialIcon } from 'react-social-icons';

const Collaborators = () => (
    <Aux>
        <div><p>Symbols</p></div>
        <SocialIcon url="http://linkedin.com/in/jaketrent" />
        <SocialIcon network="twitter" bgColor="#ff5a01" />
        <SocialIcon network="pinterest" style={{ height: 50, width: 50 }} />
    </Aux>
);

export default Collaborators;