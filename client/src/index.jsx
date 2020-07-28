import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PopApp from './components/PopApp';

ReactDOM.render(<BrowserRouter><PopApp /></BrowserRouter>, document.getElementById('PopApp'));