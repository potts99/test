import React from 'react';
import {Icon, ListItem, ListItemText} from '@material-ui/core';
import {Badge, NavLink} from '../../../../@crema';
import {withRouter} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import IntlMessages from '../../../utility/IntlMessages';
import useStyles from './HorizontalItem.style';
import Box from '@material-ui/core/Box';

function HorizontalItem(props) {
  const classes = useStyles(props);
  const {item, dense} = props;
  const active = isUrlInChildren(item, props.location.pathname);

  function isUrlInChildren(parent, url) {
    if (!parent.children) {
      return false;
    }

    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].children) {
        if (isUrlInChildren(parent.children[i], url)) {
          return true;
        }
      }

      if (
        parent.children[i].url === url ||
        url.includes(parent.children[i].url)
      ) {
        return true;
      }
    }

    return false;
  }

  return (
    <ListItem
      component={NavLink}
      to={item.url}
      activeClassName='active'
      className={clsx('navItemSubmenu', classes.root, dense && 'dense')}
      exact={item.exact}>
      {item.icon && (
        <Box fontSize={{xs: 16, xl: 18}} mr={3} clone>
          <Icon style={{color: active ? 'white' : 'action'}}>{item.icon}</Icon>
        </Box>
      )}
      <ListItemText
        className='navLinkTextSubmenu'
        primary={<IntlMessages id={item.messageId} />}
      />
      {item.count && (
        <Box ml={4} clone>
          <Badge count={item.count} color={item.color} />
        </Box>
      )}
    </ListItem>
  );
}

HorizontalItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string,
  }),
};

HorizontalItem.defaultProps = {};

export default withRouter(React.memo(HorizontalItem));
