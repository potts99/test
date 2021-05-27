import React, {useContext} from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import SearchBar from '../../SearchBar';
import useStyles from './AppHeader.style';
import AppLogo from '../../../../shared/components/AppLogo';
import {LayoutContext} from '../LayoutContextProvider';

const AppHeader = () => {
  const classes = useStyles();
  const {toggleNavCollapsed} = useContext(LayoutContext);

  return (
    <Hidden lgUp>
      <Box
        width={1}
        display='flex'
        alignItems='center'
        className={clsx(classes.bitBucketResHeader, 'bitBucketResHeader')}>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='open drawer'
          onClick={() => toggleNavCollapsed()}>
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
        <AppLogo />
      </Box>
    </Hidden>
  );
};
export default AppHeader;
