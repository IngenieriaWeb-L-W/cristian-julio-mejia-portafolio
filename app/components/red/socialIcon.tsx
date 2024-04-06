import React from 'react';

interface Props {
  imageSrc: string; // Añade una prop para la ruta de la imagen del icono
}

const SocialIcon: React.FC<Props> = ({ imageSrc }) => {
  return (
    <div className="w-[48px] h-[48px] opacity-1">
      <img src={imageSrc} alt="Icono de red social" width={48} height={48} /> {/* Usa img para mostrar el icono */}
    </div>
  );
};

export default SocialIcon;
