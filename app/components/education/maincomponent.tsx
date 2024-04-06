import React from 'react';
import EducationCard from './educationcard';

const MainComponent3 = () => {
  // Asume que tienes un array de objetos de educación
  const educationArray = [
    {university: "Universidad 1", student: "Estudiante 1", graduationDate: "Fecha de graduación 1", degree: "Título 1", description: "Descripción 1"},
    {university: "Universidad 2", student: "Estudiante 2", graduationDate: "Fecha de graduación 2", degree: "Título 2", description: "Descripción 2"},
    // Agrega más objetos de educación aquí
  ];

  return (
    <div className="w-[970px] h-[815px]  border border-[#F0F0F6] flex flex-col items-center justify-center">
      <h2 className="font-inter font-bold text-2xl leading-[39.55px] mb-4">Educación General</h2>
      <p className="font-inter text-base leading-6 mb-8">Descripción</p>
      {educationArray.map((education, index) => (
        <EducationCard key={index} {...education} />
      ))}
    </div>
  );
};

export default MainComponent3;
