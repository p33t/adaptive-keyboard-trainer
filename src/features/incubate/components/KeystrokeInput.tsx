import {Input} from 'antd';
import * as React from 'react';
import {connect} from 'react-redux';
import {keystroked} from '../actions';
import {KeystrokeAt} from '../models';
import {KeyboardEventHandler} from 'react';
import {RootState} from '../../../store';

interface IProps {
    keystroked: (keystrokeAt: KeystrokeAt) => any;
    keystrokeHistory: KeystrokeAt[];
}

function KeystrokeInput(props: IProps) {

    const keyPressed: KeyboardEventHandler<HTMLInputElement> = (evt) => {
        props.keystroked({char: evt.key, at: 10, alt: false, ctl: false});
    };

    const soFar = props.keystrokeHistory.map(keystrokeAt => keystrokeAt.char).join();

    return (
        <React.Fragment>
            {soFar}
            <br/>
            <Input onKeyPress={keyPressed}/>
        </React.Fragment>
    );
}

const mapStateToProps = (state: RootState) => ({
    keystrokeHistory: state.incubate.keystrokeHistory,
});

export default connect(mapStateToProps, {
    keystroked,
})(KeystrokeInput);
