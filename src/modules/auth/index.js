import React from 'react';

export const authRouteConfig = [
  {
    routes: [
      {
        path: '/signin',
        component: React.lazy(() => import('./Signin/index')),
      },
    ],
  },
  {
    routes: [
      {
        path: '/signup',
        component: React.lazy(() => import('./Signup/index')),
      },
    ],
  },
  {
    routes: [
      {
        path: '/forget-password',
        component: React.lazy(() => import('./ForgetPassword')),
      },
    ],
  },
  {
    routes: [
      {
        path: '/error-pages/error-404',
        component: React.lazy(() => import('../errorPages/Error404/index')),
      },
    ],
  },
];
