import { createBrowserHistory } from 'history';
import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import defaultReducer from './defaultReducer';

export const history = createBrowserHistory();

// combineReducers will be handled internally by configureStore
const rootReducer = (history) => ({
  default: defaultReducer,
  router: connectRouter(history)
});

const preloadedState = {};
const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history)),
  reducer: rootReducer(history),
  preloadedState
});

export default store;
