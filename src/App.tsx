import * as React from 'react';
import KeystrokeInput from './features/incubate/components/KeystrokeInput';
import KeystrokeQueue from './features/incubate/components/KeystrokeQueue';
import {Col, Row} from 'antd';
import KeystrokeFeedback from "./features/incubate/components/KeystrokeFeedback";
import {IKeyboardProfile} from "./features/incubate/models/IKeyboardProfile";
import {QwertyProfile} from "./features/incubate/models/QwertyProfile";
import {bindActionCreators, Dispatch} from "redux";
import {initialiseApp} from "./features/incubate/actions";
import {connect} from "react-redux";
import {RootState} from "./store";

// import logo from './logo.svg';

interface IMapDispatchToProps {
    initialiseApp: (profile: IKeyboardProfile) => void;
}

interface IMapStateToProps {
    keyboardProfile: IKeyboardProfile;
}

type AppProps = IMapDispatchToProps & IMapStateToProps;

class App extends React.Component<AppProps> {

    componentDidMount(): void {
        this.props.initialiseApp(new QwertyProfile());
    }

    public render() {
        return (
            <div className='App'>
                <h2>{this.props.keyboardProfile.name}</h2>
                <Row>
                    <Col span={6}>
                        <header className='App-header'>
                            <h1 className='App-title'>Adaptive Keyboard Trainer</h1>
                        </header>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}><KeystrokeFeedback/></Col>
                    <Col span={6}>
                        <KeystrokeQueue/>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <KeystrokeFeedback/>
                    </Col>
                    <Col span={6}>
                        <KeystrokeInput/>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState): IMapStateToProps => ({
    keyboardProfile: state.incubate.keyboardProfile || {},
});

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => (bindActionCreators({
    initialiseApp,
}, dispatch));

export default connect<IMapStateToProps, IMapDispatchToProps, {}, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(App);
