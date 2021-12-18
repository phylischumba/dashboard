import {
  MdOutlineHome,
  MdPersonOutline,
  MdOutlineShoppingCart,
  MdOutlineSettings
} from 'react-icons/md';

const SidebarItems = [
  {
    name: 'Dashboard',
    route: '/',
    icon: <MdOutlineHome />
  },
  {
    name: 'Patients',
    route: '/patients',
    icon: <MdPersonOutline />
  },
  {
    name: 'Settings',
    route: '/settings',
    icon: <MdOutlineSettings />
  },
  {
    name: 'Shop',
    route: '/shop',
    icon: <MdOutlineShoppingCart />
  }
];

export default SidebarItems;
