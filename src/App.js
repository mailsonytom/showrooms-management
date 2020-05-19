import React from 'react';

import Layout from './Component/Layout/Layout';
import { Route } from 'react-router';

import Index from './Container/Index/Index';
import adminLogin from './Container/Admin/Login/Login';
import Companies from './Component/Companies/Companies';

function App() {
  return (
    <div>
      <Layout>
        <Route path="/" exact component={Index} />
        <Route path="/adminlogin" component={adminLogin} />
        <Route path="/companies" component={Companies} />
      </Layout>
    </div>
  );
}

export default App;
