import React, { Component } from 'react';
import styles from './Signup.module.css';

class Signup extends Component {
    state = {
        name: '',
        address: '',
        username: '',
        password: '',
        location: '',
        contact: '',

    }

    render() {
        return (
            <div className={styles.Signup}>
                <h1>Customer Signup</h1>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
                <label>Address</label>
                <textarea rows="3" type="text" value={this.state.address} onChange={(event) => this.setState({ address: event.target.value })} />
                <label>Username</label>
                <input type="username" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value })} />
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
                <label>Contact</label>
                <input type="text" value={this.state.contact} onChange={(event) => this.setState({ contact: event.target.value })} />
                <button>Signin</button>
            </div>
        );
    }
}

export default Signup;