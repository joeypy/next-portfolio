import { useState } from 'react';
import styled from 'styled-components';

interface iProps {
  item: {
    link: string;
    icon: JSX.Element;
    label: string;
  };
  activeLink: string;
}

const NavLink = styled.a.attrs((props) => ({
  href: props.href,
  className: props.className,
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.25rem;
  font-weight: 600;
  justify-content: space-around;
  color: ${(props) => (props.className == 'active-link' ? props.theme.textColorGlow : props.theme.text)};
  transition: 0.3s;

  span {
    font-size: var(--tiny-font-size);
    color: ${(props) => props.className == 'active-link' && props.theme.textColorGlow};
    text-shadow: ${(props) => props.className == 'active-link' && props.theme.textGlow};
    font-weight: 500;

    @media screen and (min-width: 767px) {
      font-size: var(--normal-font-size);
      font-weight: 700;
      padding: 1rem;
    }
  }

  svg {
    font-size: 2.4rem;

    @media (min-width: 767px) {
      display: none;
    }
  }
`;

export const NavItem = ({ item, activeLink }: iProps) => {
  return (
    <li key={item.label}>
      <NavLink href={item.link} className={activeLink == item.link ? 'active-link' : undefined}>
        {item.icon}
        <span>{item.label}</span>
      </NavLink>
    </li>
  );
};
