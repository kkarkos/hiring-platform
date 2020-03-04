import React from 'react';
import { navigate } from 'gatsby';
import GoTrue from 'gotrue-js';
import {
  IdentityModal,
  useIdentityContext,
} from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css'; // delete if you want to bring your own CSS

function Login() {
  const identity = useIdentityContext();
  const [dialog, setDialog] = React.useState(false);

  const {
    loginUser,
    signupUser,
    settings,
    loginProvider,
  } = useIdentityContext();

  // TEST START

  // Instantiate the GoTrue auth client with an optional configuration

  // const auth = new GoTrue({
  //   APIUrl: 'https://peaceful-shirley-4f90d8.netlify.com',
  //   audience: '',
  //   setCookie: false,
  // });

  const data = {
    app_metadata: {
      roles: ['investigator', 'photographer'],
    },
    user_metadata: {
      full_name: 'Jessica Jones',
      email: 'jessica@aliasinvestigations.com',
    },
  };

  const createUser = () => {
    signupUser('kkarkoss@truekings.de', '456852')
      .then(response => console.log('Success!Check your inbox! ', response))
      .catch(error => console.log("It 's an error", error));
    // auth
    //   .signup('kkarkos@truekings.de', '456852')
    //   .then(response => console.log('Success!Check your inbox! ', response))
    //   .catch(error => console.log("It 's an error", error));
  };

  // TEST END
  return (
    <>
      <h1>Log in</h1>
      <button onClick={() => createUser()}>log in</button>

      {/* @TODO replace with own form https://dev.to/swyx/add-netlify-identity-authentication-to-any-react-app-in-5-minutes-with-react-context-hooks-and-suspense-5gci */}
      {/* <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={user => navigate('/app/profile')}
        onSignup={user => navigate('/app/profile')}
      /> */}
    </>
  );
}

export default Login;
