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
        path: '/about',
        component: React.lazy(() => import('./Pages/About')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/kb',
        component: React.lazy(() => import('./Pages/KnowledgeBase/index')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/devices',
        component: React.lazy(() => import('./Pages/devices/index')),
      },
    ],
  },
];
