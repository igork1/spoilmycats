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
          <a className="logo">SpoilMyCats</a>
        </Link>
        {user ? (
          <>
            <button type="button" className="btn btn-sm" onClick={logout}>
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
