import React from 'react';
import SkillBar from './skillbar';

const ExtraSkills = () => {
  return (
    <div className="w-[196px] h-[148px] rounded-tl-[30px] whitespace-nowrap ">
      <h2 className="text-lg font-bold text-center mb-4">Extra Skills</h2>
      <SkillBar skill="Adaptability" imageSrc="/check.png" /> {/* Reemplaza "/ruta/a/tu/imagen.jpg" con la ruta a tu imagen */}
      <SkillBar skill="Knowledge of security" imageSrc="/check.png" />
      <SkillBar skill="Analytical capabilities" imageSrc="/check.png" />
      <SkillBar skill="Testing and debugging" imageSrc="/check.png" />
      {/* Más habilidades */}
    </div>
  );
};

export default ExtraSkills;
