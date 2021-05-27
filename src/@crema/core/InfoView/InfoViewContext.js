import React, {createContext, useCallback, useContext, useReducer} from 'react';
import {contextReducer, InFoViewActions} from './InfoViewReducer';

export const ContextState = {
  loading: false,
  error: '',
  message: '',
};

const InfoViewContext = createContext();
const InfoViewActionsContext = createContext();

export const useInfoViewContext = () => useContext(InfoViewContext);
export const useInfoViewActionsContext = () =>
  useContext(InfoViewActionsContext);

const InfoViewContextProvider = (props) => {
  const [state, dispatch] = useReducer(
    contextReducer,
    ContextState,
    () => ContextState,
  );

  const fetchStart = useCallback(() => {
    dispatch({type: InFoViewActions.FETCH_STARTS});
  }, []);
  const fetchSuccess = useCallback(() => {
    dispatch({type: InFoViewActions.FETCH_SUCCESS});
  }, []);
  const fetchError = (error) => {
    dispatch({type: InFoViewActions.SET_ERROR, payload: error});
  };
  const showMessage = (message) => {
    dispatch({type: InFoViewActions.SET_MESSAGE, payload: message});
  };
  return (
    <InfoViewContext.Provider value={state}>
      <InfoViewActionsContext.Provider
        value={{fetchStart, fetchSuccess, fetchError, showMessage}}>
        {props.children}
      </InfoViewActionsContext.Provider>
    </InfoViewContext.Provider>
  );
};

export default InfoViewContextProvider;
