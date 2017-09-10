import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

// Import global CSS
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App.Containers.AppContainer />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
