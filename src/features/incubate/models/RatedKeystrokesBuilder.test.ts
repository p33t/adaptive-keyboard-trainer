import {RatedKeystrokesBuilder} from './RatedKeystrokesBuilder';
import * as assert from 'assert';
import {RatedKeystroke} from '../models';

describe('Given a RatedKeystrokesBuilder', () => {
    let subject: RatedKeystrokesBuilder;
    beforeEach(() => {
        subject = new RatedKeystrokesBuilder();
    });
    it('should accept unique keystrokes', () => {
        subject.add('abc', 10);
        const exp: RatedKeystroke[] = [
            {
                char: 'a',
                ctl: false,
                alt: false,
                rating: 10,
            },
            {
                char: 'b',
                ctl: false,
                alt: false,
                rating: 10,
            },
            {
                char: 'c',
                ctl: false,
                alt: false,
                rating: 10,
            },
        ];
        assert.deepStrictEqual(subject.getArr(), exp);
    });
    it('should barf when same keystroke is supplied in the same call', () => {
        assert.throws(() => subject.add('aba', 10), /Repeated keystroke 'a'/);
    });
});
