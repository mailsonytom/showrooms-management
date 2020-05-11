import React from 'react';
import Aux from '../../Hoc/Aux';
import { Route, NavLink, Switch } from 'react-router-dom';
import Companysignin from '../../Container/Company/Signin/Signin';
import Companysignup from '../../Container/Company/Signup/Signup';
import Customersignin from '../../Container/Customer/Signin/Signin';
import Customersignup from '../../Container/Customer/Signup/Signup';
import Showroomsignin from '../../Container/Showroom/Signin/Signin';
import Showroomsignup from '../../Container/Showroom/Signup/Signup';
import CompanyHome from '../../Container/Company/Home/Home';
import AddVehicle from '../../Container/Company/Vehicles/AddVehicles/AddVehicles';
import styles from './Navigation.module.css';


const Nav = () => {
    return (
        <Aux>
            <header>
                <nav className={styles.Navigation}>
                    <ul>
                        <li><NavLink to="/Company/Signin">Company Signin</NavLink></li>
                        <li><NavLink to="/Customer/Signin">Customer Signin</NavLink></li>
                        <li><NavLink to="/Showroom/Signin">Showrooms Signin</NavLink></li>
                        <li><NavLink to="/Company/Signup">Company Signup</NavLink></li>
                        <li><NavLink to="/Customer/Signup">Customer Signup</NavLink></li>
                        <li><NavLink to="/Showroom/Signup">Showroom Signup</NavLink></li>
                        <li><NavLink to="/Company/Home">Company Home</NavLink></li>
                        <li><NavLink to="/Addvehicle">Add Vehicle</NavLink></li>
                    </ul>

                </nav>
            </header>
            <Switch>
                <Route path="/Company/Signin" component={Companysignin} />
                <Route path="/Customer/Signin" component={Customersignin} />
                <Route path="/Showroom/Signin" component={Showroomsignin} />
                <Route path="/Company/Signup" component={Companysignup} />
                <Route path="/Customer/Signup" component={Customersignup} />
                <Route path="/Showroom/Signup" component={Showroomsignup} />
                <Route path="/Company/Home" component={CompanyHome} />
                <Route path="/Addvehicle" component={AddVehicle} />
            </Switch>
        </Aux>
    );
};

export default Nav;