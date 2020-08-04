import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/Theme';
import Meta from './Meta';

const Page = ({ children }) => (
  <>
    <Meta />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </>
);

Page.propTypes = {
  children: PropTypes.object,
};

export default Page;
