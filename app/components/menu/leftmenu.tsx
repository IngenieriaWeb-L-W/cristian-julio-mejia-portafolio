import React from 'react';
import ProfileImage from '../imagen/profileImage';
import PrimaryText from '../texts/primarytext';
import SecondaryText from '../texts/secondaytext';
import PersonalInfo from '../about/personalInfo';
import Languages from '../languages/languages';
import ProgrammingLanguages from '../programminglanguage/programminglanguages';
import ExtraSkills from '../skill/extraskills';

const LeftMenu = () => {
  return (
    <div className="w-[305px] h-[4517px] gap-2.5 opacity-1 bg-white flex flex-col items-center">
      {/* Contenido del menú izquierdo */}
      
      <div className='w-[150px] h-[242px] border border-blue-300'>
        <ProfileImage/>
        <PrimaryText/>
        <SecondaryText/>
      </div>

      <PersonalInfo/>
      <Languages/>
      <ProgrammingLanguages/>
      <ExtraSkills/>
      
    </div>
  );
};

export default LeftMenu;
