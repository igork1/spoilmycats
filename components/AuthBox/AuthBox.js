import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { AuthBoxStyles } from './AuthBoxStyles';
import RegisterForm from '../Forms/RegisterForm';
import LoginForm from '../Forms/LoginForm';
import RequestPasswordResetForm from '../Forms/RequestPasswordResetForm';
import PasswordResetForm from '../Forms/PasswordResetForm';

const AuthBox = ({ initialScreen, token }) => {
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
              <a>Sign In</a>
            </Link>
          </div>
          <img
            className="playful-cat"
            src="/illustrations/playful-cat.svg"
            alt="Human and a cat chilling"
          />
        </>
      )}

      {state === 'login' && (
        <>
          <h2 className="title">Sign In</h2>
          <LoginForm />
          <div className="switch">
            Don’t have an account?{' '}
            <Link href="/register">
              <a>Register</a>
            </Link>
          </div>
        </>
      )}

      {state === 'request-password-reset' && (
        <>
          <h2 className="title">Password Reset</h2>
          <RequestPasswordResetForm />
          <div className="switch">
            <Link href="/register">
              <a>Register</a>
            </Link>{' '}
            or{' '}
            <Link href="/login">
              <a>Sign In</a>
            </Link>
          </div>
        </>
      )}

      {state === 'password-reset' && (
        <>
          <h2 className="title">Reset Your Password</h2>
          <PasswordResetForm token={token} />
          <div className="switch">
            <Link href="/register">
              <a>Register</a>
            </Link>{' '}
            or{' '}
            <Link href="/login">
              <a>Sign In</a>
            </Link>
          </div>
        </>
      )}
    </AuthBoxStyles>
  );
};

AuthBox.propTypes = {
  initialScreen: PropTypes.string,
  token: PropTypes.string,
};

export default AuthBox;
