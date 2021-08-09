import React from 'react';

import { Box, Button, Container, Typography } from '@material-ui/core';

import Header from '../components/header/Header';
import { Link } from 'react-router-dom';

const Groups = () => {
  return (
    <>
      <Header />
      <Container>
        <Box>
          <Typography variant="h5" display="inline-block">
            Splits you've created
          </Typography>
          <Link to="/new-split">
            <Button>Add new Split</Button>
          </Link>
        </Box>
        <Typography variant="h5">Splits you're added to</Typography>
      </Container>
    </>
  );
};

export default Groups;
