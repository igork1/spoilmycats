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
  password: yup
    .string()
    .min(6)
    .required(),
});

const LoginForm = () => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={validationSchema}
    onSubmit={async (values, { setErrors }) => {
      try {
        const { data } = await axios({
          method: 'POST',
          url: '/catsapi/v1/auth/login',
          data: values,
        });

        if (data.success) {
          router.push('/cats');
        }
      } catch (error) {
        setErrors({
          email: 'Invalid Credentials',
          password: 'Invalid Credentials',
        });
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
        <Input type="password" name="password" label="Password" />
        <div className="forgot-password">
          <Link href="/password-reset">
            <a>Forgot your password?</a>
          </Link>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Sign In
        </button>
      </Form>
    )}
  </Formik>
);

export default LoginForm;
