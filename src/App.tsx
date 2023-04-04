import "./App.css";
import ScrollMouse from "./components/common/scrollMouse";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="h-screen w-full bg-white relative">
      <Home />
      <Experience cols= "3" />
      <ScrollMouse />
    </div>
  );
}

export default App;
