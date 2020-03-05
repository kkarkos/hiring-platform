import { useState } from 'react';
import { useIdentityContext } from 'react-netlify-identity';
import { navigate } from 'gatsby';

const useIdentity = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // https://github.com/sw-yx/react-netlify-identity
  const {
    user,
    isLoggedIn,
    loginUser,
    signupUser,
    logoutUser,
  } = useIdentityContext();

  const create = (email, password, role) => {
    // data is for passing data to function where it actually get saved
    const data = {
      role,
    };
    setLoading(true);
    signupUser(email, password, data)
      .then(response => {
        console.log('Success!', response);
        setLoading(false);
        // navigate user away
        navigate('/app/login');
      })
      .catch(error => {
        console.log("It 's an error", error.message);
        setError(error);
        setLoading(false);
      });
  };

  const login = (email, password) => {
    setLoading(true);
    loginUser(email, password)
      .then(response => {
        console.log('Success!', response);
        setLoading(false);
        // navigate user away
        navigate('/app/profile');
      })
      .catch(error => {
        console.log("It 's an error", error.message);
        setError(error);
        setLoading(false);
      });
  };

  return {
    loading,
    error,
    user,
    isLoggedIn,
    create,
    logoutUser,
    login,
  };
};

export default useIdentity;
