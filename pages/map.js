import React from 'react';
import AppPage from '../@crema/hoc/AppPage';
import asyncComponent from '../@crema/utility/asyncComponent';
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(
  () => import('../modules/Pages/map'),
  {
    ssr: false,
  },
);

export default AppPage(() => <MapWithNoSSR />);

