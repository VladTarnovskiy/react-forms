import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage/MainPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { RouterError } from '../components/RouterError/RouterError';
import { App } from '../App';
import { UncontrolFrom } from '@/pages/UncontrolForm/UncontrolForm';

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
        path: '/form-uncontrol',
        element: <UncontrolFrom />,
      },
    ],
  },
  {
    path: '/notfound',
    element: <NotFoundPage />,
  },
]);
