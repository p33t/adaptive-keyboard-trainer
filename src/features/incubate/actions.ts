import {createStandardAction} from 'typesafe-actions';
import {Keystroke, KeystrokeAt} from './models';

const KEYSTROKED = 'KEYSTROKED';
const UPDATE_QUEUE = 'UPDATE_QUEUE';

export const keystroked = createStandardAction(KEYSTROKED)<KeystrokeAt>();

export const updateQueue = createStandardAction(UPDATE_QUEUE)<Keystroke[]>();
