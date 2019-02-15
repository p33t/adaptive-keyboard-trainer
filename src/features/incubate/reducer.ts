import {combineReducers} from 'redux';
import {ActionType, getType} from 'typesafe-actions';

import {alt, ctl, Keystroke, KeystrokeAt} from './models';
import * as incubate from './actions';
import {IKeyboardProfile} from "./models/IKeyboardProfile";

export type IncubateAction = ActionType<typeof incubate>;

export type IncubateState = Readonly<{
  keystrokeHistory: KeystrokeAt[];
  keystrokeQueue: Keystroke[];
  // difficulty: number;
  keyboardProfile: IKeyboardProfile;
  randomSource: () => number;
}>;

const defaultProfile: IKeyboardProfile = {
  keys: [],
  name: "Non-Keyboard",
};

export default combineReducers<IncubateState, IncubateAction>({
  keystrokeHistory: (state = [], action) => {
    switch (action.type) {
      case getType(incubate.keystroked):
        return [...state, action.payload];
      default:
        return state;
    }
  },
  keystrokeQueue: (state = [], action) => {
    switch (action.type) {
      case getType(incubate.updateQueue):
        return action.payload;
      case getType(incubate.initialiseApp):
        return [{char: 'a', alt, ctl}, {char: 'b', alt, ctl}];
      default:
        return state;
    }
  },
  keyboardProfile: (state = defaultProfile, action) => {
    switch (action.type) {
      case getType(incubate.initialiseApp):
        return action.payload;
      default:
        return state;
    }
  },
  randomSource: (state = Math.random) => {
      return state;
  },
});
