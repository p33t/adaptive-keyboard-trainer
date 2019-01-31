import {Input} from 'antd';
import * as React from 'react';
import {connect} from 'react-redux';
import {Keystroke} from '../models';
import {RootState} from '../../../store';

interface IProps {
    keystrokeQueue: Keystroke[];
}

function KeystrokeQueue(props: IProps) {
    const chars = props.keystrokeQueue.map(keystroke => keystroke.char).join('');

    return (<Input value={chars} readOnly={true}/>);
}

const mapStateToProps = (state: RootState) => ({
    keystrokeQueue: state.incubate.keystrokeQueue,
});

export default connect(mapStateToProps, {})(KeystrokeQueue);
