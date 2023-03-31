import { useState } from "react";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="h-screen w-screen bg-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden">
      <Home />
      <Home />
      <Experience />
    </div>
  );
}

export default App;
