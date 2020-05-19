import React from 'react';

const Vehicle = (props) => {
    return (
        <div>
            <li>{props.children}</li>
        </div>
    );
}

export default Vehicle;