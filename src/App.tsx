import { useState } from "react";
import "./App.css";
import ScrollMouse from "./components/common/scrollMouse";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import { data } from "../src/config/dataSet";
import ExperienceList from "./components/ExperienceList/ExperienceList";

function App() {
  const [height, setHeight] = useState(window.scrollY);

  window.onscroll = function () {
    setHeight(window.scrollY);
  };

  return (
    <div className="h-screen w-full bg-white relative">
      <Home />
      <Experience cols={4} style={"grid-cols-4"} />
      <ScrollMouse />
      <ExperienceList/>
    </div>
  );
}

export default App;
