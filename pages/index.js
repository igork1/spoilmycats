import React, { useEffect } from 'react';
import Head from 'next/head';
import router from 'next/router';
import Header from '../components/Header/Header';
import { PageWrap } from '../styles/PageWrap';
import { MainScreenStyles } from '../components/MainScreen/MainScreenStyles';
import AuthBox from '../components/AuthBox/AuthBox';
import { getLoggedInUser } from '../services';

const Home = () => {
  useEffect(() => {
    (async () => {
      const user = await getLoggedInUser();
      if (user) router.push('/cats');
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Cat Feeding Tracker | SpoilMyCats</title>
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
};

export default Home;
