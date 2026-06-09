import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/Home/HomePage";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <main>
        <HomePage />
      </main>
    </div>
  );
};

export default App;
