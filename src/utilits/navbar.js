import Generic from '../components/Generic';
import Home from '../components/Home';

export const data = [
  {
    id: 1,
    title: 'Home',
    path: '/home',
    Component: Home,
  },

  {
    id: 2,
    title: 'Markets',
    path: '/markets',
    Component: Generic,
  },
  {
    id: 3,
    title: 'NFT',
    path: '/nft',
    Component: Generic,
  },
  {
    id: 4,
    title: 'Log In',
    path: '/login',
    Component: Generic,
  },
  {
    id: 5,
    title: 'Register',
    path: '/register',
    Component: Generic,
  },
];
