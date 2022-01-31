import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Example from "./components/example/Example";
import Step1 from "./components/step1/Step1";
import Step2 from "./components/step2/Step2";
import Step3 from "./components/step3/Step3";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Menu />
      <div className="sections">
        <Intro />
        <Example />
        <Step1 />
        <Step2 />
        <Step3 />
        <Contact />
      </div>
    </div>
  );
}

export default App;
