import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Global CSS import for all compontnts!!!

import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Service worker allows app to work offline!! 

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
