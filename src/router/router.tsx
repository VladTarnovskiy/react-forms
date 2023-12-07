import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage/MainPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { RouterError } from '../components/RouterError/RouterError';
import { App } from '../App';
import { UncontrolledFrom } from '@/pages/UncontrolledForm/UncontrolledForm';
import { ControlledForm } from '@/pages/ControlledForm/ControlledForm';

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
        path: '/form/uncontrolled',
        element: <UncontrolledFrom />,
      },
      {
        path: '/form/controlled',
        element: <ControlledForm />,
      },
    ],
  },
  {
    path: '/notfound',
    element: <NotFoundPage />,
  },
]);
