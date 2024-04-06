import React from 'react';
import KnowledgeCard from './knowledgecard'; 

const MainComponent2 = () => {
  return (
    <div className="w-[970px] h-[653px] flex flex-wrap justify-around">
      <h2 className="w-full text-center font-inter font-bold text-2xl leading-[39.55px] mb-4">My Knowledge</h2>
      <p className="w-full text-center font-inter text-base leading-6 mb-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
      <KnowledgeCard title="Web Development" description="blog, e-commerce" imageSrc="/facebook.png" /> {/* Reemplaza "/ruta/a/tu/imagen.jpg" con la ruta a tu imagen */}
      <KnowledgeCard title="Título del conocimiento" description="Descripción del conocimiento" imageSrc="/facebook.png" />
      <KnowledgeCard title="Título del conocimiento" description="Descripción del conocimiento" imageSrc="/facebook.png" />
      <KnowledgeCard title="Título del conocimiento" description="Descripción del conocimiento" imageSrc="/facebook.png" />
      <KnowledgeCard title="Título del conocimiento" description="Descripción del conocimiento" imageSrc="/facebook.png" />
      <KnowledgeCard title="Título del conocimiento" description="Descripción del conocimiento" imageSrc="/facebook.png" />
      
      {/* Más tarjetas de conocimientos */}
    </div>
  );
};

export default MainComponent2;
