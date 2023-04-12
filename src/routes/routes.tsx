import { createBrowserRouter, Navigate } from 'react-router-dom';

import AuthGuard from '../components/AuthGuard';

import SignInPage from '../pages/auth/SignInPage';
import SignUpPage from '../pages/auth/SignUpPage';
import MainLayout from '../components/layouts/MainLayout';
import DashboardPage from '../pages/main/DashboardPage';

const routes = createBrowserRouter([
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        element: <SignInPage />
      },
      {
        path: 'register',
        element: <SignUpPage />
      }
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" />
      },
      {
        path: 'dashboard',
        index: true,
        element: <AuthGuard><DashboardPage /></AuthGuard>,
      },
    ],
  }
]);

export default routes;