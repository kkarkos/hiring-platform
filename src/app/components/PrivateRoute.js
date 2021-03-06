import React from 'react';
import { navigate } from 'gatsby';

import useIdentity from '../../hooks/useIdentity';

function PrivateRoute(props) {
  const { isLoggedIn } = useIdentity();
  const { component: Component, location, ...rest } = props;

  React.useEffect(() => {
    if (!isLoggedIn && location.pathname !== `/app/login`) {
      // If the user is not logged in, redirect to the login page.
      navigate(`/app/login`);
    }
  }, [isLoggedIn, location]);
  return isLoggedIn ? <Component {...rest} /> : null;
}

export default PrivateRoute;
