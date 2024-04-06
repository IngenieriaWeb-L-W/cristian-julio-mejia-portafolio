import React from 'react';
import ProgrammingLanguageBar from './programminglanguagebar';

const ProgrammingLanguages = () => {
  return (
    <div className="w-[280px] h-[242px] rounded-tl-[30px] border border-blue-300 opacity-1">
      <h2 className="w-[215px] h-[22px] top-[760px] left-[40px] opacity-1 mb-6 text-left font-inter font-medium text-lg leading-[22.25px]">Programming Languages</h2>
      <ProgrammingLanguageBar language="Pyhton" percentage={70} />
      <ProgrammingLanguageBar language="CSS" percentage={60} />
      <ProgrammingLanguageBar language="JavaScript" percentage={40} />
      <ProgrammingLanguageBar language="C#" percentage={30} />
      <ProgrammingLanguageBar language="Matlab" percentage={10} />
    </div>
  );
};

export default ProgrammingLanguages;
