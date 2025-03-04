// src/index.js

import './globalimports.js';  // Import global dependencies (React, ReactDOM, styles)
import App from './app';  // Import the main App component
import reportWebVitals from './reportWebVitals';  // Optional for performance tracking

import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();  // Optional for performance tracking