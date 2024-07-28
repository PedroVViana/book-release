import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 px-6 md:px-12 lg:px-24 bg-secondary text-textMain">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Depoimentos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white text-textMain p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Leitor 1" className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md" />
            <h3 className="text-xl font-semibold mb-2">Leitor 1</h3>
            <p>"Este livro mudou minha vida! Recomendo a todos."</p>
          </div>
          <div className="bg-white text-textMain p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Leitor 2" className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md" />
            <h3 className="text-xl font-semibold mb-2">Leitor 2</h3>
            <p>"Uma leitura inspiradora e transformadora."</p>
          </div>
          <div className="bg-white text-textMain p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Leitor 3" className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md" />
            <h3 className="text-xl font-semibold mb-2">Leitor 3</h3>
            <p>"Não consegui parar de ler até terminar."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
