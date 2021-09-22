import React from 'react';

import { Box, Typography } from '@material-ui/core';

import LogoutButton from '../auth/LogoutButton';

const Header = () => {
  return (
    <Box width="100%" display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" alignItems="center">
        <Typography>Payment Splitter</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <LogoutButton />
      </Box>
    </Box>
  );
};

export default Header;
