import React from 'react';
import Aux from '../../../Hoc/Aux';
import styles from './Detailed.module.css'

const Detailed = () => (
    <Aux>
        <div className={styles.DetailCard}><p>First</p></div>
        <div className={styles.DetailCard}><p>Second</p></div>
        <div className={styles.DetailCard}><p>Third</p></div>
    </Aux>
);

export default Detailed;