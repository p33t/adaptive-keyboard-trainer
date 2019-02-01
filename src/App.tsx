import * as React from 'react';
import KeystrokeInput from './features/incubate/components/KeystrokeInput';
import KeystrokeQueue from './features/incubate/components/KeystrokeQueue';
import {Col, Row} from 'antd';
import KeystrokeFeedback from "./features/incubate/components/KeystrokeFeedback";

// import logo from './logo.svg';

class App extends React.Component {
    public render() {
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

export default App;
