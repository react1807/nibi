import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.css';
import {BrowserRouter} from 'react-router-dom'
import App from './components/html';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
