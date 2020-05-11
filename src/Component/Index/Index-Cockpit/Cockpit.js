import React, { Component } from 'react';
import styles from './Cockpit.module.css';

class Cockpit extends Component {
    render() {
        return (
            <div className={styles.Cockpit}>
                <header>Heading</header>
                <p>Write Something in here!</p>
                <button>Sign in</button>
                <button>Sign up</button>
            </div>
        );
    };
}

export default Cockpit;