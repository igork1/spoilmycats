import React from 'react';
import PropTypes from 'prop-types';
import router from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import { HeaderStyles } from './HeaderStyles';

const logout = async () => {
  await axios.post('/catsapi/v1/auth/logout');
  router.push('/login');
};

const Header = ({ user }) => {
  let logoLink = '/';

  if (user) {
    logoLink = '/cats';
  }

  return (
    <HeaderStyles>
      <div className="container">
        <Link href={logoLink}>
          <a className="logo">FeedTheCats</a>
        </Link>
        {user ? (
          <>
            <div className="hi">Hello, {user.name}</div>
            <button type="button" className="btn" onClick={logout}>
              Log Out
            </button>
          </>
        ) : (
          <Link href="/login">
            <a className="btn btn-primary">Sign In</a>
          </Link>
        )}
      </div>
    </HeaderStyles>
  );
};

Header.propTypes = {
  user: PropTypes.object,
};

export default Header;
