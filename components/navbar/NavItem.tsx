import styled from 'styled-components';

interface iProps {
  item: {
    link: string;
    icon: JSX.Element;
    label: string;
  };
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
  color: ${(props) => props.theme.activeLink};
  transition: 0.3s;

  span {
    font-size: var(--tiny-font-size);
  }

  svg {
    font-size: 2.4rem;
  }
`;

export const NavItem = ({ item }: iProps) => {
  return (
    <li key={item.label}>
      <NavLink href={item.link} className={item.link === '' ? 'active-link' : undefined}>
        {item.icon}
        <span>{item.label}</span>
      </NavLink>
      {/* <a href={item.link} className={item.link === '#home' ? 'nav__link active-link' : 'nav__link'}>
        {item.icon}
        <span>{item.label}</span>
      </a> */}
    </li>
  );
};