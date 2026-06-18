import "./App.css";
import Hero from "./components/home";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Experience from "./components/work experience";
import Skills from "./components/skills";
import Certifications from "./components/certification";
import Contact from "./components/contact";

function App() {
  return (
    <>
    <Navbar/>

      <Hero />
      <div className="section-divider"></div>

      <About />
      <div className="section-divider"></div>

      <Projects />
      <div className="section-divider"></div>

      <Experience/>
      <div className="section-divider"></div>

      <Skills/>
      <div className="section-divider"></div>

      <Certifications/>
      <div className="section-divider"></div>

      <Contact/>
      <div className="section-divider"></div>
    </>
  );
}

export default App;