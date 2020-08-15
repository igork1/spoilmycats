import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { PageWrap } from '../../styles/PageWrap';
import Header from '../../components/Header/Header';
import { MainScreenStyles } from '../../components/MainScreen/MainScreenStyles';
import AuthBox from '../../components/AuthBox/AuthBox';

const ResetPasswordToken = () => {
  const router = useRouter();
  const { token } = router.query;
  return (
    <>
      <Head>
        <title>Reset Your Password</title>
      </Head>
      <PageWrap>
        <Header />
        <MainScreenStyles>
          <AuthBox initialScreen="password-reset" token={token} />
        </MainScreenStyles>
      </PageWrap>
    </>
  );
};

export default ResetPasswordToken;
