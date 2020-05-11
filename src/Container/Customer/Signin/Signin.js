import React, { Component } from 'react';
import styles from './Signin.module.css';

class Signin extends Component {
    state = {
        username: '',
        password: ''
    }

    render() {
        return (
            <div className={styles.Login}>
                <h1>Customer Signin</h1>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value })} />
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
                <button onClick={this.postDataHandler}>Signin</button>
            </div>
        );
    }
}

export default Signin;