import React from 'react';

import { Button, Container, Typography } from '@material-ui/core';
import Header from '../components/header/Header';
import { Formik, ErrorMessage, Field, Form } from 'formik';

const AddSplit = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Typography>Create New Split</Typography>
        <Formik
          initialValues={{
            members: [],
            payments: [],
            ratesFromDate: Date.now(),
          }}
          validate={(values) => {
            const errors = {};
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // TODO: submit values
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default AddSplit;
