import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@layouts/MainLayout';
import Categories from '@pages/Categories';
import Category from '@pages/Category';
import Item from '@pages/Item';
import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />,
  },
  {
    path: 'login',
    element: <LogIn />,
  },
  {
    element: <MainLayout />,
    children: [
      { path: 'categories', element: <Categories /> },
      { path: 'categories/:category', element: <Category /> },
      { path: 'categories/:category/:item', element: <Item /> },
    ],
  },
]);

export default router;
