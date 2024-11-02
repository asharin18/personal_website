import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Projects />
      <Skills />
      <About /> */}
    </div>
  );
}

export default App;
