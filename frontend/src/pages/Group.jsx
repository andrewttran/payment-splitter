import { CircularProgress, Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header/Header';

const Group = () => {
  let { splitId } = useParams();
  let [split, setSplit] = useState(null);

  useEffect(() => {
    // TODO: get split
  }, [splitId]);

  if (!split) {
    return <CircularProgress />;
  }

  return (
    <>
      <Header></Header>
      <Container>
        <Typography>Split Details</Typography>
        <Typography>Members</Typography>
      </Container>
    </>
  );
};

export default Group;
