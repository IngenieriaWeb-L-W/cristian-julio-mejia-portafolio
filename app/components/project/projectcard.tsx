import React from 'react';

interface ProjectProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="w-[310px] h-[225px] bg-white border border-[#F0F0F6] flex flex-col items-center justify-center m-4">
      <img src={imageSrc} alt={`${title} image`} width={68} height={68} className="mb-4" />
      <h3 className="font-inter font-medium text-lg leading-[22.25px] mb-2">{title}</h3>
      <p className="font-inter text-base leading-6 mb-4">{description}</p>
      <button className="p-2 bg-blue-500 text-white rounded">Saber más</button>
    </div>
  );
};

export default ProjectCard;
