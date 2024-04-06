import React from 'react';

interface Props {
  title: string;
  description: string;
  imageSrc: string; // Añade una prop para la ruta de la imagen
}

const KnowledgeCard: React.FC<Props> = ({ title, description, imageSrc }) => {
  return (
    <div className="w-[310px] h-[225px]  bg-white flex flex-col items-center justify-center whitespace-nowrap">
      <img src={imageSrc} alt={`${title} image`} width={68} height={68} className="top-[720.09px] left-[130px] mb-2" /> {/* Usa img para mostrar la imagen */}
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className=" text-sm ">{description}</p>
    </div>
  );
};

export default KnowledgeCard;
