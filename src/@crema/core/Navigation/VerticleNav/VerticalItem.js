import React, {useContext, useMemo} from 'react';
import {Icon, ListItem, ListItemText} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {Badge, NavLink} from '../../../index';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../utility/IntlMessages';
import useStyles from './VerticalItem.style';
import AppContext from '../../../utility/AppContext';
import {checkPermission} from '../../../utility/Utils';

const VerticalItem = ({level, item}) => {
  const {themeMode, user} = useContext(AppContext);
  const classes = useStyles({level, themeMode});
  const hasPermission = useMemo(() => checkPermission(item.auth, user.role), [
    item.auth,
    user.role,
  ]);
  if (!hasPermission) {
    return null;
  }
  return (
    <ListItem
      button
      component={NavLink}
      to={item.url}
      activeClassName='active'
      className={clsx(classes.navItem, 'nav-item')}
      exact={item.exact}>
      {item.icon && (
        <Box component='span' mr={6}>
          <Icon
            className={clsx(classes.listIcon, 'nav-item-icon')}
            color='action'>
            {item.icon}
          </Icon>
        </Box>
      )}
      <ListItemText
        primary={<IntlMessages id={item.messageId} />}
        classes={{primary: 'nav-item-text'}}
      />
      {item.count && (
        <Box mr={1} clone>
          <Badge count={item.count} color={item.color} />
        </Box>
      )}
    </ListItem>
  );
};

VerticalItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string,
  }),
};

VerticalItem.defaultProps = {};

export default withRouter(React.memo(VerticalItem));
