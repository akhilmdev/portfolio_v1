import { useState } from "react";
import "./App.css";
import Experience from "./components/Experience/Experience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white">
      <p className="text-6xl w-auto h-auto">Let's start</p>
      <Experience />
    </div>
  );
}

export default App;
