import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Help from './components/Help';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <FAQ />
    </>
  );
}

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "Papo Amigo | Sempre por Perto";
    
    // Get the title element and update it if it contains the default title
    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.hasAttribute('data-default')) {
      titleElement.removeAttribute('data-default');
    }
  }, []);

  return (
    <Router>
      <div className="font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/termos-de-uso" element={<Terms />} />
            <Route path="/politica-de-privacidade" element={<Privacy />} />
            <Route path="/ajuda" element={<Help />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App