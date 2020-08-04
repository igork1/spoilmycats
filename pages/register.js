import React from 'react';
import Head from 'next/head';
import Header from '../components/Header/Header';
import { PageWrap } from '../styles/PageWrap';
import { MainScreenStyles } from '../components/MainScreen/MainScreenStyles';
import AuthBox from '../components/AuthBox/AuthBox';

const Registet = () => (
  <>
    <Head>
      <title>Register | Feed the Cats</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PageWrap>
      <Header />
      <MainScreenStyles>
        <AuthBox initialScreen="register" />
      </MainScreenStyles>
    </PageWrap>
  </>
);

export default Registet;
