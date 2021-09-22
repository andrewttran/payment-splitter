import { useAuth0 } from '@auth0/auth0-react';
import { Typography } from '@material-ui/core';
import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginButton from '../components/auth/LoginButton';
import Loading from './Loading';

const Home = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    return <Redirect push to="/groups" />;
  }

  return (
    <div>
      <Typography>Home</Typography>
      <LoginButton />
    </div>
  );
};

export default Home;
