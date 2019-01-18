import { RouterAction, LocationChangeAction } from 'react-router-redux';

import {IncubateAction} from '../features/incubate';

type ReactRouterAction = RouterAction | LocationChangeAction;
export type RootAction = ReactRouterAction | IncubateAction;
