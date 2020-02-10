import React from "react";
import Entry from "./Entry";

// 1. Create entry component
// 2. Create props to replace hardcoded data
// 3.0 Import the emojipedia const.
// 3.1 Map through the emojipedia array and render Entry components

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Entry />
        <Entry />
        <Entry />
      </dl>
    </div>
  );
}

export default App;
