import React from 'react';

export const samplePagesConfig = [
  {
    auth: ['user'],
    routes: [
      {
        path: '/map',
        component: React.lazy(() => import('./Pages/map')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/devices',
        component: React.lazy(() => import('./Pages/Devices')),
      },
    ],
  },
];
