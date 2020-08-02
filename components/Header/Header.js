import React from 'react';
import PropTypes from 'prop-types';
import router from 'next/router';
import axios from 'axios';
import { HeaderStyles } from './HeaderStyles';

const logout = async () => {
  await axios.post('/catsapi/v1/auth/logout');
  router.push('/login');
};

const Header = ({ user }) => (
  <HeaderStyles>
    <div className="container">
      <div className="logo">FeedTheCats</div>
      {user ? (
        <>
          <div className="hi">Hello, {user.name}</div>
          <button type="button" onClick={logout}>
            Log Out
          </button>
        </>
      ) : (
        <div className="login">Log In</div>
      )}
    </div>
  </HeaderStyles>
);

Header.propTypes = {
  user: PropTypes.object,
};

export default Header;
