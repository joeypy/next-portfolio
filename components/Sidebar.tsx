/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import LogoS from '@/assets/images/logo-s.png';
import LogoSubtitle from '@/assets/images/logo_sub.png';
import { Nav } from './Nav';

export const Sidebar = () => {
  return (
    <div>
      <Link href="/">
        <a>
          <img src={LogoS.src} alt="Logo" />
          <img src={LogoSubtitle.src} alt="slobodan" />
        </a>
      </Link>
      <Nav />
    </div>
  );
};
