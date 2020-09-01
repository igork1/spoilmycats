import React from 'react';
import { Formik, Form } from 'formik';
import axios from 'axios';
import router from 'next/router';
import * as yup from 'yup';
import Input from '../Input/Input';

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .min(6)
    .required(),
  password_verify: yup
    .string()
    .min(6)
    .required(),
});

const PasswordResetForm = ({ token }) => (
  <Formik
    initialValues={{
      password: '',
      password_verify: '',
    }}
    validationSchema={validationSchema}
    onSubmit={async values => {
      const { data } = await axios({
        method: 'PUT',
        url: `/catsapi/v1/auth/resetpassword/${token}`,
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
        <Input type="password" name="password" label="New Password" />
        <Input type="password" name="password_verify" label="Repeat Password" />
        <button type="submit" className="btn btn-primary btn-block">
          Reset Password
        </button>
      </Form>
    )}
  </Formik>
);

export default PasswordResetForm;
