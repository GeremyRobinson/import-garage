// src/app.js

import header from './header';  // Import the header component

function App() {
  return (
    <div className="App">
      {header()}  {/* Call the function directly if it's lowercase */}
    </div>
  );
}

export default App;