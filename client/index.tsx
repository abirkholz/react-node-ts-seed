import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';

// Import global CSS
import './index.css';

ReactDOM.render(
  <App.Containers.AppContainer />,
  document.getElementById('root') as HTMLElement
);
