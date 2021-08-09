import React from 'react';

import { Typography } from '@material-ui/core';
import { useAuth } from 'reactfire';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const SignInForm = () => {
  const auth = useAuth;

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      auth.EmailAuthProvider.PROVIDER_ID,
      auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };

  return (
    <>
      <Typography variant="h4" textAlign="center">Welcome!</Typography>
      <Typography variant="h5" textAlign="center">
        Please sign in to split a payment or view your existing splits.
      </Typography>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
    </>
  );
};

export default SignInForm;
