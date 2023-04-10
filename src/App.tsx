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
    <div className="h-screen w-full bg-white relative">
      <Home />
      <Experience
        cols={screen.width >= 800 ? 4 : 2}
        style={screen.width >= 800 ? "grid-cols-4" : "grid-cols-2"}
      />
      <ExperienceList />
      <Works />
      <ContactMe />
      <ScrollTop height={height} />
    </div>
  );
}

export default App;
