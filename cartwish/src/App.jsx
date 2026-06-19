import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Routing from "./components/Routing/Routing";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Routing />
      </main>
    </div>
  );
};

export default App;
