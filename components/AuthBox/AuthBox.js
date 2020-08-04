import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { AuthBoxStyles } from './AuthBoxStyles';
import RegisterForm from '../Forms/RegisterForm';
import LoginForm from '../Forms/LoginForm';

const AuthBox = ({ initialScreen }) => {
  const [state, setState] = useState(initialScreen);
  return (
    <AuthBoxStyles>
      {state === 'register' && (
        <>
          <h2 className="title">Create an Account</h2>
          <RegisterForm />
          <div className="switch">
            Have an account?{' '}
            <Link href="/login">
              <a>Login</a>
            </Link>
          </div>
        </>
      )}
      {state === 'login' && (
        <>
          <h2 className="title">Login</h2>
          <LoginForm />
          <div className="switch">
            No account?{' '}
            <Link href="/register">
              <a>Register</a>
            </Link>
          </div>
        </>
      )}
    </AuthBoxStyles>
  );
};

AuthBox.propTypes = {
  initialScreen: PropTypes.string,
};

export default AuthBox;
