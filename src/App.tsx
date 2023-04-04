import "./App.css";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="h-screen w-full bg-white relative">
      <Home />
      <Experience cols="3" />
    </div>
  );
}

export default App;
