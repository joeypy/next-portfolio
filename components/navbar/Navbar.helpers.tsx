import { BiHomeAlt, BiUser, BiBookAlt, BiBriefcaseAlt, BiPhoneCall } from 'react-icons/bi';

interface IDataNavbar {
  link: string;
  icon: JSX.Element;
  label: string;
}

export const navData: IDataNavbar[] = [
  {
    link: '#home',
    icon: <BiHomeAlt/>,
    label: 'Home',
  },
  {
    link: '#about',
    icon: <BiUser/>,
    label: 'About',
  },
  {
    link: '#skills',
    icon: <BiBookAlt/>,
    label: 'Skills',
  },
  {
    link: '#portfolio',
    icon: <BiBriefcaseAlt/>,
    label: 'Portfolio',
  },
  {
    link: '#contact',
    icon: <BiPhoneCall/>,
    label: 'Hire me',
  },
];
