import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PatientsData from './pages/Patients';
import Settings from './pages/Settings';
import Shop from './pages/Shop';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

function Routes() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <Layout {...props}>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/patients" component={PatientsData} />
              <Route path="/settings" component={Settings} />
              <Route path="/shop" component={Shop} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        )}
      />
    </BrowserRouter>
  );
}

export default Routes;
