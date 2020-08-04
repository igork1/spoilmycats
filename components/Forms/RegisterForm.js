import React from 'react';
import { Formik, Form } from 'formik';
import axios from 'axios';
import router from 'next/router';
import * as yup from 'yup';
import Input from '../Input/Input';

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(6)
    .required(),
});

const RegisterForm = () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      password: '',
    }}
    validationSchema={validationSchema}
    onSubmit={async values => {
      const { data } = await axios({
        method: 'POST',
        url: '/catsapi/v1/auth/register',
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
        <Input type="name" name="name" label="Name" />
        <Input type="email" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
        <button type="submit" className="btn btn-block">
          Create Account
        </button>
      </Form>
    )}
  </Formik>
);

export default RegisterForm;
