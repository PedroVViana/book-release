import React from 'react';
import HeroSection from './components/HeroSection';
import AboutProduct from './components/AboutProduct';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutProduct />
      <Testimonials />
      <Features />
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;

