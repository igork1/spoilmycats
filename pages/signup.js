import React from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import router from 'next/router';

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

const Signup = () => (
  <>
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
          <Field type="name" name="name" placeholder="Name" />
          <Field type="email" name="email" placeholder="Email" />
          <Field type="password" name="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </>
);

export default Signup;
