import React from 'react';
import Link from 'next/link';
import { FaHome, FaUserAlt, FaRegEnvelope } from 'react-icons/fa';

const logoStyles = {
  color: '#4d4d4e',
  size: '3rem',
};

export const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <a>
          <FaHome {...logoStyles} />
        </a>
      </Link>
      <Link href="/">
        <a>
          <FaUserAlt {...logoStyles} />
        </a>
      </Link>
      <Link href="/">
        <a>
          <FaRegEnvelope {...logoStyles} />
        </a>
      </Link>
    </nav>
  );
};
