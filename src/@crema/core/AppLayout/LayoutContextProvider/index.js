import React, {useReducer} from 'react';
import PropTypes from 'prop-types';
import {contextReducer, LayoutSetting} from './ContextReducer';

export const LayoutContext = React.createContext({});

export const ContextState = {
  navCollapsed: true,
};
const LayoutContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(
    contextReducer,
    ContextState,
    () => ContextState,
  );

  const toggleNavCollapsed = () => {
    dispatch({type: LayoutSetting.TOGGLE_NAV_COLLAPSED});
  };

  return (
    <LayoutContext.Provider
      value={{
        ...state,
        toggleNavCollapsed,
      }}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;

LayoutContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
