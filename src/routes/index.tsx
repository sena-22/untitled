import { createBrowserRouter } from 'react-router-dom';
import SignUp from '@pages/SignUp';
import LogIn from '@pages/LogIn';
import MainLayout from '@layouts/MainLayout';
import Categories from '@pages/categories';
import Category from '@pages/category';
import Item from '@pages/Item';

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
