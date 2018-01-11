import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import promiseFinally from 'promise.prototype.finally'

promiseFinally.shim();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
