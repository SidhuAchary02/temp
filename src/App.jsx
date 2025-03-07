import React from "react";
import MessageDisplay from "./MessageDisplay";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <MessageDisplay message="Hello, this is a test message!" />
    </div>
  );
}

export default App;
