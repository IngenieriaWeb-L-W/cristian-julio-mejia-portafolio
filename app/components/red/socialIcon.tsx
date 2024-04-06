import React from 'react';

interface Props {
  imageSrc: string;
  profileUrl: string
}

const SocialIcon: React.FC<Props> = ({ imageSrc, profileUrl }) => {
  return (
    <div className="w-[48px] h-[48px] opacity-1">
      
        <a href={profileUrl} target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} alt="Icono de red social" width={48} height={48} /> {/* Usa img para mostrar el icono */}
        </a>
    
    </div>
  );
};

export default SocialIcon;
