import { BiHomeAlt, BiUser, BiBookAlt, BiBriefcaseAlt, BiPhoneCall } from 'react-icons/bi';

interface IDataNavbar {
  link: string;
  icon: JSX.Element;
  label: string;
}

export const navData: IDataNavbar[] = [
  {
    link: '#home',
    icon: <BiHomeAlt className="nav__icon" />,
    label: 'Home',
  },
  {
    link: '#about',
    icon: <BiUser className="nav__icon" />,
    label: 'About',
  },
  {
    link: '#skills',
    icon: <BiBookAlt className="nav__icon" />,
    label: 'Skills',
  },
  {
    link: '#portfolio',
    icon: <BiBriefcaseAlt className="nav__icon" />,
    label: 'Portfolio',
  },
  {
    link: '#contact',
    icon: <BiPhoneCall className="nav__icon" />,
    label: 'Hire me',
  },
];
