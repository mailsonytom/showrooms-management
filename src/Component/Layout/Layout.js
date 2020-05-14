import React, { Component } from 'react';
import Aux from '../../Hoc/Aux';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
// import { connect } from 'react-redux';

class Layout extends Component {

    render() {
        return (
            <Aux>
                <Toolbar />
                <main className={styles.content} role="main">
                    {this.props.children}
                </main>
            </Aux >
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         isAuthenticated: state.auth.token !== null
//     };
// };

export default Layout;