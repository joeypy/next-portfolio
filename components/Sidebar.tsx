/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import LogoS from '@/assets/images/logo-s.png';
import LogoSubtitle from '@/assets/images/logo_sub.png';
import styles from '@/styles/components/sidebar.module.scss';
import { Nav } from './Nav';

export const Sidebar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a className={styles.logo}>
          <img src={LogoS.src} alt="Logo" />
          <img className={styles['sub-logo']} src={LogoSubtitle.src} alt="slobodan" />
        </a>
      </Link>
      <Nav />
    </div>
  );
};
