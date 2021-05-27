import React from 'react';

export const samplePagesConfig = [
  {
    auth: ['user'],
    routes: [
      {
        path: '/map',
        component: React.lazy(() => import('./Pages/Map')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/sample/page-2',
        component: React.lazy(() => import('./Pages/PageTwo')),
      },
    ],
  },
];
