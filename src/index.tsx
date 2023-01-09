import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import './styles.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <div>
    <CssBaseline />
    <App />
  </div>,
  rootElement
);
