import React from 'react';
import livro from "../assets/livro.png";

const AboutProduct: React.FC = () => {
  return (
    <>
      <section id="about" className="py-16 px-6 md:px-12 lg:px-24 bg-primary">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <img src={livro} alt="Imagem do Livro" className="rounded-lg w-full lg:w-2/4 mb-8 lg:mb-0 lg:mr-8" />
          <div className="text-center lg:text-left lg:w-2/4">
            <h2 className="text-3xl font-bold mb-6">Sobre o Livro</h2>
            <p className="text-lg mb-8">
              "Nome do Livro" foi escrito para proporcionar [Benefício Principal: Lorem ipsum dolor sit amet consectetur adipisicing elit.]. 
              Com [Característica Chave: Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sint alias blanditiis dolor sapiente praesentium nobis suscipit sunt maiores ut.],
              este livro oferece [Benefício Adicional:Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sint alias
              blanditiis dolor sapiente praesentium nobis suscipit sunt maiores ut.].
            </p>
          </div>
        </div>
      </section>

      <section id="author" className="py-16 px-6 md:px-12 lg:px-24 bg-secondary">
        <div className="container mx-auto flex flex-col px-20 lg:flex-row items-center">
          <img src="https://via.placeholder.com/150" alt="Imagem do Autor" className="rounded-full w-32 h-32 md:w-48 md:h-48 mb-8 lg:mb-0 lg:mr-8 shadow-lg" />
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-6">Sobre o Autor</h2>
            <p className="text-lg mb-8">
              [Nome do Autor] é um escritor renomado conhecido por [Breve descrição do autor e suas conquistas: Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sint alias blanditiis dolor sapiente praesentium nobis suscipit sunt maiores ut.].
              Com anos de experiência em [campo de atuação], ele/ela trouxe [insights únicos] através de suas obras. 
            </p>
          </div>
        </div>
      </section>

      <section id="alternative-books" className="py-16 px-6 md:px-12 lg:px-24 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">Livros Alternativos do Autor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-secondary p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/150" alt="Livro 1" className="rounded-lg w-full mb-2" />
              <h3 className="text-xl font-bold mb-2">Livro 1</h3>
              <p className="text-md">Breve descrição do Livro 1: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="bg-secondary p-6 rounded-lg relative shadow-lg">
              <img src="https://via.placeholder.com/150" alt="Livro 2" className="rounded-lg w-full mb-2" />
              <h3 className="text-xl font-bold mb-2">Livro 2</h3>
              <p className="text-md">Breve descrição do Livro 2: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="bg-secondary p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/150" alt="Livro 3" className="rounded-lg w-full mb-2" />
              <h3 className="text-xl font-bold mb-2">Livro 3</h3>
              <p className="text-md">Breve descrição do Livro 3: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutProduct;
