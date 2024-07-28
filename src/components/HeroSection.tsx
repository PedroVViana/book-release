import React from 'react';
import heroImage from '../assets/bg.jpg';

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center text-white py-20 sm:py-32"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="container mx-auto text-center relative z-10 px-4 sm:px-0">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Descubra "Nome do Livro"</h1>
        <p className="text-base sm:text-lg mb-8">O livro que vai transformar sua vida</p>
        <a href="#cta" className="bg-blue-500 px-6 py-3 rounded-full text-white hover:bg-blue-600 transition">
          Compre Agora
        </a>
      </div>
    </section>
  );
};

export default HeroSection;


