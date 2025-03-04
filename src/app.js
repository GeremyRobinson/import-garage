// src/app.js

import './app.css';  // Scoped to app component styles
import header from './header';  // Import the header component

function App() {
  return (
    <div className="App">
      {header()}  {/* Render header */}
      {/* Additional components can be added here */}
    </div>
  );
}

export default App;