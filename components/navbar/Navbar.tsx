import { navData } from './Navbar.helpers';
import { NavItem } from './NavItem';
import { ButtonTheme } from './ButtonTheme';
import styled from 'styled-components';
import { ToggleLanguage } from '@/components/ToggleLanguage';
import { useState } from 'react';

const Nav = styled.nav`
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(90%, 80rem);
  margin: 0 auto;
`;

const NavButtons = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  transition: all 0.3s ease;

  @media (max-width: 767px) {
    column-gap: 3rem;
  }

  @media (max-width: 567px) {
    column-gap: 2rem;
    justify-content: center;
  }
`;

const NavMenu = styled.div`
  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.navbarBottomBg};
    box-shadow: 0 -1px 12px hsla(var(--hue), var(--sat), 15%, 0.15);
    width: 100%;
    height: 6.4rem;
    padding: 0 1rem;
    display: grid;
    align-content: center;
    border-radius: 1.25rem 1.25rem 0 0;
    transition: 0.4s;
  }
`;

const NavLogo = styled.a.attrs((_) => ({
  href: '#',
}))`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  color: var(--title-color);
  font-weight: 600;
`;

const MainLogo = styled.img.attrs((props) => ({
  src: props.theme.logo,
  alt: 'Logo',
}))`
  width: 40px;
  height: 40px;
`;

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');

  const handleOnClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <Nav>
      <NavLogo>
        <MainLogo />
      </NavLogo>

      <NavMenu id="nav-menu">
        <NavList>
          {navData.map((data) => (
            <div key={data.label} onClick={() => handleOnClick(data.link)}>
              <NavItem item={data} activeLink={activeLink} />
            </div>
          ))}
        </NavList>
      </NavMenu>

      <NavButtons>
        <ToggleLanguage />
        <ButtonTheme />
      </NavButtons>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* <img src="./perfil.webp" alt="Logo" className="nav__img" width="160" height="40" /> */}
    </Nav>
  );
};
