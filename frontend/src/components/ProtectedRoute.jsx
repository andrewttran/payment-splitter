import React from 'react';
import { Route } from 'react-router-dom';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../pages/Loading';

const ProtectedRoute = ({ component, ...args }) => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting: () => <div>Redirecting you to the login page...</div>,
      })}
      {...args}
    />
  );
};

export default ProtectedRoute;
