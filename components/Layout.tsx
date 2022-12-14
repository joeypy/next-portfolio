import React from 'react';
import Head from 'next/head';
import { ButtonTheme } from './navbar/ButtonTheme';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Joseph Boscán - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      {children}
    </>
  );
};
