import { Outlet } from 'react-router-dom';

const AppRoutes = [
  {
    name: 'main',
    path: '/',
    Component: () => (
      <p>
        Main Layout <Outlet />
      </p>
    ),
    key: 'main',
    routes: [
      {
        key: 'home',
        name: 'Home',
        path: '/home',
        index: true,
        requireAuth: false,
        Component: () => <p>Home Page</p>,
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
