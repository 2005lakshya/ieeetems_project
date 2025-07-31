import React from "react";
import Header from "./components/Header";
import MapPage from "./components/MapPage";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <Header />
      
      {/* Main content area */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <MapPage />
      </div>
    </div>
  );
}

export default App;
