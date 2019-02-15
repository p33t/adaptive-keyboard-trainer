import {Input} from 'antd';
import * as React from 'react';
import {connect} from 'react-redux';
import {keystroked, updateQueue} from '../actions';
import {Keystroke, KeystrokeAt} from '../models';
import {KeyboardEventHandler} from 'react';
import {RootState} from '../../../store';
import {bindActionCreators, Dispatch} from "redux";

interface IActions {
    keystroked: (keystrokeAt: KeystrokeAt) => any;
    updateQueue: (queue: Keystroke[]) => any;
}

interface IState {
    keystrokeQueue: Keystroke[];
    randomSource: () => number;
}

const alt = false;
const ctl = false;

function KeystrokeInput(props: IActions & IState) {

    const keyPressed: KeyboardEventHandler<HTMLInputElement> = (evt) => {
        evt.preventDefault();
        props.keystroked({char: evt.key, at: 10, alt: false, ctl: false});
        const need = 10 - props.keystrokeQueue.length;
        if (need > 0) {
            const queue = [...props.keystrokeQueue];
            for (let i = 0 ; i < need; i++) {
                const char = 'abcdefghijklmnopqrstuvwxyz'.charAt(props.randomSource() * 26);
                queue.push({char, alt, ctl});
            }
            props.updateQueue(queue);
        }
    };

    return <Input onKeyPress={keyPressed}/>;
}

const mapStateToProps = (state: RootState): IState => ({
    keystrokeQueue: state.incubate.keystrokeQueue,
    randomSource: state.incubate.randomSource,
});

const mapDispatchToProps = (dispatch: Dispatch): IActions => (bindActionCreators({
    keystroked,
    updateQueue,
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(KeystrokeInput);
