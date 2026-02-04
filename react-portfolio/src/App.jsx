import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import FloatingDock from './components/FloatingDock';
import FloatingActions from './components/FloatingActions';
import VisitorBadge from './components/VisitorBadge';
import './App.css';

function App() {
  return (
    <div className="App">
      <VisitorBadge />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Achievements />
      <Skills />
      <Contact />
      <FloatingDock />
      <FloatingActions />
    </div>
  );
}

export default App;
