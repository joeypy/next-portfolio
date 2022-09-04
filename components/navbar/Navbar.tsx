import { navData } from './Navbar.helpers';
import { NavItem } from './NavItem';
import { ButtonTheme } from './ButtonTheme';
import styled from 'styled-components';
import { ToggleLanguage } from '@/components/ToggleLanguage';

const Nav = styled.nav`
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const NavButtons = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;

  @media screen and (min-width: 576px) {
    justify-content: center;
    column-gap: 3rem;
  }
`;

const NavMenu = styled.div`
  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.navbarBottomColor};
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
  return (
    <Nav>
      <NavLogo>
        <MainLogo />
      </NavLogo>

      <NavMenu id="nav-menu">
        <NavList>
          {navData.map((data) => (
            <NavItem key={data.label} item={data} />
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
