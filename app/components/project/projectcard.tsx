'use client'
import React, { useState } from "react";
import "./project.css";

interface ProjectProps {
  src: string;
  title: string;
  description: string;
  texto: string;
  githubLink: string;
}

const Project: React.FC<ProjectProps> = ({ src, title, description, texto, githubLink }) => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div className="border-black-100 flex h-[370px] w-[550px] flex-col items-center border p-2 bg-white">
      <img src={src} alt="Descripción" className="[h-300 px] w-[80px] object-cover mb-2" />
      <p className="mt-2 text-xl font-bold text-black whitespace-nowrap mb-2">{title}</p>
      <p className="mt-1 text-center text-gray-600 mb-2">{description}</p>
      <button onClick={() => setShowDialog(true)} className="mt-14 rounded bg-blue-500 px-4 py-2 text-white">
        {texto}
      </button>
      {showDialog && (
        <div className="dialog-animation fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-[50]">
          <div className="dialog-box rounded border-green-500 bg-green-100 p-4 shadow-lg relative">
            <button onClick={() => setShowDialog(false)} className="absolute top-0 right-0 mt-2 mr-2 rounded bg-red-500 px-2 py-1 text-white">
              X
            </button>
            <h2 className="mb-2 text-xl font-bold">More details about the project</h2>
            <p className="mb-4">{description}</p>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-green-700 underline">
              View code on Github
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;