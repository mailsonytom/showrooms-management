import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/">Index</NavigationItem>
        {!props.isAuthenticated
            ? <NavigationItem link="/adminlogin">Authetication</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>}
        <NavigationItem link="/companies">Companies</NavigationItem>
        <NavigationItem link="/companyAuth">Company Login</NavigationItem>
    </ul>
);

export default NavigationItems;