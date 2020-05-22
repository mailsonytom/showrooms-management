import React, { Component } from "react";
import Aux from '../../Hoc/Aux';

import styles from './Companies.module.css';


class Companies extends Component {
    render() {
        return (
            <Aux>
                <h2>Companies</h2>
                <div className="row">
                    <div className={styles.visitor}>
                        <span className={styles.span}>
                            <p>Company Name</p>
                            <p>Company Address </p>
                            <button className={styles.Button}>Reject</button>
                        </span>

                    </div>
                    <div className={styles.visitor}>
                        <span className={styles.span}>
                            <p>Company Name </p>
                            <p>Company Address </p>
                            <button className={styles.Button}>Reject</button>
                        </span>
                    </div>
                    <div className={styles.visitor}>
                        <span className={styles.span}>
                            <p>Company Name </p>
                            <p>Company Address </p>
                            <button className={styles.Button}>Reject</button>
                        </span>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default Companies;