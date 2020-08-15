import React from 'react';
import { Formik, Form } from 'formik';
import axios from 'axios';
import router from 'next/router';
import * as yup from 'yup';
import Link from 'next/link';
import Input from '../Input/Input';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
});

const RequestPasswordResetForm = () => (
  <Formik
    initialValues={{
      email: '',
    }}
    validationSchema={validationSchema}
    onSubmit={async values => {
      const { data } = await axios({
        method: 'POST',
        url: '/catsapi/v1/auth/forgotpassword',
        data: values,
      });

      if (data.success) {
        router.push('/login');
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
        <Input type="email" name="email" label="Email" />
        <button type="submit" className="btn btn-primary btn-block">
          Reset Password
        </button>
      </Form>
    )}
  </Formik>
);

export default RequestPasswordResetForm;
