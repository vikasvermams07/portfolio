import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contacts from "./components/Contacts/Contacts";
import Skills from "./components/Skills/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contacts />
    </>
  );
}

export default App;
