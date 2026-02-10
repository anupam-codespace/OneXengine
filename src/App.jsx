import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import CaseStudies from './components/CaseStudies';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const showCaseStudies = () => {
    setCurrentPage('case-studies');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="noise-overlay">
      <CustomCursor />
      {currentPage === 'home' ? (
        <>
          <Navbar />
          <main>
            <Hero />
            <TechMarquee />
            <About />
            <Services />
            <Portfolio onViewCaseStudies={showCaseStudies} />
            <Process />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </>
      ) : (
        <CaseStudies onBack={showHome} />
      )}
    </div>
  );
}

export default App;
