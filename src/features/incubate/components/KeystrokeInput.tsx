import {Input} from 'antd';
import * as React from 'react';
import {connect} from 'react-redux';
import {keystroked, updateQueue} from '../actions';
import {Keystroke, KeystrokeAt} from '../models';
import {KeyboardEventHandler} from 'react';
import {RootState} from '../../../store';

interface IProps {
    keystroked: (keystrokeAt: KeystrokeAt) => any;
    keystrokeHistory: KeystrokeAt[];
    keystrokeQueue: Keystroke[];
    updateQueue: (queue: Keystroke[]) => any;
}

const alt = false;
const ctl = false;

function KeystrokeInput(props: IProps) {

    const keyPressed: KeyboardEventHandler<HTMLInputElement> = (evt) => {
        props.keystroked({char: evt.key, at: 10, alt: false, ctl: false});
        const need = 10 - props.keystrokeQueue.length;
        if (need > 0) {
            const queue = [...props.keystrokeQueue];
            for (let i = 0 ; i < need; i++) {
                const char = 'abcdefghijklmnopqrstuvwxyz'.charAt(Math.random() * 26);
                queue.push({char, alt, ctl});
            }
            props.updateQueue(queue);
        }
    };

    const soFar = props.keystrokeHistory.map(keystrokeAt => keystrokeAt.char).join('');

    return (
        <React.Fragment>
            {soFar} <Input onKeyPress={keyPressed}/>
        </React.Fragment>
    );
}

const mapStateToProps = (state: RootState) => ({
    keystrokeHistory: state.incubate.keystrokeHistory,
    keystrokeQueue: state.incubate.keystrokeQueue,
});

export default connect(mapStateToProps, {
    keystroked,
    updateQueue,
})(KeystrokeInput);
