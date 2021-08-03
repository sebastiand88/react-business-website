import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import Works from "./components/works/Works";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";

import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Services />
        <Works />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
