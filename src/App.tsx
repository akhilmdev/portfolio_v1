import { useState } from "react";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import ExperienceList from "./components/ExperienceList/ExperienceList";
import ScrollTop from "./components/common/scrollTop";

function App() {
  const [height, setHeight] = useState(window.scrollY);

  window.onscroll = function () {
    setHeight(window.scrollY);
  };

  return (
    <div className="h-screen w-full bg-white relative">
      <Home />
      <Experience cols={4} style={"grid-cols-4"} />
      <ScrollTop height={height} />
      <ExperienceList />
    </div>
  );
}

export default App;
