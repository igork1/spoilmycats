import React from 'react';
import Head from 'next/head';
import Header from '../components/Header/Header';
import { PageWrap } from '../styles/PageWrap';
import { MainScreenStyles } from '../components/MainScreen/MainScreenStyles';
import AuthBox from '../components/AuthBox/AuthBox';

const PasswordReset = () => (
  <>
    <Head>
      <title>Password Reset</title>
    </Head>
    <PageWrap>
      <Header />
      <MainScreenStyles>
        <AuthBox initialScreen="request-password-reset" />
      </MainScreenStyles>
    </PageWrap>
  </>
);

export default PasswordReset;
