import React, {useContext} from 'react';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AppContext from '../../../@crema/utility/AppContext';
import {ThemeMode} from '../../constants/AppEnums';
import Hidden from '@material-ui/core/Hidden';

const AppLogo = () => {
  const {themeMode} = useContext(AppContext);
  const useStyles = makeStyles(() => ({
    logoRoot: {
      display: 'flex',
      flexDirection: 'row',
      cursor: 'pointer',
      alignItems: 'center',
    },
    logo: {
      height: 36,
      marginRight: 10,
    },
  }));
  const classes = useStyles();
  return (
    <Box className={classes.logoRoot}>
      <Hidden smUp>
        <img
          className={classes.logo}
          src={
            themeMode === ThemeMode.DARK ? '/logo_black.svg' : '/logo_black.svg'
          }
          alt='logo'
        />
      </Hidden>
      <Hidden xsDown>
        <img
          className={classes.logo}
          src={
            themeMode === ThemeMode.DARK
              ? '/images/logo-white-with-name.png'
              : '/images/logo-with-name.png'
          }
          alt='crema-logo'
        />
      </Hidden>
    </Box>
  );
};

export default AppLogo;
