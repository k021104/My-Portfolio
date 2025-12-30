import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Navbar from './Components/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

function App() {

   useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <>
    <div id="back-to-top-anchor" />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
