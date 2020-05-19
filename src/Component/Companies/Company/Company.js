import React from 'react';

const Company = (props) => {
    return (
        <div>
            <li>{props.children}</li>
        </div>
    );
}

export default Company;