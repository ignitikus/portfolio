import { useState } from "react";
import Main from "./components/Main/Main";
import Mode from "./components/Mode/Mode";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [mode, setMode] = useState(true);

  return (
    <div>
      <Mode setMode={setMode} mode={mode} />
      <Main mode={mode} />
      <About mode={mode} />
      <Projects mode={mode} />
      <Contact mode={mode} />
      <Footer mode={mode} />
    </div>
  );
}

export default App;
