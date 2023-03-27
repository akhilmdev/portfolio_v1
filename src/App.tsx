import { useState } from "react";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="bg-white">
      <Home />
      <Experience />
    </div>
  );
}

export default App;
