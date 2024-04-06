import React from 'react';
import KnowledgeCard from './knowledgecard'; 

const MainComponent2 = () => {
  return (
    <div className="w-[970px] h-[653px] flex flex-wrap justify-around p-12">
      <h2 className="w-full text-center font-inter font-bold text-2xl leading-[39.55px] mb-4">My Knowledge</h2>
      <p className="w-full text-center font-inter text-base leading-6 mb-8">In this session I will address the relevant topics with some knowledge acquired in my academic and professional life.</p>
      <KnowledgeCard title="Python Development" description="Machine learning, Deep learning" imageSrc="/python.png" /> {/* Reemplaza "/ruta/a/tu/imagen.jpg" con la ruta a tu imagen */}
      <KnowledgeCard title="Security Analyst" description="Devsecops, SAST, DAST" imageSrc="/secure.png" />
      <KnowledgeCard title="Web Development" description="Html, CSS, Js, Tailwind" imageSrc="/web.png" />  
      <KnowledgeCard title=".Net Development" description=".Net Api, JWT, SQL-Server" imageSrc="/ch.png" />     
      
      {/* Más tarjetas de conocimientos */}
    </div>
  );
};

export default MainComponent2;
