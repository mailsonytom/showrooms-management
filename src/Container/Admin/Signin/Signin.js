import React, { Component } from 'react';
import styles from './Signin.module.css';
import { Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


class Signin extends Component {
    state = {
        username: '',
        password: ''
    }

    render() {
        return (
            <div className={styles.Login}>
                <header>
                    <nav>
                        <ul>
                            <NavLink to="/Company/Signin/Signin.js" exact>Company Signin</NavLink>
                            <NavLink to="/Customer/Signin" exact>Customer Signin</NavLink>
                            <NavLink to="/Showroom/Signin" exact>Showrooms Signin</NavLink>
                        </ul>
                    </nav>
                </header>
                <Route path="/Company/Signin/Signin.js" exact component={"/Company/Signin/Signin"} />
                <Route path="/Customer/Signin" exact component={"/Customer"} />
                <Route path="/Showroom/Signin" exact component={"/Showroom"} />
                <h1>Admin Signin</h1>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value })} />
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
                <Button variant="primary" className="mr-2" onClick="">Signin</Button>
            </div>
        );
    }
}

export default Signin;