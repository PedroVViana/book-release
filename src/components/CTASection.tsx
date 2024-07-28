import React from 'react';
import imgCTA from '../assets/bg2.jpg';

const CTASection: React.FC = () => {
  return (
    <section 
      id="cta" 
      className="relative bg-cover bg-center py-16 sm:py-24 text-white text-center" 
      style={{ backgroundImage: `url(${imgCTA})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="container mx-auto relative z-10 px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Garanta seu exemplar agora!</h2>
        <p className="text-base sm:text-lg mb-8">
          Aproveite nosso desconto de lançamento e tenha acesso exclusivo aos conteúdos extras.
        </p>
        <a 
          href="#contact" 
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Compre Agora
        </a>
      </div>
    </section>
  );
};

export default CTASection;
