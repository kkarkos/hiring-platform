import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/Layout';
import NavBar from './components/NavBar';
import Profile from './routes/Profile';
import Main from './routes/Main';
import PrivateRoute from './components/PrivateRoute';
import Login from './routes/Login';
import SignUp from './routes/SignUp';

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
            <SignUp path="/signup" />
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
