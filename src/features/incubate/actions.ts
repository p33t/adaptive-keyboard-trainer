import {createStandardAction} from 'typesafe-actions';
import {Keystroke, KeystrokeAt} from './models';
import {IKeyboardProfile} from "./models/IKeyboardProfile";

const KEYSTROKED = 'KEYSTROKED';
const UPDATE_QUEUE = 'UPDATE_QUEUE';
const INITIALISE_APP = 'INITIALISE_APP';

export const keystroked = createStandardAction(KEYSTROKED)<KeystrokeAt>();

export const updateQueue = createStandardAction(UPDATE_QUEUE)<Keystroke[]>();

export const initialiseApp = createStandardAction(INITIALISE_APP)<IKeyboardProfile>();
