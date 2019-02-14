import {createStore} from 'redux';

import rootReducer from './root-reducer';

// const composeEnhancers =
//   (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

function configureStore() {
  // configure middlewares
  // const middlewares = [createEpicMiddleware(rootEpic)];
  // compose enhancers
  // const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store
  // return createStore(rootReducer, initialState!, enhancer);
  return createStore(rootReducer);
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
