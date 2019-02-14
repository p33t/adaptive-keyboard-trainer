import * as React from 'react';
import KeystrokeInput from './features/incubate/components/KeystrokeInput';
import KeystrokeQueue from './features/incubate/components/KeystrokeQueue';
import {Col, Row} from 'antd';
import KeystrokeFeedback from "./features/incubate/components/KeystrokeFeedback";
import {IKeyboardProfile} from "./features/incubate/models/IKeyboardProfile";
import {QwertyProfile} from "./features/incubate/models/QwertyProfile";
import {Dispatch} from "redux";
import {initialiseApp} from "./features/incubate/actions";
import {connect} from "react-redux";

// import logo from './logo.svg';

interface IMapDispatchToProps {
    initialiseApp: (profile: IKeyboardProfile) => void;
    // keyboardProfile: IKeyboardProfile;
}

interface IMapStateToProps {
}

type AppProps = IMapDispatchToProps & IMapStateToProps;

class App extends React.Component<AppProps> {

    componentDidMount(): void {
        this.props.initialiseApp(new QwertyProfile());
    }

    public render() {
        // <h2>{this.props.keyboardProfile.name}</h2>
        return (
            <div className='App'>
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

// TODO: Find the shorthand way to do this
const mapDispatchToProps = (dispatch: Dispatch) => ({
    initialiseApp: (p: IKeyboardProfile) => dispatch(initialiseApp(p)),
});

// TODO: Find out how to eliminate this
const mapStateToProps = (state: any) => {
    // keyboardProfile: state.keyboardProfile,
    return state;
};

export default connect<IMapStateToProps, IMapDispatchToProps, {}>(mapStateToProps, mapDispatchToProps)(App);
