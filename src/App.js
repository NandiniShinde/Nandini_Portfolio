import React, { useEffect } from 'react';
import './App.css';

import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DecorativeElement from './components/DecorativeElement';
import Timeline from './components/Timeline';

function App() {
  useEffect(() => {
    window.scrollTo({ top:0, behaviour: 'smooth'});
  }, []);

  return (
    <ThemeProvider>
      <div className="app-container">
        <Navbar />
        <Hero />
        <DecorativeElement type="music-note" position="right" />
        <About />
        <DecorativeElement type="music-note" position="left" />
        <Projects />
        <DecorativeElement type="corner" position="right" />
        <Timeline />
        <DecorativeElement type="diamond" position="right" />
        
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;