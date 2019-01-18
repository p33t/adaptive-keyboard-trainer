import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { StateType } from 'typesafe-actions';

import { incubateReducer } from '../features/incubate';

const rootReducer = combineReducers({
  router: routerReducer,
  incubate: incubateReducer,
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
