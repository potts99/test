import React, {useContext} from 'react';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';

import AppContext from '../../utility/AppContext';
import Layouts from './Layouts';
import {ContentView} from '../../index';
import useStyles from '../../../shared/jss/common/common.style';
import LayoutContextProvider from './LayoutContextProvider';

const useStyle = makeStyles(() => ({
  appAuth: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    height: '100vh',
    backgroundColor: '#f3f4f6',
    background: `url(/assets/images/overt/city.jpg) no-repeat center center`,
    backgroundSize: 'cover',

    '& .scrollbar-container': {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    '& .main-content-view': {
      padding: 20,
    },
    '& .footer': {
      marginRight: 0,
      marginLeft: 0,
    },
  },
}));

const CremaLayout = () => {
  useStyles();
  const {navStyle, user} = useContext(AppContext);
  const AppLayout = Layouts[navStyle];

  const classes = useStyle();
  return (
    <>
      {user ? (
        <LayoutContextProvider>
          <AppLayout />
        </LayoutContextProvider>
      ) : (
        <Box className={classes.appAuth}>
          <ContentView />
        </Box>
      )}
    </>
  );
};

export default React.memo(CremaLayout);
