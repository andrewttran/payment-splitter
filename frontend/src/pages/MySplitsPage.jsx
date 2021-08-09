import React from 'react';

import { Container } from '@material-ui/core';

import { AuthWrapper } from '../components/auth/AuthWrapper';
import Header from '../components/header/Header';

export default function MySplitsPage() {
  return (
    <AuthWrapper>
      <Header />
      <Container>Hello world!</Container>
    </AuthWrapper>
  );
}
