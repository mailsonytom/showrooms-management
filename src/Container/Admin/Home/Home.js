import React, { Component } from "react";
import styles from './Home.module.css';
import Aux from "../../../Hoc/Aux";

class Home extends Component {
    render() {
        return (
            <Aux>
                <h2>Company Requests</h2>
                <div className={styles.visitor}>
                    <span className={styles.span}>
                        <p>Company Name</p>
                        <p>Company Address </p>
                    </span>
                    <button className={styles.Button}>Accept</button>
                    <button className={styles.Button}>Reject</button>
                </div>
                <div className={styles.visitor}>
                    <span className={styles.span}>
                        <p>Company Name </p>
                        <p>Company Address </p>
                    </span>
                    <button className={styles.Button}>Accept</button>
                    <button className={styles.Button}>Reject</button>
                </div>
            </Aux>
        );
    }
}

export default Home;