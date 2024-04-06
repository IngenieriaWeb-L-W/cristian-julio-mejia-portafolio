import React from 'react';
import SkillBar from './skillbar';

const ExtraSkills = () => {
  return (
    <div className="w-[196px] h-[148px] rounded-tl-[30px] border border-blue-300">
      <h2 className="w-[94px] h-[22px] top-[1052px] left-[40px] opacity-100 text-left font-inter font-medium text-lg leading-[22.25px] mb-8">Extra Skills</h2>
      <SkillBar skill="Habilidad 1" imageSrc="/check.png" /> {/* Reemplaza "/ruta/a/tu/imagen.jpg" con la ruta a tu imagen */}
      <SkillBar skill="Habilidad 2" imageSrc="/check.png" />
      <SkillBar skill="Habilidad 3" imageSrc="/check.png" />
      <SkillBar skill="Habilidad 4" imageSrc="/check.png" />
      {/* Más habilidades */}
    </div>
  );
};

export default ExtraSkills;
