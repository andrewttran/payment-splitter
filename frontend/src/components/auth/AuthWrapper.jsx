import React from 'react';
import { useSigninCheck } from 'reactfire';

import { CircularProgress } from '@material-ui/core'

import SignInForm from './SignInForm';

export const AuthWrapper = ({ children })=> {
  const { status, data: signInCheckResult } = useSigninCheck();

  if (!children) {
    throw new Error('Children must be provided');
  }
  if (status === 'loading') {
    return <CircularProgress />;
  } else if (signInCheckResult.signedIn === true) {
    return children;
  } else {
    return <SignInForm />;
  }
};
