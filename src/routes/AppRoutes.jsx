import MainLayout from '../components/layouts/MainLayout';
import { HomePage } from '../pages/HomePage';

const AppRoutes = [
  {
    name: 'main',
    path: '/',
    Component: MainLayout,
    key: 'main',
    routes: [
      {
        key: 'home',
        name: 'Home',
        path: '/home',
        index: true,
        requireAuth: false,
        Component: HomePage,
      },
      {
        key: 'about',
        name: 'About',
        path: '/about',
        Component: () => <p>About Page</p>,
      },
    ],
  },
  {
    name: '404',
    path: '/*',
    Component: () => <p>404 Not Found</p>,
    key: '404',
  },
];

export default AppRoutes;
