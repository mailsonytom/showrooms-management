import React, { Component } from "react";
import Button from '../../../Component/UI/Button/Button';
import Input from '../../../Component/UI/Input/Input';
import styles from './Login.module.css';
import * as actions from '../../../Store/Actions/Index';
import { connect } from "react-redux";
// import Spinner from "../../Components/UI/Spinner/Spinner";
// import { Redirect } from "react-router";


class Login extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
                },
                value: '',
                validation: {
                    required: true,
                    // isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
    }

    // componentDidMount() {
    //     if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
    //         this.props.onSetAuthRedirectPath();
    //     }
    // }

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({ controls: updatedControls });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
    }

    // switchAuthModeHandler = () => {
    //     this.setState(prevState => {
    //         return { isSignup: !prevState.isSignup };
    //     });
    // }

    render() {

        const formArray = [];
        for (let key in this.state.controls) {
            formArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ));

        // if (this.props.loading) {
        //     form = <Spinner />
        // }

        // let errorMessage = null;

        // if (this.props.error) {
        //     errorMessage = (
        //         <p>{this.props.error.message}</p>
        //     )
        // }

        // let authRedirect = null;
        // if (this.props.isAuthenticated) {
        //     authRedirect = <Redirect to={this.props.authRedirectPath} />
        // }

        return (
            <div className={styles.Auth}>
                {/* {authRedirect}
                {errorMessage} */}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="Success">LOGIN</Button>
                </form>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        // loading: state.auth.loading,
        // error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        // buildingBurger: state.Burger.building,
        // authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password)),
        // onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


