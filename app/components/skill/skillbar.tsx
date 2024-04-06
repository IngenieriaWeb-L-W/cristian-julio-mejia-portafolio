import React from 'react';
import Image from 'next/image'; // Importa Image de 'next/image'

interface Props {
  skill: string;
  imageSrc: string; // Añade una prop para la ruta de la imagen
}

const SkillBar: React.FC<Props> = ({ skill, imageSrc }) => {
  return (
    <div className="flex items-center justify-between w-[186px] h-[24px]">
      <Image src={imageSrc} alt={`${skill} image`} width={15} height={15} className="top-[1093px] left-[40px]" /> {/* Usa Image para mostrar la imagen */}
      <span className="w-[156px] h-[24px] left-[70px]">{skill}</span>
    </div>
  );
};

export default SkillBar;
