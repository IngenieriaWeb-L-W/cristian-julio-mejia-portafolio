import React from 'react';
import ProjectCard from './projectcard';

const MainComponent4 = () => {
  // Asume que tienes un array de objetos de proyectos
  const projectArray = [
    {imageSrc: "/youtube.png", title: "Título del proyecto 1", description: "Descripción del proyecto 1"},
    {imageSrc: "/youtube.png", title: "Título del proyecto 2", description: "Descripción del proyecto 2"},
    {imageSrc: "/youtube.png", title: "Título del proyecto 3", description: "Descripción del proyecto 3"},
    {imageSrc: "/youtube.png", title: "Título del proyecto 3", description: "Descripción del proyecto 4"},
    // Agrega más objetos de proyectos aquí
  ];

  return (
    <div className="w-[970px] h-[815px] bg-gray-200 border border-[#F0F0F6] flex flex-col items-center justify-center overflow-x-scroll">
      <h2 className="font-inter font-bold text-2xl leading-[39.55px] mb-4">Portafolio de Proyectos</h2>
      <p className="font-inter text-base leading-6 mb-8">Descripción</p>
      <div className="flex">
        {projectArray.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default MainComponent4;
