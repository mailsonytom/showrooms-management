import React, { Component } from 'react';
import styles from './Signin.module.css';
import { Route, Link } from 'react-router-dom';
import Companysignup from '../Signup/Signup';
import Customersignup from '../../Customer/Signup/Signup';
import Showroomsignup from '../../Showroom/Signup/Signup';
import Aux from '../../../Hoc/Aux';

class Signin extends Component {
    state = {
        username: '',
        password: ''
    }

    render() {
        return (
            <Aux>
                
               
                <div className={styles.Login}>
                    <h1>Company Signin</h1>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value })} />
                    <label>Password</label>
                    <input type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
                    <button>Signin</button>
                </div>
            </Aux>
        );
    }
}

export default Signin;