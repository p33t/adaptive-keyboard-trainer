import {combineReducers} from 'redux';
import {ActionType, getType} from 'typesafe-actions';

import {KeystrokeAt} from './models';
import * as incubate from './actions';

export type IncubateAction = ActionType<typeof incubate>;

export type IncubateState = Readonly<{
    keystrokeHistory: KeystrokeAt[];
    // difficulty: number;
    // keyboardProfile: ;
}>;

export default combineReducers<IncubateState, IncubateAction>({
    keystrokeHistory: (state = [], action) => {
        switch (action.type) {
            case getType(incubate.keystroked):
                return [...state, action.payload];
            default:
                return state;
        }
    },
});
