import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage/MainPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { RouterError } from '../components/RouterError/RouterError';
import { App } from '../App';
import { UncontrolFrom } from '@/pages/UncontrolForm/UncontrolForm';
import { ControlFrom } from '@/pages/ControlForm/ControlForm';

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <RouterError />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/form/uncontrol',
        element: <UncontrolFrom />,
      },
      {
        path: '/form/control',
        element: <ControlFrom />,
      },
    ],
  },
  {
    path: '/notfound',
    element: <NotFoundPage />,
  },
]);
