import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/">Index</NavigationItem>
        {!props.isAuthenticated
            ? <NavigationItem link="/auth">Authetication</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>}
    </ul>
);

export default NavigationItems;