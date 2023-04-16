import { useState } from "react";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import ExperienceList from "./components/ExperienceList/ExperienceList";
import ScrollTop from "./components/common/scrollTop";
import Works from "./components/Works/Works";
import ContactMe from "./components/contactMe/contactMe";

function App() {
  const [height, setHeight] = useState(window.scrollY);

  window.onscroll = function () {
    setHeight(window.scrollY);
  };

  return (
    <div className="w-full bg-white relative">
      <Home />
      <Experience cols={4} style={"grid-cols-4"} />
      <ExperienceList />
      <Works />
      <ContactMe height={height} />
      <ScrollTop height={height} />
    </div>
  );
}

export default App;
