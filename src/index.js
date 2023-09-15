import React from 'react';
import Reactdom from 'react-dom';
import './styles/index.css';
import App from './components/App';

Reactdom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
