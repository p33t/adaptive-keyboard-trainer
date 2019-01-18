import {createStandardAction} from 'typesafe-actions';
import {KeystrokeAt} from './models';

const KEYSTROKED = 'KEYSTROKED';

export const keystroked = createStandardAction(KEYSTROKED)<KeystrokeAt>();
