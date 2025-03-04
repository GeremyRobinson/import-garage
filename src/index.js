// src/index.js

import './globalimports.js';  // Import global imports (React, ReactDOM, styles)
import App from './app';  // Import the main App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);