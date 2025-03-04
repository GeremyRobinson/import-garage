// src/index.js

import './globalimports.js';  // Import global imports (React, ReactDOM, styles)
import App from './app';  // Import the main App component
import reportWebVitals from './reportWebVitals';  // (optional) for performance tracking

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();  // Optional for performance tracking