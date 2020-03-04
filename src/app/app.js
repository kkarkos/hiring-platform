import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import NavBar from './components/NavBar';
import Profile from './profile';
import Main from './main';
import PrivateRoute from './components/PrivateRoute';
import Login from './login';

import { IdentityContextProvider } from 'react-netlify-identity';
const url = 'https://peaceful-shirley-4f90d8.netlify.com';

const App = () => {
  return (
    <IdentityContextProvider url={url}>
      <Layout>
        <NavBar />
        <Router>
          <PrivateRoute path="/app/profile" component={Profile} />
          <PrivateRoute path="/app/another" component={Profile} />
          <PublicRoute path="/app">
            <PrivateRoute path="/" component={Main} />
            <Login path="/login" />
          </PublicRoute>
        </Router>
      </Layout>
    </IdentityContextProvider>
  );
};
function PublicRoute(props) {
  return <div>{props.children}</div>;
}

export default App;
