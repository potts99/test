import {applyMiddleware, compose, createStore} from 'redux';
import reducers from '../reducers';
import {routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import {setAuthToken} from '../../@crema/services/auth/jwt-auth/jwt-api';

const createBrowserHistory = require('history').createBrowserHistory;
const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);

const middlewares = [thunk, routeMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const store = createStore(
    reducers(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  let currentState = store.getState();
  store.subscribe(() => {
    // keep track of the previous and current state to compare changesAppLayout/index.j
    let previousState = currentState;
    currentState = store.getState();
    // if the token changes set the value in localStorage and axios headers
    if (previousState.auth.token !== currentState.auth.token) {
      const token = currentState.auth.token;
      setAuthToken(token);
    }
  });
  return store;
}
export {history};
