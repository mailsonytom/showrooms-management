import React, { Component } from "react";

import Login from "../../Component/Authentication/Login";
import Signup from "../../Component/Authentication/Signup";

import Button from '../../Component/UI/Button/Button';

class CompanyAuth extends Component {
    state = {
        isSignup: false
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return { isSignup: !prevState.isSignup };
        });
    }

    render() {
        return (
            <div>
                {this.state.isSignup ? <Signup /> : <Login />}
                <Button
                    clicked={this.switchAuthModeHandler}
                    btnType="Danger">SWITCH TO {this.state.isSignup ? 'LOGIN' : 'SIGNUP'}</Button>
            </div>
        );
    }
}

export default CompanyAuth;