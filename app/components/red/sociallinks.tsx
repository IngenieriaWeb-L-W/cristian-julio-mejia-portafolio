import React from 'react';
import SocialIcon from './socialIcon';

const SocialLinks = () => {
  return (
    <div className="w-[48px] h-[363px] gap-[15px] opacity-1">
      <h2 className="w-[47px] h-[22px] font-inter font-bold text-lg leading-[22.25px]">Links</h2>
      <SocialIcon imageSrc="/facebook.png" /> 
      <SocialIcon imageSrc="/dribble.png" /> 
      <SocialIcon imageSrc="/instagram.png" /> 
      <SocialIcon imageSrc="/linkedin.png" /> 
      <SocialIcon imageSrc="/twitter.png" /> 
      <SocialIcon imageSrc="/youtube.png" /> 
      {/* Más iconos de redes sociales */}
    </div>
  );
};

export default SocialLinks;
