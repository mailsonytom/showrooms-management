import React from 'react';
import Index from './Container/Index/Index';
import Layout from './Component/Layout/Layout';
import { Route } from 'react-router';

function App() {
  return (
    <div>
      <Layout>
        <Route path="/" exact component={Index} />
      </Layout>
    </div>
  );
}

export default App;
