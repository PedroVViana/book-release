import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 px-6 md:px-12 lg:px-24">
    <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Destaques do Livro</h2>
        <p className="text-lg mb-8">Descubra os principais temas e ideias exploradas em "Nome do Livro"</p>
        <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-lg shadow-md bg-secondary">
            <h3 className="text-xl font-bold mb-2">Tema 1</h3>
            <p>Descrição do Tema 1: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, laborum. Tempora, eveniet voluptatum omnis obcaecati magni modi laudantium deserunt commodi maiores, dolorum soluta distinctio at quae libero dolore delectus! Perspiciatis.</p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-secondary">
            <h3 className="text-xl font-bold mb-2">Tema 2</h3>
            <p>Descrição do Tema 2: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, laborum. Tempora, eveniet voluptatum omnis obcaecati magni modi laudantium deserunt commodi maiores, dolorum soluta distinctio at quae libero dolore delectus! Perspiciatis.</p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-secondary">
            <h3 className="text-xl font-bold mb-2">Tema 3</h3>
            <p>Descrição do Tema 3: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, laborum. Tempora, eveniet voluptatum omnis obcaecati magni modi laudantium deserunt commodi maiores, dolorum soluta distinctio at quae libero dolore delectus! Perspiciatis.</p>
        </div>
        </div>
    </div>
    </section>

  );
};

export default Features;
