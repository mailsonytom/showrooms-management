import React from 'react';

import Layout from './Component/Layout/Layout';
import { Route } from 'react-router';

import Index from './Container/Index/Index';
import adminLogin from './Container/Admin/Login/Login';
import Companies from './Component/Companies/Companies';
import CompanyAuth from './Container/Company/Login/Auth';
import AdminHome from './Container/Admin/Home/Home';
import Vehicles from './Component/Vehicles/Vehicles';

function App() {
  return (
    <div>
      <Layout>
        <Route path="/" exact component={Index} />
        <Route path="/adminlogin" component={adminLogin} />
        <Route path="/companies" component={Companies} />
        <Route path="/companyAuth" component={CompanyAuth} />
        <Route path="/adminHome" component={AdminHome} />
        <Route path="/vehicles" component={Vehicles} />
      </Layout>
    </div>
  );
}

export default App;
