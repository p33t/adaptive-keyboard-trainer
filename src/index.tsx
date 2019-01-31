import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
// import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import KeystrokeInput from './features/incubate/components/KeystrokeInput';
import KeystrokeQueue from './features/incubate/components/KeystrokeQueue';

ReactDOM.render(
    <Provider store={store}>
        <App/>
        <KeystrokeQueue/><br/>
        <KeystrokeInput/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
