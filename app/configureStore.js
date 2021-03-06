import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createReducer from './reducers';
import analyticsMiddleware from './analytics-middleware';

export default function configureStore(initialState) {
  const enhancers = [applyMiddleware(thunk), applyMiddleware(analyticsMiddleware)];

  const store = createStore(createReducer(), initialState, compose(...enhancers));

  store.injectedReducers = {};

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
