import { useState } from "react";
import "./App.css";
import ScrollTop from "./components/common/scrollTop";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";

function App() {
  const [height, setHeight] = useState(window.scrollY);

  window.onscroll = function () {
    setHeight(window.scrollY);
  };

  return (
    <div className="h-screen w-full bg-white relative">
      <Home />
      <Experience cols="3" />
      <ScrollTop height={height} />
    </div>
  );
}

export default App;
