import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Experience from "./Components/Experience/Experience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white">
      <p className="text-6xl w-auto h-auto">Let's start</p>
      <Experience/>
    </div>
  );
}

export default App;
