import React from 'react';

interface Props {
  title: string;
  description: string;
  imageSrc: string; // Añade una prop para la ruta de la imagen
}

const KnowledgeCard: React.FC<Props> = ({ title, description, imageSrc }) => {
  return (
    <div className="w-[310px] h-[225px]  bg-white flex flex-col items-center justify-center">
      <img src={imageSrc} alt={`${title} image`} width={68} height={68} className="top-[720.09px] left-[130px] mb-6" /> {/* Usa img para mostrar la imagen */}
      <h3 className="w-[158px] h-[22px] top-[814.09px] left-[85px] text-left font-inter font-medium text-lg leading-[22.25px] mb-6">{title}</h3>
      <p className="w-[134px] h-[24px] top-[851.09px] left-[97px] text-center font-inter text-base leading-6">{description}</p>
    </div>
  );
};

export default KnowledgeCard;
