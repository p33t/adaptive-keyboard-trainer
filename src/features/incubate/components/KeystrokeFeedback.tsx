import * as React from 'react';
import {connect} from 'react-redux';
import {KeystrokeAt} from '../models';
import {RootState} from '../../../store';

interface IProps {
    keystrokeHistory: KeystrokeAt[];
}

function KeystrokeFeedback(props: IProps) {
    const len = props.keystrokeHistory.length;
    const from = Math.max(0, len - 10);

    const str = props.keystrokeHistory
        .slice(from)
        .map(keystrokeAt => keystrokeAt.char)
        .join('');
    return <div>{str}</div>;
}

const mapStateToProps = (state: RootState) => ({
    keystrokeHistory: state.incubate.keystrokeHistory,
});

export default connect(mapStateToProps, {})(KeystrokeFeedback);
