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
    <div className="w-[305px] h-[4517px] gap-2.5 opacity-1 bg-gray-200 flex flex-col items-center">
      {/* Contenido del menú izquierdo */}
      
      <div className='w-[150px] h-[242px]'>
        <ProfileImage/>
        <PrimaryText/>
        <SecondaryText/>
      </div>
      <div className=" w-64 border-t border-fuchsia-600 opacity-100"></div>

      <PersonalInfo/>
      <div className="w-64border-t border-fuchsia-600 opacity-100"></div>

      <Languages/>
      <div className="w-64 border-t border-fuchsia-600 opacity-100"></div>

      <ProgrammingLanguages/>
      <div className="w-64 border-t border-fuchsia-600 opacity-100"></div>
      <ExtraSkills/>
      
    </div>
  );
};

export default LeftMenu;
