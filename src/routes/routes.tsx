import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import Login from '@/pages/Login';
import Task from '@/pages/Task';
import Users from '@/pages/Users';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Task />,
      },
      {
        path: 'users',
        element: <Users />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default routes;
