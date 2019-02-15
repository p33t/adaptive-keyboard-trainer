import {ActionType, getType} from 'typesafe-actions';

import {alt, ctl, Keystroke, KeystrokeAt} from './models';
import * as incubate from './actions';
import {IKeyboardProfile} from "./models/IKeyboardProfile";
import {IncubateAction, IncubateState} from "./index";

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

const defaultState: IncubateState = {
  keystrokeHistory: [],
  keystrokeQueue: [],
  keyboardProfile: defaultProfile,
  randomSource: Math.random,
};

export default function reduce(state: IncubateState = defaultState, action: IncubateAction): IncubateState {
    switch (action.type) {
      case getType(incubate.keystroked):
        const keystrokeHistory = [...state.keystrokeHistory, action.payload];
        return {...state, keystrokeHistory};
      case getType(incubate.updateQueue):
        return {...state, keystrokeQueue: action.payload};
      case getType(incubate.initialiseApp):
        return {...state,
          keystrokeQueue: [{char: 'a', alt, ctl}, {char: 'b', alt, ctl}],
          keyboardProfile: action.payload,
        };
      default:
        return state;
    }
}
