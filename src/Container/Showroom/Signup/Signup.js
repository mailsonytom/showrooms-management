import React, { Component } from 'react';
import styles from './Signup.module.css';

class Signup extends Component {
    state = {
        dealername: '',
        address: '',
        username: '',
        password: '',
        identity: '',
        description: '',
        coverimage: ''
    }

    render() {
        return (
            <div className={styles.Signup}>
                <h1>Showrooms Signup</h1>
                <label>Dealer Name</label>
                <input type="text" value={this.state.dealername} onChange={(event) => this.setState({ dealername: event.target.value })} />
                <label>Address</label>
                <textarea rows="3" type="text" value={this.state.address} onChange={(event) => this.setState({ address: event.target.value })} />
                <label>Username</label>
                <input type="username" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value })} />
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
                <label>Unique Identity</label>
                <input type="text" value={this.state.identity} onChange={(event) => this.setState({ identity: event.target.value })} />
                <label>Description</label>
                <textarea rows="4" type="text" value={this.state.description} onChange={(event) => this.setState({ description: event.target.value })} />
                <label>Cover Image</label>
                <input type="image" value={this.state.coverimage} onChange={(event) => this.setState({ coverimage: event.target.value })} />
                <button>Signin</button>
            </div>
        );
    }
}

export default Signup;