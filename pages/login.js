import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import router from 'next/router';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(6)
    .required(),
});

const Login = () => (
  <>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async values => {
        const { data } = await axios({
          method: 'POST',
          url: '/catsapi/v1/auth/login',
          data: values,
        });

        if (data.success) {
          router.push('/cats');
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Field type="email" name="email" placeholder="Email" />
          <Field type="password" name="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </>
);

Login.propTypes = {};

export default Login;
