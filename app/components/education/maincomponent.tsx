import React from 'react';
import EducationCard from './educationcard';

const MainComponent3 = () => {
  
  const educationArray = [
    {university: "UDEA", student: "Cristian Julio", graduationDate: "Oct 2019 - Dec 2024", degree: "Systems Engineering", description: "I am currently studying the tenth semester of systems engineering. The final degree project and some elective subjects are required."},
    {university: "CISCO", student: "Cristian Julio", graduationDate: "Jun 2014 - Aug 2023", degree: "Cyber Threat Management", description: "Course carried out virtually from the Cisco platform."},
    {university: "CISCO", student: "Cristian Julio", graduationDate: "Apr 2014 - Jul 2023", degree: "Introduction To Cybersecurity", description: "Course carried out virtually from the Cisco platform."},

    {university: "SENA", student: "Cristian Julio", graduationDate: "Jan 2014 - Dec 2016", degree: "Systems Technology", description: "I carried out this technique at the National Learning Service (SENA), which allowed me to enter my working life in a more stable way."},
    {university: "Politénico Colombiano JIC", student: "Cristian Julio", graduationDate: "May 2009 - Dec 2012", degree: "Technologist in Data Systematizatio", description: "I carried out this technology in person at the Jaime Isaza Cadavid Colombian Polytechnic, Apartadó Headquarters."},
    // Agrega más objetos de educación aquí
  ];

  return (
    <div className="w-[970px] h-[815px]  flex flex-col items-center justify-center p-4">
      <h2 className="font-inter font-bold text-2xl leading-[39.55px] mb-4">Educaction</h2>
      <p className="font-inter text-base leading-6 mb-8">In this session some studies carried out by me will be shown: from techniques, technologies, courses, to
        undergraduate studies, etc.</p>
      {educationArray.map((education, index) => (
        <EducationCard key={index} {...education} />
      ))}
    </div>
  );
};

export default MainComponent3;
