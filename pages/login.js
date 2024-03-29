import React from 'react';
import Head from 'next/head';
import Header from '../components/Header/Header';
import { PageWrap } from '../styles/PageWrap';
import { MainScreenStyles } from '../components/MainScreen/MainScreenStyles';
import AuthBox from '../components/AuthBox/AuthBox';

const Login = () => (
  <>
    <Head>
      <title>Sign In</title>
    </Head>
    <PageWrap>
      <Header />
      <MainScreenStyles>
        <AuthBox initialScreen="login" />
      </MainScreenStyles>
    </PageWrap>
  </>
);

export default Login;
