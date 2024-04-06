import React from 'react';
import SocialIcon from './socialIcon';

const SocialLinks = () => {
  return (
    <div className="w-[48px] h-[363px] gap-[15px] opacity-1">
      <h2 className="w-[47px] h-[22px] font-inter font-bold text-lg leading-[22.25px]">Links</h2>
      <SocialIcon imageSrc="/github.png" profileUrl="https://github.com/camilo899"  />
      <SocialIcon imageSrc="/linkedin.png" profileUrl="https://linkedin.com/in/cristian-mejia-364404152" /> 
      <SocialIcon imageSrc="/youtube.png" profileUrl="https://www.youtube.com/channel/UCY1hEGYOF_2la7L7y_n3woA" />  
      <SocialIcon imageSrc="/facebook.png" profileUrl="https://www.facebook.com/"/>      
      <SocialIcon imageSrc="/instagram.png" profileUrl="https://www.instagram.com/" />       
      <SocialIcon imageSrc="/twitter.png" profileUrl="https://twitter.com/" /> 
      
      {/* Más iconos de redes sociales */}
    </div>
  );
};

export default SocialLinks;
